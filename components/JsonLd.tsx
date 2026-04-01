import {
  SITE_EMAIL,
  SITE_INSTAGRAM_URL,
  SITE_NAME,
  SITE_PHONE_E164,
  SITE_URL,
  SITE_WHATSAPP_URL,
  defaultDescription,
} from '@/lib/site-config'

const graph = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: defaultDescription,
    url: SITE_URL,
    image: `${SITE_URL}/hero.jpg`,
    telephone: SITE_PHONE_E164,
    email: SITE_EMAIL,
    sameAs: [SITE_INSTAGRAM_URL],
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'AdministrativeArea', name: 'United Arab Emirates' },
    ],
    serviceType: [
      'Property snagging',
      'Pre-handover inspection',
      'Defect liability period inspection',
      'Building inspection',
      'Commercial property inspection',
    ],
    priceRange: '$$',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: SITE_PHONE_E164,
        email: SITE_EMAIL,
        availableLanguage: ['English', 'Arabic'],
        areaServed: 'AE',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: SITE_WHATSAPP_URL,
        availableLanguage: ['English', 'Arabic'],
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: defaultDescription,
    inLanguage: ['en-AE', 'en'],
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'ReadAction',
      target: SITE_URL,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL.replace(/\/$/, '')}/#webpage`,
    url: SITE_URL.replace(/\/$/, ''),
    name: SITE_NAME,
    description: defaultDescription,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL.replace(/\/$/, '')}/hero.jpg`,
    },
    inLanguage: 'en-AE',
  },
]

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
