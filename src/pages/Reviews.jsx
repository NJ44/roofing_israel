import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { config, sampleReviews } from '../config'
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1'
import { useTranslation } from '../hooks/useTranslation'
import { Star } from 'lucide-react'

const Reviews = () => {
  const { t } = useTranslation()
  // Convert sample reviews to testimonials format
  const reviews = config.GOOGLE_REVIEWS_DATA || sampleReviews

  const testimonialImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=faces",
  ]

  const testimonials = reviews.map((review, index) => ({
    text: review.text,
    image: testimonialImages[index % testimonialImages.length],
    name: review.author,
    role: "לקוח",
    rating: review.rating || 5,
    date: review.date,
  }))

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
            מה הלקוחות שלנו אומרים
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
            הצטרפו למאות לקוחות מרוצים שבחרו במומחי הקירוי המובילים בישראל
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[0, 1, 2].map((colIndex) => (
              <TestimonialsColumn
                key={colIndex}
                testimonials={testimonials.filter((_, index) => index % 3 === colIndex)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            היית לקוח שלנו? נשמח לשמוע ממך!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            המשוב שלך עוזר לנו להשתפר ולהעניק את השירות הטוב ביותר לכולם.
          </p>
          <Link
            to="/leave-review"
            className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200"
          >
            כתוב ביקורת עכשיו
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Reviews
