import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Calendar, ArrowLeft } from 'lucide-react'

const Blog = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const blogPosts = [
    {
      id: 1,
      title: "5 סימנים שהגג שלכם זקוק לתיקון דחוף",
      excerpt: "למדו לזהות את הסימנים המוקדמים לבעיות בגג ולמנוע נזקים יקרים. מדליפות ועד רעפים חסרים - המדריך המלא.",
      date: "15 ינואר 2024",
      image: "https://images.unsplash.com/photo-1516592653456-4293f3fccb98?w=800&q=80",
      category: "תחזוקה"
    },
    {
      id: 2,
      title: "איך לבחור את סוג הגג המתאים לבית שלכם",
      excerpt: "השוואה מקיפה בין סוגי גגות שונים: רעפי חרס, מתכת, ביטומן ועוד. גלו מה מתאים לכם ביותר.",
      date: "10 ינואר 2024",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
      category: "מדריכים"
    },
    {
      id: 3,
      title: "איטום גגות: למה זה קריטי במיוחד בחורף",
      excerpt: "הגשמים מגיעים - האם הגג שלכם מוכן? כל מה שצריך לדעת על איטום נכון והגנה מפני חדירת מים.",
      date: "5 דצמבר 2023",
      image: "https://images.unsplash.com/photo-1632778149975-420e04316a88?w=800&q=80",
      category: "איטום"
    },
    {
      id: 4,
      title: "כמה עולה החלפת גג? מדריך מחירים 2024",
      excerpt: "הערכת עלויות מפורטת להחלפת גג למגורים, כולל חומרים, עבודה ותוספות אפשריות. תכננו את התקציב נכון.",
      date: "28 נובמבר 2023",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      category: "עלויות"
    },
    {
      id: 5,
      title: "מה לעשות אחרי נזקי סופה לגג",
      excerpt: "מדריך שלב אחר שלב להתמודדות עם נזקי סערה, כולל תיעוד לביטוח ותיקונים דחופים.",
      date: "20 נובמבר 2023",
      image: "https://images.unsplash.com/photo-1527482797697-5756f61017ff?w=800&q=80",
      category: "חירום"
    },
    {
      id: 6,
      title: "מערכות ניקוז וסיפות גג - המדריך המלא",
      excerpt: "למה מערכת ניקוז טובה היא קריטית לבריאות הגג? כל מה שצריך לדעת על מרזבים וסיפות.",
      date: "15 נובמבר 2023",
      image: "https://images.unsplash.com/photo-1595841055318-56146663567d?w=800&q=80",
      category: "תחזוקה"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            מאמרים וטיפים לקירוי
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            המדריך המקיף שלכם לתחזוקת גג, טיפים מקצועיים ועדכונים מעולם הקירוי
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>קרא עוד</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-lg">
            מאמרים נוספים יתווספו בקרוב...
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog

