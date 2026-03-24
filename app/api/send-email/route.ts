import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  containsDangerousPatterns,
  validateJsonInput,
} from "@/lib/security";

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
const RECIPIENT_EMAIL =
  process.env.EMAILJS_RECIPIENT_EMAIL || "roman.fedoniuk@gmail.com";

const FORM_LABELS: Record<string, string> = {
  contact: "Contact page",
  "booking-modal": "Booking modal",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const clientId =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const rateLimit = checkRateLimit(clientId, 20, 60000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const bodyText = await req.text();

    const jsonValidation = validateJsonInput(bodyText, 50000);
    if (!jsonValidation.valid) {
      return NextResponse.json(
        { error: "Invalid input", details: jsonValidation.error },
        { status: 400 }
      );
    }

    const body = JSON.parse(bodyText) as Record<string, unknown>;
    const formSourceRaw = body.formSource;
    const fullName = body.fullName;
    const phone = body.phone;
    const email = body.email;
    const propertyType =
      typeof body.propertyType === "string" ? body.propertyType.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    const formSource =
      formSourceRaw === "contact" || formSourceRaw === "booking-modal"
        ? formSourceRaw
        : null;

    if (!formSource) {
      return NextResponse.json(
        { error: "Invalid form source" },
        { status: 400 }
      );
    }

    if (!isNonEmptyString(fullName)) {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 }
      );
    }

    if (!isNonEmptyString(phone)) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    if (!isNonEmptyString(email) || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const contentToCheck = `${fullName} ${phone} ${email} ${propertyType} ${message}`;
    if (containsDangerousPatterns(contentToCheck)) {
      return NextResponse.json(
        { error: "Dangerous patterns detected in form data" },
        { status: 400 }
      );
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY ||
      !EMAILJS_PRIVATE_KEY
    ) {
      console.error("EmailJS configuration is not set");
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, and EMAILJS_PRIVATE_KEY in environment variables.",
        },
        { status: 500 }
      );
    }

    const fn = escapeHtml(fullName.trim());
    const ph = escapeHtml(phone.trim());
    const em = escapeHtml(email.trim());
    const pt = propertyType ? escapeHtml(propertyType) : "—";
    const msg = message
      ? escapeHtml(message).replace(/\n/g, "<br>")
      : "—";
    const sourceLabel = FORM_LABELS[formSource] ?? formSource;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #222221;">Snagging Services — inspection request</h2>
        <p><strong>Source:</strong> ${escapeHtml(sourceLabel)}</p>
        <p><strong>Full Name:</strong> ${fn}</p>
        <p><strong>Phone:</strong> ${ph}</p>
        <p><strong>Email:</strong> ${em}</p>
        <p><strong>Property Type:</strong> ${pt}</p>
        <p><strong>Message:</strong><br>${msg}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was sent from the Snagging Services website form.</p>
      </div>
    `;

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: RECIPIENT_EMAIL,
          subject: `[Snagging] ${sourceLabel} — ${fullName.trim()}`,
          message: emailHtml,
          reply_to: email.trim() || RECIPIENT_EMAIL,
        },
      }),
    });

    const responseData = await response.text();

    if (!response.ok) {
      console.error("EmailJS API error:", responseData);
      return NextResponse.json(
        { error: "Failed to send email", details: responseData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
