"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import React from "react";

const HeroSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  return (
    <section
      className={cn(
        "min-h-screen w-screen",
        isPersonal ? "bg-ternary" : "bg-babyCare",
      )}
    >
      <section
        className={cn("container mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl")}
      >
        HeroSection
      </section>
    </section>
  );
};

export default HeroSection;
