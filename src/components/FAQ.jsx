import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '../hooks/useTranslation'

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null) // All FAQs closed by default
  const { t } = useTranslation()

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = t.faq.questions || []

  return (
    <motion.section
      id="faq"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.faq.title}</h2>
          <p className="text-gray-600">{t.faq.subtitle}</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FAQ

