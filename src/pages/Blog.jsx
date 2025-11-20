import React from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Tips for Maintaining Healthy Teeth",
      excerpt: "Discover simple yet effective ways to keep your teeth healthy and your smile bright. Learn about proper brushing techniques, flossing, and the importance of regular dental checkups.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop",
      category: "Oral Health"
    },
    {
      id: 2,
      title: "Understanding the Benefits of Professional Teeth Whitening",
      excerpt: "Professional teeth whitening can transform your smile in just one visit. Learn about the process, benefits, and how it compares to at-home treatments.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop",
      category: "Cosmetic Dentistry"
    },
    {
      id: 3,
      title: "What to Expect During Your First Dental Implant Consultation",
      excerpt: "Dental implants are a permanent solution for missing teeth. This guide walks you through what to expect during your initial consultation and the implant process.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop",
      category: "Specialized Care"
    },
    {
      id: 4,
      title: "The Link Between Oral Health and Overall Wellness",
      excerpt: "Your oral health is more connected to your overall health than you might think. Discover how maintaining good dental hygiene can benefit your entire body.",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop",
      category: "Health & Wellness"
    },
    {
      id: 5,
      title: "Emergency Dental Care: When to Seek Immediate Treatment",
      excerpt: "Dental emergencies can happen at any time. Learn to recognize when you need immediate dental care and what steps to take before reaching our office.",
      date: "February 20, 2024",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=400&fit=crop",
      category: "Emergency Care"
    },
    {
      id: 6,
      title: "Choosing the Right Toothbrush and Toothpaste for Your Needs",
      excerpt: "Not all oral care products are created equal. Get expert advice on selecting the best toothbrush and toothpaste for your specific dental needs.",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop",
      category: "Oral Health"
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
            Dental Health Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest in dental care, oral health tips, and insights from our expert team.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blog

