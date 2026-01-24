import { Helmet } from 'react-helmet-async'

/**
 * SEO Component for managing meta tags
 * Use this component on each page to set page-specific SEO
 */
export function SEO({
  title = 'Professional Therapy Services',
  description = 'Compassionate and professional therapy services to support your mental health and wellbeing.',
  keywords = 'therapy, counseling, mental health, therapist, psychotherapy, wellness',
  image = '/og-image.jpg',
  url,
  type = 'website',
}) {
  const siteTitle = 'Therapy Website'
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {url && <meta name="twitter:url" content={url} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Therapy Website" />
    </Helmet>
  )
}

export default SEO
