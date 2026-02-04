import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '../hooks/useTranslation'
import { config } from '../config'
import { CheckCircle, Award, Users, clock } from 'lucide-react'

const About = () => {
    const { t } = useTranslation()

    const stats = [
        { label: 'שנות ניסיון', value: '15+' },
        { label: 'לקוחות מרוצים', value: '1,200+' },
        { label: 'פרויקטים שהושלמו', value: '2,500+' },
        { label: 'אנשי צוות', value: '25+' },
    ]

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        אודות {config.BUSINESS_NAME}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        אנחנו ב{config.BUSINESS_NAME} מביאים אליכם מומחיות וניסיון של מעל 15 שנה בתחום השיפוצים והקירוי.
                        המשימה שלנו היא לספק פתרונות איכותיים, עמידים ואסתטיים לכל בית ועסק בישראל.
                    </p>
                </motion.div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">הסיפור שלנו</h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                הכל התחיל בחזון פשוט: להעניק לבעלי בתים בישראל שירות שיפוצים וקירוי ברמה הגבוהה ביותר,
                                עם דגש על אמינות, שקיפות ומקצועיות ללא פשרות.
                            </p>
                            <p>
                                במהלך השנים, הפכנו מחברה קטנה למובילה בתחום, תוך שאנו שומרים על היחס האישי והקשר הישיר עם כל לקוח.
                                אנחנו מאמינים שהבית שלכם הוא הנכס היקר ביותר לכם, ולכן אנחנו מתייחסים לכל פרויקט כאילו הוא הבית הפרטי שלנו.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592dea58ef21?w=800&q=80"
                            alt="Our Story"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 bg-gray-50 rounded-3xl px-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Values Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">הערכים שלנו</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">איכות ללא פשרות</h3>
                            <p className="text-gray-600">שימוש בחומרים הטובים ביותר בשוק ועבודה לפי התקנים המחמירים ביותר.</p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">שקיפות מלאה</h3>
                            <p className="text-gray-600">ליווי צמוד ללקוח, דיווח שוטף על התקדמות העבודה ומחירים הוגנים וברורים.</p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">אמינות וביטחון</h3>
                            <p className="text-gray-600">אנחנו עומדים מאחורי כל עבודה שלנו עם אחריות מקיפה ושירות לקוחות זמין.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
