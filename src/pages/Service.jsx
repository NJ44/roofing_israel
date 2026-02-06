import React, { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from '../hooks/useTranslation'
import { config } from '../config'
import { ArrowRight } from 'lucide-react'
import { useDrawer } from '../contexts/DrawerContext'

const Service = () => {
    const { slug } = useParams()
    const { t } = useTranslation()
    const { openDrawer } = useDrawer()

    // Map URL slug to translation key
    const slugKeyMap = {
        'roof-repair': 'repair',
        'roof-replacement': 'replacement',
        'storm-restoration': 'restoration'
    }

    const serviceKey = slugKeyMap[slug]

    // Validate slug
    if (!serviceKey) {
        return <Navigate to="/" replace />
    }

    const serviceData = t.services[serviceKey]



    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-primary">{serviceData.titlePrefix}</span> {serviceData.titleSuffix}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            {serviceData.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">אודות השירות</h2>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                            <p>{serviceData.longDescription}</p>
                        </div>

                        <div className="mt-12">
                            <button
                                onClick={openDrawer}
                                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
                            >
                                {t.hero.cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={
                                serviceKey === 'repair' ? "/roof-repair.png" :
                                    serviceKey === 'replacement' ? "/roof-replacement.png" :
                                        serviceKey === 'commercial' ? "/commercial-roofing.png" :
                                            serviceKey === 'restoration' ? "/storm-damage.png" :
                                                "https://images.unsplash.com/photo-1621251786576-9d628d067468?w=800&fit=crop"
                            }
                            alt={serviceData.titlePrefix + ' ' + serviceData.titleSuffix}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Service
