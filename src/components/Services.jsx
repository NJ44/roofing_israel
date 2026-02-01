import React from "react";
import { useNavigate } from "react-router-dom";
import { FeaturedSpotlight } from "./ui/feature-spotlight";

import { useTranslation } from "../hooks/useTranslation";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      titlePrefix: t.services.repair.titlePrefix,
      titleSuffix: t.services.repair.titleSuffix,
      description: t.services.repair.description,
      imageUrl: "/roof-repair.png",
      index: "01",
      link: "/contact"
    },
    {
      titlePrefix: t.services.replacement.titlePrefix,
      titleSuffix: t.services.replacement.titleSuffix,
      description: t.services.replacement.description,
      imageUrl: "/roof-replacement.png",
      index: "02",
      link: "/contact"
    },
    {
      titlePrefix: t.services.restoration.titlePrefix,
      titleSuffix: t.services.restoration.titleSuffix,
      description: t.services.restoration.description,
      imageUrl: "/storm-damage.png",
      index: "03",
      link: "/contact"
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t.services.title}</h2>
        {services.map((service) => (
          <div key={service.index} className="flex justify-center">
            <FeaturedSpotlight
              titlePrefix={service.titlePrefix}
              titleSuffix={service.titleSuffix}
              description={service.description}
              imageUrl={service.imageUrl}
              index={service.index}
              label="Services"
              onLearnMore={() => navigate(service.link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
