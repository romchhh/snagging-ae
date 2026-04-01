import type { MetadataRoute } from 'next'
import { defaultDescription, SITE_NAME, SITE_URL } from '@/lib/site-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: `${SITE_URL}/`,
    name: SITE_NAME,
    short_name: 'Snagging.ae',
    description: defaultDescription,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F9DC0A',
    lang: 'en-AE',
    dir: 'ltr',
    categories: ['business', 'utilities'],
  }
}
