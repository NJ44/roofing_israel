import React, { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    id: 1,
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide free, no-obligation estimates for all roofing projects. Contact us to schedule an inspection and quote.',
  },
  {
    id: 2,
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements are completed within 1-2 days, depending on the size and complexity of the roof and weather conditions.',
  },
  {
    id: 3,
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed and carry comprehensive liability and worker\'s compensation insurance for your protection.',
  },
  {
    id: 4,
    question: 'Do you offer warranties?',
    answer: 'Yes, we offer industry-leading material warranties and workmanship guarantees on all our installations.',
  },
  {
    id: 5,
    question: 'What happens if we find rot during the project?',
    answer: 'If we discover damaged wood or structural issues, we will document it with photos, notify you immediately, and provide a clear price for the necessary repairs before proceeding.',
  },
  {
    id: 6,
    question: 'Do you handle insurance claims?',
    answer: 'Yes, we have extensive experience working with insurance companies and can help guide you through the claims process for storm damage.',
  },
]

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
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
        id={`faq-answer-${faq.id}`}
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
  const [openId, setOpenId] = useState(null) // All FAQs closed by default

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Get answers to common questions about our roofing services</p>
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
              key={faq.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FAQ

