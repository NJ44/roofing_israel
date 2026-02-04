import React, { useMemo } from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
import { useTranslation } from "../hooks/useTranslation";

const Testimonials = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Testimonials data mapped from translations
  // We use the images from the original English array to keep the UI consistent
  const images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=faces",
  ];

  const testimonials = useMemo(() => {
    return (t.testimonials || []).map((item, index) => ({
      ...item,
      image: images[index % images.length],
      rating: 5
    }));
  }, [t.testimonials]);

  const testimonialsPerColumn = Math.ceil(testimonials.length / 3);
  const firstColumn = testimonials.slice(0, testimonialsPerColumn);
  const secondColumn = testimonials.slice(testimonialsPerColumn, testimonialsPerColumn * 2);
  const thirdColumn = testimonials.slice(testimonialsPerColumn * 2);

  return (
    <section id="reviews" className="bg-background my-20 relative py-20">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm">
              {t.reviews.subtitle || "ביקורות לקוחות"}
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter mt-5 text-center">
            {t.reviews.title}
          </h2>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
        {/* CTA Link */}
        <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {config.GOOGLE_BUSINESS_PROFILE_URL &&
            !config.GOOGLE_BUSINESS_PROFILE_URL.startsWith("{{") ? (
            <>
              <a
                href={config.GOOGLE_BUSINESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-semibold"
              >
                {t.reviews.readMore}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <button
                onClick={() => navigate('/leave-review')}
                className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                {t.reviews.writeReview}
              </button>
            </>
          ) : (
            <>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  config.BUSINESS_NAME + " " + config.CITY
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-semibold"
              >
                {t.reviews.readMore}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <button
                onClick={() => navigate('/leave-review')}
                className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                {t.reviews.writeReview}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

