import React from 'react'
import { useLocation } from 'react-router-dom'
import { config } from '../config'

// SEO metadata for each route
const getPageMetadata = (pathname) => {
  const baseTitle = 'יניב שיפוצים'
  const city = config.CITY

  const metadataMap = {
    '/': {
      title: `${baseTitle} | שירותי קירוי ואיטום גגות`,
      description: `שירותי קירוי ואיטום גגות מקצועיים ב${city}. תיקון גגות רעפים, החלפת גגות, ושיקום נזקי סערה. הצעת מחיר חינם.`
    },
    '/services/roof-repair': {
      title: `תיקון גגות ב${city} | ${baseTitle}`,
      description: `תיקון נזילות, רעפים חסרים ובלאי גגות ב${city}. מענה מהיר ומקצועי לכל בעיה בגג.`
    },
    '/services/roof-replacement': {
      title: `החלפת גגות ב${city} | ${baseTitle}`,
      description: `שירותי החלפת גגות מלאים ב${city}. שימוש בחומרים האיכותיים ביותר עם אחריות מקיפה.`
    },
    '/services/storm-restoration': {
      title: `שיקום נזקי סערה ב${city} | ${baseTitle}`,
      description: `הערכת נזקים ושיקום גגות לאחר מזג אוויר סוער ב${city}. סיוע בתביעות ביטוח.`
    },
    '/reviews': {
      title: `ביקורות לקוחות | ${baseTitle} — ${city}`,
      description: `קראו מה הלקוחות שלנו אומרים על שירותי הקירוי והאיטום של ${baseTitle} ב${city}.`
    },
    '/contact': {
      title: `צור קשר | ${baseTitle} — ${city}`,
      description: `צרו קשר עם ${baseTitle} ב${city} להזמנת בדיקת גג או קבלת הצעת מחיר חינם.`
    },
    '/blog': {
      title: `מאמרים וטיפים בנושא גגות | ${baseTitle} — ${city}`,
      description: `טיפים לתחזוקת גגות, מידע על חומרים וחדשות מעולם הקירוי מאת המומחים של ${baseTitle}.`
    }
  }

  // Check for location pages
  if (pathname.startsWith('/locations/')) {
    const slug = pathname.split('/locations/')[1]
    const location = config.LOCATIONS?.find(loc => loc.slug === slug)
    if (location) {
      return {
        title: `${location.name} | ${baseTitle} — ${location.city}`,
        description: `Visit ${baseTitle} at ${location.name} in ${location.city}. ${location.address}, ${location.city}. Contact us at ${location.phone} to schedule your free consultation.`
      }
    }
  }

  // Return metadata for the current path or default
  return metadataMap[pathname] || metadataMap['/']
}

const SEO = () => {
  const location = useLocation()
  const { title, description } = getPageMetadata(location.pathname)
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://yourdomain.com'

  return (
    <>
      {/* Update meta tags dynamically */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.title = ${JSON.stringify(title)};
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) metaDescription.content = ${JSON.stringify(description)};
            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) canonical.href = ${JSON.stringify(canonicalUrl)};
            
            // Update Open Graph tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.content = ${JSON.stringify(title)};
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) ogDescription.content = ${JSON.stringify(description)};
            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) ogUrl.content = ${JSON.stringify(canonicalUrl)};
            
            // Update Twitter tags
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (twitterTitle) twitterTitle.content = ${JSON.stringify(title)};
            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) twitterDescription.content = ${JSON.stringify(description)};
          `,
        }}
      />

      {/* LegalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HomeAndConstructionBusiness',
            '@id': canonicalUrl,
            name: config.BUSINESS_NAME,
            description: description,
            image: config.LOGO_URL && !config.LOGO_URL.startsWith('{{') ? config.LOGO_URL : undefined,
            telephone: config.PHONE,
            email: config.EMAIL,
            address: {
              '@type': 'PostalAddress',
              streetAddress: config.ADDRESS_LINE,
              addressLocality: config.CITY,
            },
            geo: {
              '@type': 'GeoCoordinates',
              // Add coordinates if available
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '10:00',
                closes: '14:00',
              },
            ],
            priceRange: '$$',
            areaServed: {
              '@type': 'City',
              name: config.CITY,
            },
            // Add services schema
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Construction and Roofing Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Roof Repair',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Roof Replacement',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Storm Restoration',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Gutter Installation',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

export default SEO

