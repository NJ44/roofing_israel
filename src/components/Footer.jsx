import React from 'react'
import { FooterSection } from './ui/footer-section'
import { config } from '../config'

const Footer = () => {
  return (
    <>
      <FooterSection />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RoofingContractor',
            name: config.BUSINESS_NAME,
            description: config.TAGLINE,
            address: {
              '@type': 'PostalAddress',
              streetAddress: config.ADDRESS_LINE,
              addressLocality: config.CITY,
            },
            telephone: config.PHONE,
            email: config.EMAIL,
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
            priceRange: '$$',
            areaServed: {
              '@type': 'City',
              name: config.CITY,
            },
          }),
        }}
      />
    </>
  )
}

export default Footer

