import { SITE_NAME, SITE_URL, defaultDescription } from '@/lib/site-config'

const graph = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: defaultDescription,
    url: SITE_URL,
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
]

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
