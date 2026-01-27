"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type Section = "baby" | "personal" | "none";

interface SectionContextType {
  activeSection: Section;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const getSectionFromPath = (path: string): Section => {
    if (path.includes("babyCare") || path.includes("clothing")) return "baby";
    if (path.includes("personalCare")) return "personal";
    if (path === "/") return "none";
    return "none";
  };

  const [activeSection, setActiveSection] = useState<Section>(() =>
    getSectionFromPath(pathname),
  );

  useEffect(() => {
    const currentSection = getSectionFromPath(pathname);
    if (currentSection !== "none") {
      setActiveSection(currentSection);
      sessionStorage.setItem("zuvara-section", currentSection);
    } else if (pathname === "/") {
      setActiveSection("none");
      sessionStorage.removeItem("zuvara-section");
    } else {
      // Rehydrate from session storage for neutral pages
      const saved = sessionStorage.getItem("zuvara-section") as Section;
      if (saved) setActiveSection(saved);
    }
  }, [pathname]);

  return (
    <SectionContext.Provider value={{ activeSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
