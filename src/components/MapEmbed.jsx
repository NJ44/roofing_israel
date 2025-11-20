import React from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

const MapEmbed = () => {
  const mapSrc = config.GOOGLE_MAP_EMBED_SRC && !config.GOOGLE_MAP_EMBED_SRC.startsWith('{{')
    ? config.GOOGLE_MAP_EMBED_SRC
    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576894!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTQuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${config.ADDRESS_LINE}, ${config.CITY}`
  )}`

  return (
    <motion.section 
      id="map"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">
            Visit our office in {config.CITY}
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Location of ${config.BUSINESS_NAME} in ${config.CITY}`}
              aria-label={`Interactive map showing the location of ${config.BUSINESS_NAME}`}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4">
              <strong>{config.BUSINESS_NAME}</strong>
              <br />
              {config.ADDRESS_LINE}
              <br />
              {config.CITY}
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default MapEmbed

