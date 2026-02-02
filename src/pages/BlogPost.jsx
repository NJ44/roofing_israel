import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ChevronRight, Share2, Printer } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const BlogPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const blogPosts = {
        "1": {
            title: "5 סימנים שהגג שלכם זקוק לתיקון דחוף",
            date: "15 ינואר 2024",
            category: "תחזוקה",
            image: "https://images.unsplash.com/photo-1516592653456-4293f3fccb98?w=1200&q=80",
            content: [
                "הגג הוא קו ההגנה הראשון של הבית שלכם מפני פגעי הטבע. עם זאת, לעיתים קל לשכוח ממנו עד שמתחילה נזילה רצינית. זיהוי מוקדם של בעיות יכול לחסוך לכם אלפי שקלים בתיקונים עתידיים.",
                "הנה 5 סימנים שקריטי לשים לב אליהם:",
                "1. נזילות מים או כתמי רטיבות בתקרה: אם אתם רואים כתמים חומים או צהובים בתקרה, זהו סימן מובהק לכך שמים חודרים דרך הגג.",
                "2. רעפים חסרים, סדוקים או שבורים: רעפים פגומים משאירים את התשתית של הגג חשופה למים ולשמש, מה שמוביל לריקבון מהיר.",
                "3. צמיחת טחב או אצות: צבע ירוק על הגג עשוי להיראות כפרי, אך הוא למעשה כולא לחות וגורם לשחיקת חומרי הקירוי.",
                "4. שקיעה של הגג: אם קו הגג נראה מעוקל או שקוע, ייתכן שיש בעיה מבנית חמורה שנגרמה מרטיבות ממושכת.",
                "5. צבירת גרגירים במרזבים: אם אתם מוצאים 'חול' כהה במרזבים, אלו שאריות של הציפוי המגן של הרעפים שלכם, מה שמעיד על כך שהם הגיעו לסוף חייהם.",
                "אל תחכו שהגשם הבא יפתיע אתכם. בדיקה מקצועית פעם בשנה יכולה להבטיח שהבית שלכם יישאר יבש ובטוח."
            ]
        },
        "2": {
            title: "איך לבחור את סוג הגג המתאים לבית שלכם",
            date: "10 ינואר 2024",
            category: "מדריכים",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
            content: [
                "בחירת גג חדש היא אחת ההחלטות המשמעותיות והיקרות ביותר שתקבלו כבעלי בתים. סוג הגג שתבחרו ישפיע לא רק על המראה האסתטי, אלא גם על הבידוד הטרמי, העמידות וערך הנכס.",
                "להלן האפשרויות המובילות בישראל:",
                "רעפי חרס: הבחירה הקלאסית והפופולרית ביותר. הם עמידים מאוד, שומרים על צבעם לאורך שנים ומעניקים מראה כפרי וחם.",
                "רעפי בטון: חזקים וזולים יותר מחרס, אך כבדים יותר ודורשים קונסטרוקציה חזקה. הם זמינים במגוון רחב של צבעים.",
                "גגות מתכת (פנל מבודד): פתרון מודרני, קל משקל ומצוין לבידוד. הוא עמיד מאוד בפני רוחות וקל לתחזוקה.",
                "גגות שינגלס (ביטומן): נפוצים בבנייה קלה. הם גמישים, זולים יחסית ומגיעים במגוון צורות וטקסטורות.",
                "בבחירה שלכם, קחו בחשבון את האקלים באזורכם (קרבה לים, חשיפה לשמש חזקה) ואת התקציב לטווח ארוך, הכולל גם עלויות תחזוקה."
            ]
        },
        "3": {
            title: "איטום גגות: למה זה קריטי במיוחד בחורף",
            date: "5 דצמבר 2023",
            category: "איטום",
            image: "https://images.unsplash.com/photo-1632778149975-420e04316a88?w=1200&q=80",
            content: [
                "בישראל, החורף אמנם קצר אך עוצמתי. גשמים חזקים בפרקי זמן קצרים יכולים לחשוף בקלות כל סדק קטן באיטום הגג שלכם. איטום לקוי הוא הגורם מספר אחת לנזקי רכוש בתוך הבית במהלך החורף.",
                "מדוע חשוב לבצע איטום לפני שהגשם הראשון יורד?",
                "מניעת עובש ופטריות: רטיבות שחודרת לקירות יוצרת סביבת גידול מושלמת לעובש, המהווה סכנה בריאותית לדיירי הבית.",
                "הגנה על תשתיות חשמל: מים שחודרים לתקרה עלולים להגיע לנקודות חשמל ולגרום לקצרים מסוכנים ואף לשריפות.",
                "שמירה על הרהיטים: נזילה אחת קטנה מעל ארון הבגדים או מערכת הישיבה יכולה לגרום לנזק בלתי הפיך.",
                "חיסכון בחשמל: גג אטום היטב מספק גם בידוד טוב יותר, מה שמפחית את הצורך בחימום אינטנסיבי בחורף.",
                "אנו ממליצים לבדוק את מצב האיטום כבר בסוף הקיץ ולבצע את התיקונים הדרושים כשהגג יבש לחלוטין."
            ]
        },
        "4": {
            title: "כמה עולה החלפת גג? מדריך מחירים 2024",
            date: "28 נובמבר 2023",
            category: "עלויות",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
            content: [
                "השאלה הראשונה שעולה כשמדובר בשיפוץ הגג היא 'כמה זה יעלה?'. התשובה מורכבת ומשתנה בהתאם למספר גורמים קריטיים.",
                "הגורמים המשפיעים על המחיר:",
                "1. שטח הגג: המחיר מחושב בדרך כלל לפי מ'ר. ככל שהגג גדול יותר, המחיר למ'ר עשוי לרדת מעט, אך העלות הכוללת תעלה.",
                "2. סוג החומר: קיים הבדל משמעותי בין רעפי חרס פשוטים לרעפים איטלקיים יוקרתיים או פנלים מבודדים.",
                "3. מורכבות הגג: גגות עם שיפועים רבים, חלונות גג או זוויות מורכבות דורשים יותר זמן עבודה וחומרים.",
                "4. פירוק ופינוי: המחיר חייב לכלול את פירוק הגג הישן ופינויו לאתר מורשה.",
                "5. בידוד ואיטום: אל תתפשרו על איכות הבידוד מתחת לרעפים, זהו מרכיב קריטי שחוסך כסף רב בעתיד.",
                "בממוצע, החלפת גג רעפים בישראל נעה בין 250 ל-450 ש'ח למ'ר, אך מומלץ תמיד לקבל הצעת מחיר מפורטת לאחר סיור בשטח."
            ]
        },
        "5": {
            title: "מה לעשות אחרי נזקי סופה לגג",
            date: "20 נובמבר 2023",
            category: "חירום",
            image: "https://images.unsplash.com/photo-1527482797697-5756f61017ff?w=1200&q=80",
            content: [
                "סופות חזקות המלוות ברוחות וברד יכולות לגרום לנזק מיידי לגג. במקרים כאלו, מהירות התגובה היא קריטית למניעת נזק משני לתוך הבית.",
                "צעדים מיידיים לאחר הסופה:",
                "בטיחות מעל הכל: לעולם אל תעלו על הגג כשהוא רטוב או בזמן רוחות חזקות. השאירו את הבדיקה הקרובה לאנשי מקצוע.",
                "תיעוד הנזק: צלמו את הנזק מהקרקע או מתוך הבית. זהו שלב קריטי לצורך תביעת הביטוח.",
                "מניעת נזק משני: אם יש נזילה בתוך הבית, הניחו דליים ופנו רהיטים מהאזור. אל תנסו לתקן את הגג בעצמכם תחת גשם.",
                "קריאה לקבלן מורשה: צרו קשר עם חברת קירוי אמינה שתבצע תיקון זמני (כמו פריסת יריעת הגנה) עד שניתן יהיה לבצע תיקון קבוע.",
                "פנייה לביטוח: עדכנו את סוכן הביטוח שלכם בהקדם האפשרי וספקו לו את כל התיעוד שאספתם."
            ]
        },
        "6": {
            title: "מערכות ניקוז וסיפות גג - המדריך המלא",
            date: "15 נובמבר 2023",
            category: "תחזוקה",
            image: "https://images.unsplash.com/photo-1595841055318-56146663567d?w=1200&q=80",
            content: [
                "אנשים רבים משקיעים ברעפים הטובים ביותר אך שוכחים את מערכת הניקוז. מרזבים וסיפות גג תקינים הם אלו שמרחיקים את המים מהיסודות של הבית שלכם ומגיעים על הקירות החיצוניים.",
                "למה מערכת הניקוז כל כך חשובה?",
                "מניעת חדירת מים לקירות: מרזב סתום גורם למים לגלוש על הקירות החיצוניים, מה שיוצר רטיבות פנימית וקילופי טיח.",
                "הגנה על היסודות: מים שמצטברים בבסיס הבית יכולים לגרום לשקיעה של היסודות ולסדקים במבנה.",
                "מניעת נזק לגינה: זרימת מים עוצמתית מהגג עלולה להרוס את הצמחייה מסביב לבית ולגרום לסחף קרקע.",
                "סיפות גג: הסיפה היא האלמנט שסוגר את שולי הגג. היא מונעת כניסה של ציפורים ומזיקים מתחת לרעפים ושומרת על האוורור הדרוש.",
                "אנו ממליצים על ניקוי מרזבים לפחות פעמיים בשנה - בסוף הסתיו ובאמצע החורף, כדי להבטיח זרימה חופשית של מים."
            ]
        }
    }

    const post = blogPosts[id]

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">המאמר לא נמצא</h2>
                    <button
                        onClick={() => navigate('/blog')}
                        className="text-primary font-semibold flex items-center gap-2 mx-auto"
                    >
                        <ArrowRight className="w-4 h-4" /> חזרה לבלוג
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            {/* ProgressBar could be added here */}

            <div className="max-w-4xl mx-auto px-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                    <Link to="/" className="hover:text-primary transition-colors">בית</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link to="/blog" className="hover:text-primary transition-colors">מאמרים וטיפים</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="text-gray-900 font-medium truncate">{post.title}</span>
                </nav>

                <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                    {/* Post Image */}
                    <div className="relative h-[300px] md:h-[500px]">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 right-6">
                            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Post Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-4 mr-auto">
                                <button className="hover:text-primary transition-colors flex items-center gap-1">
                                    <Share2 className="w-4 h-4" />
                                    <span className="hidden sm:inline">שתף</span>
                                </button>
                                <button className="hover:text-primary transition-colors flex items-center gap-1">
                                    <Printer className="w-4 h-4" />
                                    <span className="hidden sm:inline">הדפס</span>
                                </button>
                            </div>
                        </div>

                        {/* Post Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        {/* Post Content */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            {post.content.map((paragraph, index) => (
                                <p key={index} className="text-lg md:text-xl">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Post Footer / CTA */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <div className="bg-primary/5 rounded-2xl p-8 md:p-10 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">זקוקים לייעוץ מקצועי לגג שלכם?</h3>
                                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                                    המומחים שלנו כאן כדי לעזור לכם בכל שאלה או צורך. צרו איתנו קשר עוד היום לבדיקה ללא התחייבות.
                                </p>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200"
                                >
                                    קבל הצעת מחיר חינם
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Navigation between posts */}
                <div className="mt-12 flex justify-between items-center px-4">
                    <button
                        onClick={() => navigate('/blog')}
                        className="flex items-center gap-2 text-gray-700 font-semibold hover:text-primary transition-colors group"
                    >
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>חזרה לכל המאמרים</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
