import React from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'
import { scrollToElement } from '../hooks/useLenis'

const OurPractice = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Image */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=600&fit=crop"
            alt="Our Practice"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Practice
        </motion.h1>

        {/* Content */}
        <motion.div 
          className="prose prose-lg max-w-none text-black leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4">
            At {config.BUSINESS_NAME}, we are committed to providing exceptional dental care in a warm, welcoming environment. Our practice combines state-of-the-art technology with a compassionate, patient-centered approach to ensure you receive the highest quality dental treatment.
          </p>

          <p className="mb-4">
            Our team of experienced dental professionals is dedicated to helping you achieve and maintain optimal oral health. We understand that visiting the dentist can be anxiety-inducing for some patients, which is why we've created a calming, comfortable atmosphere where you can feel at ease throughout your visit.
          </p>

          <p className="mb-4">
            We believe in taking the time to listen to your concerns, explain all treatment options clearly, and work with you to develop personalized care plans that meet your unique needs. Whether you're visiting us for a routine checkup, cosmetic enhancement, or specialized treatment, our team is here to support you every step of the way.
          </p>

          <p className="mb-4">
            Our practice is equipped with the latest dental technology and techniques, allowing us to provide efficient, effective treatments while minimizing discomfort and recovery time. From digital X-rays and intraoral cameras to advanced sterilization protocols, we maintain the highest standards of care and safety.
          </p>

          <p className="mb-4">
            We're proud to serve the {config.CITY} community and are committed to building lasting relationships with our patients. Our goal is to help you achieve a healthy, beautiful smile that you can be confident about for years to come.
          </p>

          <p className="mb-6">
            We welcome new patients and are currently accepting appointments. Contact us today to schedule your visit and experience the difference that personalized, compassionate dental care can make.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement('#contact', { offset: -100 });
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default OurPractice

