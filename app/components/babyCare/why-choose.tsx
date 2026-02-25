"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../common-ui/SectionHeading";
import { useMediaQuery } from "react-responsive";
import ImageGridSection from "./ImageGridSection";

const WhyChoose = () => {
  const values = [
    { id: 1, icon: "/icons/premium.png", title: "Premium Quality", description: "Gentle materials specifically designed to protect delicate baby skin." },
    { id: 2, icon: "/icons/nature.png", title: "100% Natural", description: "Hypoallergenic and toxin-free components for long-lasting dryness." },
    { id: 3, icon: "/icons/trusted.png", title: "Dermatologist Tested", description: "Clinically validated safety standards for your baby’s daily routine." },
    { id: 4, icon: "/icons/comfortable.png", title: "Ergonomic Fit", description: "Advanced design ensuring comfort, ease of movement, and leak protection." },
  ];

  return (
    <section className="flex flex-col justify-center pt-20 lg:py-0 h-auto md:h-[65vh] lg:h-[140vh]  relative bg-babyCare">
   
      {/* Top Curve Border */}
      <div className="custom-shape-divider-top z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="mb-16 text-center"
        >
          <SectionHeading
            title="Why Choose"
            highlight="Zuvara"
            description="Our commitment to uncompromising quality, safety, and comfort for every stage of your baby's growth."
            align="center"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 size-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Image src={value.icon} alt={value.title} width={32} height={32} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual Grid */}
          <div className="w-full">
            <ImageGridSection />
          </div>
        </div>
      </div>

      {/* Bottom Curve Border */}
      {/* <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default WhyChoose;