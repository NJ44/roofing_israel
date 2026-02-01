import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { config } from '../config'

const InspectionDrawer = ({ isOpen, onClose }) => {
    const { t } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        serviceType: 'sealing',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('https://n8n.srv974118.hstgr.cloud/webhook/5711621b-2604-427b-8210-f71537a85dc3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setTimeout(() => {
                    onClose()
                    setSubmitStatus(null)
                    setFormData({ name: '', phone: '', message: '' })
                }, 2000)
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }} // Start from right (off-screen)
                        animate={{ x: 0 }}      // Slide to position
                        exit={{ x: '100%' }}    // Slide back to right
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white shadow-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {/* Drawer Image */}
                        <div className="h-48 w-full relative">
                            <img
                                src="/hero-bg.png"
                                alt="Roofing Inspection"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h2 className="text-2xl font-bold text-white drop-shadow-md">{t.form.getFreeQuote}</h2>
                            </div>
                        </div>

                        <div className="p-6 h-full flex flex-col">
                            {submitStatus === 'success' ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.form.successTitle}</h3>
                                    <p className="text-gray-600">{t.form.successMessage}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {t.form.fullName}
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="ישראל ישראלי"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {t.form.phone}
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-right"
                                            placeholder="050-1234567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {t.form.subject}
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white"
                                            >
                                                <option value="sealing">{t.form.serviceTypes.sealing}</option>
                                                <option value="roofEdge">{t.form.serviceTypes.roofEdge}</option>
                                                <option value="tileRepair">{t.form.serviceTypes.tileRepair}</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                        />
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="text-red-500 text-xs text-center">
                                            {t.form.error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white py-3 rounded-lg font-bold text-base hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg disabled:opacity-70 mt-2"
                                    >
                                        {isSubmitting ? t.form.submitting : t.form.submit}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default InspectionDrawer
