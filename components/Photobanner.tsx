import Image from 'next/image'

interface PhotoBannerProps {
  src: string
  alt: string
  height?: number
  overlay?: boolean
  quote?: string
}

export default function PhotoBanner({ src, alt, height = 480, overlay = true, quote }: PhotoBannerProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        style={{ filter: quote ? 'brightness(0.55)' : 'brightness(0.72)' }}
      />
      {overlay && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: quote
              ? 'linear-gradient(to bottom, rgba(6,5,4,0.45) 0%, rgba(6,5,4,0.55) 100%)'
              : 'linear-gradient(to right, rgba(250,248,244,0.35) 0%, transparent 40%, transparent 60%, rgba(250,248,244,0.35) 100%)',
            display: quote ? 'flex' : undefined,
            alignItems: quote ? 'center' : undefined,
            justifyContent: quote ? 'center' : undefined,
            textAlign: quote ? 'center' : undefined,
            padding: quote ? '40px' : undefined,
          }}
        >
          {quote && (
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(calc(22px * var(--text-scale)), 2.8vw, calc(36px * var(--text-scale)))',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#fff',
                  maxWidth: '720px',
                  lineHeight: 1.45,
                  letterSpacing: '-0.01em',
                }}
              >
                {quote}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}