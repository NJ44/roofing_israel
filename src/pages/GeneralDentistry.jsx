import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'

const GeneralDentistry = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop"
            alt="General Dentistry"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          General Dentistry
        </motion.h1>

        <motion.div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4">
            At {config.BUSINESS_NAME}, we believe that excellent oral health is the foundation of a beautiful smile and overall well-being. Our comprehensive general dentistry services are designed to provide you and your family with the highest quality dental care in a comfortable, welcoming environment. Whether you're visiting us for a routine checkup or addressing a specific dental concern, our experienced team is committed to delivering personalized care that meets your unique needs.
          </p>

          <p className="mb-4">
            Our general dentistry practice encompasses a wide range of preventive and restorative treatments aimed at maintaining your oral health throughout every stage of life. We understand that regular dental visits are essential for preventing problems before they develop, which is why we emphasize preventive care as the cornerstone of our practice. During your routine examinations, our skilled dentists will thoroughly assess your teeth, gums, and overall oral health, using advanced diagnostic tools to identify any potential issues early on.
          </p>

          <p className="mb-4">
            Professional dental cleanings are an integral part of maintaining optimal oral health. Our dental hygienists use state-of-the-art equipment and techniques to remove plaque, tartar, and surface stains that regular brushing and flossing cannot eliminate. These cleanings not only keep your teeth looking their best but also help prevent gum disease, cavities, and other oral health problems. We take the time to educate our patients about proper oral hygiene techniques and provide personalized recommendations based on their specific needs.
          </p>

          <p className="mb-4">
            When dental issues do arise, our team is equipped to provide effective restorative treatments. From simple fillings to more complex procedures, we use the latest materials and techniques to restore your teeth to their natural function and appearance. Our fillings are made from tooth-colored composite materials that blend seamlessly with your natural teeth, ensuring both aesthetic appeal and durability. We also offer root canal therapy for infected or damaged teeth, using modern techniques that minimize discomfort and preserve your natural tooth structure whenever possible.
          </p>

          <p className="mb-4">
            Gum health is another critical aspect of general dentistry that we prioritize. Periodontal disease affects millions of people and can lead to serious complications if left untreated. Our team provides comprehensive gum disease treatment, ranging from deep cleanings to more advanced periodontal therapies. We work closely with our patients to develop treatment plans that address their specific gum health needs while preventing future problems.
          </p>

          <p className="mb-6">
            We understand that visiting the dentist can be anxiety-inducing for some patients, which is why we've created a calming, patient-centered environment. Our team takes the time to listen to your concerns, explain all treatment options clearly, and ensure you feel comfortable throughout your visit. We're committed to making your dental experience as pleasant as possible while delivering the exceptional care you deserve. Schedule your appointment today and take the first step toward achieving and maintaining optimal oral health.
          </p>
        </motion.div>

        <div className="mt-8">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToElement('#contact', { offset: -100 })
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book an Appointment
          </a>
        </div>

        {/* Services Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our General Dentistry Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=300&fit=crop"
                alt="Routine Cleanings & Exams"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Routine Cleanings & Exams</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Regular dental cleanings and examinations are the foundation of excellent oral health. Our comprehensive checkups include a thorough examination of your teeth, gums, and oral tissues, along with professional cleaning to remove plaque and tartar buildup. We use advanced diagnostic tools including digital X-rays and intraoral cameras to detect potential issues early, before they become more serious problems. During your visit, we'll assess your overall oral health, screen for oral cancer, check for signs of gum disease, and evaluate your bite and jaw function. Our dental hygienists perform deep cleanings using ultrasonic scalers and specialized tools to remove hardened plaque and surface stains that regular brushing cannot eliminate. We also provide personalized oral hygiene education, demonstrating proper brushing and flossing techniques tailored to your specific needs. Regular preventive care visits every six months help maintain healthy teeth and gums, prevent cavities, and catch problems early when treatment is simpler and more affordable. We create a comfortable, stress-free environment for your routine visits, ensuring you feel relaxed and well-informed throughout your appointment.
                </p>
                <Link
                  to="/general-dentistry/routine-cleanings-exams"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=300&fit=crop"
                alt="Fillings & Restorations"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fillings & Restorations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When cavities or damage occur, our expert team provides high-quality dental fillings and restorations that restore both function and aesthetics. We use modern tooth-colored composite materials that blend seamlessly with your natural teeth, eliminating the need for unsightly metal fillings. Our restoration process begins with careful removal of decayed or damaged tooth structure, followed by precise placement of the filling material that matches your tooth's natural color and translucency. We also offer ceramic inlays and onlays for larger restorations that provide superior durability and aesthetics. These custom-made restorations are fabricated in a dental laboratory and bonded to your tooth, offering a long-lasting solution that preserves more of your natural tooth structure. For severely damaged teeth, we provide dental crowns that completely cover and protect the tooth while restoring its natural appearance. All our restorative procedures are performed with attention to detail, ensuring proper bite alignment and comfortable function. We use local anesthesia to ensure your complete comfort throughout the procedure, and our modern techniques minimize discomfort and recovery time.
                </p>
                <Link
                  to="/general-dentistry/fillings-restorations"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=300&fit=crop"
                alt="Root Canal Therapy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Root Canal Therapy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Root canal therapy is a highly effective procedure that saves infected or severely damaged teeth from extraction. Despite its reputation, modern root canal treatment is comfortable and straightforward, thanks to advanced techniques and effective anesthesia. The procedure involves removing the infected or damaged pulp from inside the tooth, thoroughly cleaning and disinfecting the root canals, and then sealing them to prevent reinfection. We use rotary instruments and advanced irrigation techniques to ensure complete removal of bacteria and debris from the root canal system. After the root canal is cleaned and sealed, the tooth is typically restored with a crown to protect it and restore its full function. Saving your natural tooth through root canal therapy is always preferable to extraction, as it maintains your jawbone health, preserves your natural bite, and prevents the need for more extensive replacement procedures like bridges or implants. Our team takes time to explain the procedure, answer your questions, and ensure you're comfortable throughout the process. We use digital imaging to precisely locate and treat all root canals, ensuring the best possible outcome for your tooth.
                </p>
                <Link
                  to="/general-dentistry/root-canal-therapy"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=300&fit=crop"
                alt="Gum Disease Treatment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gum Disease Treatment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gum disease, also known as periodontal disease, is a common condition that affects the tissues supporting your teeth. Left untreated, it can lead to tooth loss and has been linked to other serious health conditions including heart disease and diabetes. Our comprehensive gum disease treatment begins with a thorough evaluation to assess the extent of the disease. For early-stage gum disease, we provide deep cleanings called scaling and root planing, which remove plaque and tartar from below the gumline and smooth the root surfaces to promote healing. We may also use antimicrobial treatments to eliminate bacteria and promote gum health. For more advanced cases, we offer advanced periodontal therapies including laser treatment, which can remove diseased tissue while promoting regeneration of healthy gum tissue. We work closely with patients to develop effective home care routines and provide ongoing maintenance to prevent disease recurrence. Regular periodontal maintenance visits are essential for managing gum disease and preventing its progression. Our goal is to restore and maintain healthy gums that support your teeth for a lifetime, ensuring your long-term oral health and overall well-being.
                </p>
                <Link
                  to="/general-dentistry/gum-disease-treatment"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GeneralDentistry

