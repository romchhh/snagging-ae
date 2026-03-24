import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import BookingModal from '@/components/BookingModal'
import { defaultDescription, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site-config'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500', '600'],
})

const titleDefault = `${SITE_NAME} — ${SITE_TAGLINE}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titleDefault,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'business',
  classification: 'Property inspection services',
  keywords: [
    'property snagging UAE',
    'snagging inspection Dubai',
    'handover inspection Abu Dhabi',
    'new build inspection UAE',
    'DLP inspection',
    'defect liability period',
    'property inspection Emirates',
    'pre-handover snagging',
    'commercial property inspection Dubai',
    'independent snagging report',
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    alternateLocale: ['en_US', 'en_GB'],
    url: '/',
    siteName: SITE_NAME,
    title: titleDefault,
    description: defaultDescription,
    images: [
      {
        url: '/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Professional property inspection and snagging in the UAE',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: titleDefault,
    description: defaultDescription,
    images: ['/hero.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-AE': '/',
      en: '/',
    },
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9DC0A' },
    { media: '(prefers-color-scheme: dark)', color: '#222221' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${playfair.variable} ${jost.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <JsonLd />
        <BookingModal />
        {children}
      </body>
    </html>
  )
}