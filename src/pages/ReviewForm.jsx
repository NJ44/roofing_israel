import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, ArrowRight, MessageSquare, ThumbsDown, User } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ReviewForm = () => {
    const { t } = useTranslation();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [formData, setFormData] = useState({
        reason: '',
        improvement: '',
        name: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const googleReviewUrl = "https://www.google.com/search?num=10&aic=0&sxsrf=ANbL-n7ekaUkoYyX_QuGqDvVvoDySjR2dQ%3A1770013996702&q=Boltcall&stick=H4sIAAAAAAAAAONgU1I1qLAwSzM2STIzSjRIMkpLS0mzMqhITLZMS0lNTjVMNk1KSk2zXMTK4ZSfU5KcmJMDAMlkLfw0AAAA&mat=CQALdnlAbYCo";

    const handleRatingSelect = (selectedRating) => {
        setRating(selectedRating);
        if (selectedRating >= 4) {
            window.location.href = googleReviewUrl;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Here you would typically send the feedback to your backend or webhook
        console.log('Feedback submitted:', { rating, ...formData });
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 flex flex-col items-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-50"
            >
                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">איך הייתה החוויה שלך איתנו?</h1>
                            <p className="text-gray-600">נשמח לשמוע את דעתך הכנה כדי שנוכל להשתפר.</p>
                        </div>

                        <div className="flex justify-center gap-2 mb-10">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => handleRatingSelect(star)}
                                >
                                    <Star
                                        className={`w-12 h-12 md:w-16 md:h-16 transition-colors duration-200 ${(hover || rating) >= star
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-200'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>

                        <AnimatePresence>
                            {rating > 0 && rating <= 3 && (
                                <motion.form
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6 overflow-hidden"
                                >
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                            <ThumbsDown className="w-4 h-4 text-primary" />
                                            מה פחות אהבת בשירות?
                                        </label>
                                        <textarea
                                            required
                                            value={formData.reason}
                                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all min-h-[100px]"
                                            placeholder="נשמח לפרטים..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                            <MessageSquare className="w-4 h-4 text-primary" />
                                            איך נוכל להשתפר להבא?
                                        </label>
                                        <textarea
                                            required
                                            value={formData.improvement}
                                            onChange={(e) => setFormData({ ...formData, improvement: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all min-h-[100px]"
                                            placeholder="מה היה עושה את החוויה ליותר טובה?"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                            <User className="w-4 h-4 text-primary" />
                                            השם שלך
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="נא להזין שם מלא"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200 flex items-center justify-center gap-2"
                                    >
                                        שלח משוב
                                        <Send className="w-5 h-5" />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star className="w-10 h-10 text-green-600 fill-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">תודה על המשוב!</h2>
                        <p className="text-gray-600 mb-8 px-4">אנחנו מעריכים את הכנות שלך ונתייחס לכל הערה ברצינות כדי להשתפר.</p>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                        >
                            חזרה לדף הבית <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default ReviewForm;
