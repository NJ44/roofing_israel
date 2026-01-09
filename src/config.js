// CLIENT VARIABLES - Replace these with actual values
export const config = {
  BUSINESS_NAME: "Apex Roofing Solutions",
  TAGLINE: "Trusted Roofing Services for Home and Business",
  PRIMARY_COLOR: "#ea580c", // Orange-600
  ACCENT_COLOR: "#0f172a", // Slate-900
  ADDRESS_LINE: "123 Roofing Way",
  CITY: "Newark, NJ",
  PHONE: "555-0123",
  EMAIL: "contact@apexroofing.com",
  LOGO_URL: "", // optional
  GOOGLE_MAP_EMBED_SRC: "",
  GOOGLE_REVIEWS_DATA: null, // Will be set from {{REVIEWS_JSON}} or use sample data
  FORM_WEBHOOK_URL: "",
  GOOGLE_BUSINESS_PROFILE_URL: "", // optional
  LOCATIONS: [
    { name: "Main Office", slug: "main-office", address: "123 Roofing Way", city: "Newark", phone: "555-0123" },
    { name: "North Jersey", slug: "north-jersey", address: "456 Summit Ave", city: "Jersey City", phone: "555-0124" },
    { name: "Central Jersey", slug: "central-jersey", address: "789 Beach Blvd", city: "Old Bridge", phone: "555-0125" }
  ]
};

// Sample reviews data (used if GOOGLE_REVIEWS_DATA is not provided)
export const sampleReviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    date: "2024-03-15",
    text: "Apex Roofing did an amazing job on our new roof! The team was professional, fast, and left the property spotless. Highly recommend!",
  },
  {
    author: "Michael Chen",
    rating: 5,
    date: "2024-03-10",
    text: "Great experience with their repair service. They found the leak quickly and fixed it for a fair price. Very honest company.",
  },
  {
    author: "Emily Rodriguez",
    rating: 5,
    date: "2024-02-22",
    text: "Best roofing contractor in NJ. They replaced our commercial roof on time and on budget. Excellent communication throughout.",
  },
  {
    author: "David Thompson",
    rating: 5,
    date: "2024-02-15",
    text: "Professional, reliable, and high quality work. The new gutters look great and function perfectly. Will use them again.",
  },
];

