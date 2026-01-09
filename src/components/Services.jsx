import React from "react";
import { useNavigate } from "react-router-dom";
import { FeaturedSpotlight } from "./ui/feature-spotlight";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      titlePrefix: "Roof",
      titleSuffix: "Repair",
      description: "Fast and reliable repairs for leaks, storm damage, and wear and tear. We restore your roof's integrity quickly and efficiently.",
      imageUrl: "/roof-repair.png",
      index: "01",
      link: "/contact"
    },
    {
      titlePrefix: "Roof",
      titleSuffix: "Replacement",
      description: "Complete roof replacement services using high-quality shingles, metal, or tile. Enhance your home's curb appeal and protection.",
      imageUrl: "/roof-replacement.png",
      index: "02",
      link: "/contact"
    },
    {
      titlePrefix: "Commercial",
      titleSuffix: "Roofing",
      description: "Expert roofing solutions for businesses and industrial properties. Flat roofs, TPO, EPDM, and metal roofing systems.",
      imageUrl: "/commercial-roofing.png",
      index: "03",
      link: "/contact"
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {services.map((service) => (
          <div key={service.index} className="flex justify-center">
            <FeaturedSpotlight
              titlePrefix={service.titlePrefix}
              titleSuffix={service.titleSuffix}
              description={service.description}
              imageUrl={service.imageUrl}
              index={service.index}
              label="Practice Area"
              onLearnMore={() => navigate(service.link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
