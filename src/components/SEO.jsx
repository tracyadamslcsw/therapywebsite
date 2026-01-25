import { Helmet } from 'react-helmet-async'

export function SEO({
  title = 'Tracy Adams, LCSW',
  description = 'EMDR and IFS therapy for high-achieving women in Denver, Colorado, California, and Florida. Stop people-pleasing. Start living.',
  keywords = 'EMDR therapy Denver, EMDR therapist Colorado, IFS therapy, people pleasing therapy, anxiety therapist Denver',
  image = '/og-image.jpg',
  url,
  type = 'website',
}) {
  const siteTitle = 'Tracy Adams, LCSW'
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      {url && <meta name="twitter:url" content={url} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Tracy Adams, LCSW" />
    </Helmet>
  )
}

export default SEO
