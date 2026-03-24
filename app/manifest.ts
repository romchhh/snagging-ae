import type { MetadataRoute } from 'next'
import { SITE_NAME, defaultDescription } from '@/lib/site-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Snagging.ae',
    description: defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F9DC0A',
    lang: 'en',
    dir: 'ltr',
  }
}
