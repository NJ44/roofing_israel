// CLIENT VARIABLES - Replace these with actual values
export const config = {
  BUSINESS_NAME: "אפקס פתרונות קירוי",
  TAGLINE: "שירותי קירוי אמינים לבית ולעסק",
  PRIMARY_COLOR: "#ea580c", // Orange-600
  ACCENT_COLOR: "#0f172a", // Slate-900
  ADDRESS_LINE: "דרך בגין 123",
  CITY: "תל אביב",
  PHONE: "050-1234567",
  EMAIL: "contact@apexroofing.com",
  LOGO_URL: "", // optional
  GOOGLE_MAP_EMBED_SRC: "",
  GOOGLE_REVIEWS_DATA: null, // Will be set from {{REVIEWS_JSON}} or use sample data
  FORM_WEBHOOK_URL: "",
  GOOGLE_BUSINESS_PROFILE_URL: "", // optional
  LOCATIONS: [
    { name: "משרד ראשי", slug: "main-office", address: "דרך בגין 123", city: "תל אביב", phone: "050-1234567", image: "/location-main.png" },
    { name: "צפון", slug: "north", address: "שדרות הנשיא 45", city: "חיפה", phone: "050-1234568", image: "/location-north.png" },
    { name: "דרום", slug: "south", address: "רחוב הרצל 78", city: "באר שבע", phone: "050-1234569", image: "/location-central.png" }
  ]
};

// Sample reviews data (used if GOOGLE_REVIEWS_DATA is not provided)
export const sampleReviews = [
  {
    author: "שרה כהן",
    rating: 5,
    date: "2024-03-15",
    text: "אפקס עשו עבודה מדהימה על הגג החדש שלנו! הצוות היה מקצועי, מהיר והשאיר את הנכס נקי לחלוטין. ממליצה בחום!",
  },
  {
    author: "מיכאל לוי",
    rating: 5,
    date: "2024-03-10",
    text: "חוויה נהדרת עם שירות התיקונים שלהם. מצאו את הדליפה מהר ותיקנו במחיר הוגן. חברה אמינה מאוד.",
  },
  {
    author: "אמילי רודריגז",
    rating: 5,
    date: "2024-02-22",
    text: "קבלן הגגות הטוב ביותר. החליפו את הגג המסחרי שלנו בזמן ובתקציב. תקשורת מצוינת לכל אורך הדרך.",
  },
  {
    author: "דוד צור",
    rating: 5,
    date: "2024-02-15",
    text: "מקצועיים, אמינים ועבודה איכותית. המרזבים החדשים נראים נהדר ומתפקדים מושלם. אשתמש בהם שוב.",
  },
];

