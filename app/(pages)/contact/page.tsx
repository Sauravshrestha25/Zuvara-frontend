"use client";

import ContactSection from "@/app/components/contact/ContactSection";
import HeroSection from "@/app/components/contact/HeroSection";
import MapSection from "@/app/components/contact/MapSection";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import React from "react";

const page = () => {
  const { activeSection } = useSection();

  const isPersonal = activeSection === "personal";
  const isBaby = activeSection === "baby";

  return (
    <div
      className={cn(
        "transition-colors duration-500",
        isPersonal ? "bg-ternary" : isBaby ? "bg-babyCare" : "bg-white",
      )}
    >
      <HeroSection />
      <ContactSection />
      <MapSection />
    </div>
  );
};

export default page;
