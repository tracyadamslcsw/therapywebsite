import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.tracyadamslcsw.com'

export function SEO({
  title = 'Tracy Adams, LCSW',
  description = 'EMDR and IFS therapy for high-achieving men and women in Denver, Colorado, California, and Florida. Stop people-pleasing. Start living.',
  keywords = 'EMDR therapy Denver, EMDR therapist Colorado, IFS therapy, people pleasing therapy, anxiety therapist Denver',
  image = '/tracy-adams.png',
  path,
  type = 'website',
}) {
  const siteTitle = 'Tracy Adams, LCSW'
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`
  const canonicalUrl = path ? `${BASE_URL}${path}` : undefined
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Tracy Adams, LCSW" />
    </Helmet>
  )
}

export default SEO
