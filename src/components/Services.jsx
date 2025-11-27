import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

const ServicesTimeline = () => {
  const data = [
    {
      title: "General Dentistry",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop"
              alt="General Dentistry"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4">
            <p>
              At our practice, we believe that excellent oral health is the foundation of a beautiful smile and overall well-being. Our comprehensive general dentistry services are designed to provide you and your family with the highest quality dental care in a comfortable, welcoming environment.
            </p>
            <p>
              Whether you're visiting us for a routine checkup or addressing a specific dental concern, our experienced team is committed to delivering personalized care that meets your unique needs. Our general dentistry practice encompasses a wide range of preventive and restorative treatments aimed at maintaining your oral health throughout every stage of life.
            </p>
            <p>
              We understand that regular dental visits are essential for preventing problems before they develop, which is why we emphasize preventive care as the cornerstone of our practice. During your routine examinations, our skilled dentists will thoroughly assess your teeth, gums, and overall oral health, using advanced diagnostic tools to identify any potential issues early on.
            </p>
            <p>
              Professional dental cleanings are an integral part of maintaining optimal oral health. Our dental hygienists use state-of-the-art equipment and techniques to remove plaque, tartar, and surface stains that regular brushing and flossing cannot eliminate.
            </p>
            <p>
              When dental issues do arise, our team is equipped to provide effective restorative treatments. From simple fillings to more complex procedures, we use the latest materials and techniques to restore your teeth to their natural function and appearance.
            </p>
          </div>
          <Link
            to="/general-dentistry"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Learn More →
          </Link>
        </div>
      ),
    },
    {
      title: "Cosmetic & Whitening",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop"
              alt="Cosmetic & Whitening"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4">
            <p>
              A beautiful, confident smile can transform your appearance and boost your self-esteem. At our practice, our cosmetic dentistry services are designed to help you achieve the smile of your dreams through advanced techniques and personalized treatment plans.
            </p>
            <p>
              Whether you're looking to brighten your teeth, correct imperfections, or completely transform your smile, our experienced cosmetic dentists have the expertise and artistic vision to deliver stunning results that look natural and enhance your unique features.
            </p>
            <p>
              Professional teeth whitening is one of the most popular cosmetic dental procedures, and for good reason. Over time, our teeth naturally become discolored due to aging, consumption of staining foods and beverages, smoking, and other factors.
            </p>
            <p>
              Our in-office whitening treatments use professional-grade bleaching agents that are far more effective than over-the-counter products, delivering dramatic results in just one visit. For patients who prefer the convenience of at-home treatment, we also offer custom-fitted whitening trays with professional-grade gel.
            </p>
            <p>
              Dental veneers represent the gold standard in cosmetic dentistry for transforming smiles. These thin, custom-made shells are bonded to the front surface of your teeth, effectively covering imperfections such as chips, cracks, gaps, discoloration, or misalignment.
            </p>
            <p>
              For patients seeking a complete smile makeover, we offer comprehensive cosmetic treatment planning that addresses multiple aspects of your smile. This may include a combination of whitening, veneers, bonding, gum contouring, and orthodontic treatment to create a harmonious, balanced result.
            </p>
          </div>
          <Link
            to="/cosmetic-whitening"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Learn More →
          </Link>
        </div>
      ),
    },
    {
      title: "Specialized Care",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop"
              alt="Specialized Care"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4">
            <p>
              At our practice, we recognize that some dental conditions require specialized expertise and advanced treatment approaches. Our specialized care services encompass a comprehensive range of advanced dental procedures designed to address complex oral health issues and restore optimal function and aesthetics.
            </p>
            <p>
              From dental implants that replace missing teeth to emergency care that provides immediate relief, our team of skilled specialists is equipped with the latest technology and techniques to deliver exceptional results for even the most challenging cases.
            </p>
            <p>
              Dental implants represent one of the most significant advances in modern dentistry, offering a permanent solution for missing teeth that closely mimics the look, feel, and function of natural teeth. Unlike traditional bridges or dentures, implants are surgically placed into the jawbone, where they fuse with the bone tissue through a process called osseointegration.
            </p>
            <p>
              Root canal therapy, often misunderstood as a painful procedure, is actually a highly effective treatment that saves infected or severely damaged teeth from extraction. Modern root canal techniques have made this procedure much more comfortable than in the past, and our endodontic specialists use advanced equipment and anesthesia to ensure your comfort throughout the process.
            </p>
            <p>
              Emergency dental care is available for patients experiencing sudden pain, trauma, or other urgent dental issues. We understand that dental emergencies can happen at any time, and we're committed to providing prompt, effective care when you need it most.
            </p>
            <p>
              Our emergency services include treatment for severe toothaches, knocked-out or broken teeth, lost fillings or crowns, abscesses, and other urgent conditions. We maintain flexible scheduling to accommodate emergency patients and work quickly to diagnose and treat the problem.
            </p>
          </div>
          <Link
            to="/specialized-care"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Learn More →
          </Link>
        </div>
      ),
    },
  ];

  return (
    <motion.section 
      id="services" 
      className="min-h-screen w-full bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </motion.section>
  );
};

export default ServicesTimeline;
