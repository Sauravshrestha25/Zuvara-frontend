"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { babyCareProducts } from "@/constants/babyCareProduct";
import type { Product } from "@/type/babyCareProductType";
import ProductNotFound from "@/app/components/babyCareProductPage/ProductNotFound";
import BabyCareHeroSection from "@/app/components/babyCareProductPage/BabyCareHeroSection";
import WhyTouchMattersSection from "@/app/components/babyCareProductPage/WhyTouchMattersSection";
import ComfortDetailsSection from "@/app/components/babyCareProductPage/ComfortDetailsSection";
import SizeGuideSection from "@/app/components/babyCareProductPage/SizeGuideSection";
import TrustFusionSection from "@/app/components/babyCareProductPage/TrustFusionSection";
import CarePromiseSection from "@/app/components/babyCareProductPage/CarePromiseSection";
import FaqAndCloseViewSection from "@/app/components/babyCareProductPage/FaqAndCloseViewSection";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";

const moodboardImages = [
  "/images/diaper/supreme-diaper/feature.png",
  "/images/baby/baby29.png",
  "/images/baby/baby24.png",
  "/images/baby/baby31.png",
  "/images/baby/baby30.png",
  "/images/diaper/supreme-diaper/2.jpg",
  "/images/baby/baby32.png",
  "/images/baby/baby33.png",
  "/images/diaper/supreme-diaper/3.jpg",
  "/images/baby/baby23.png",
  "/images/baby/baby20.png",
  "/images/diaper/supreme-diaper/4.jpg",
];

const conceptImages = [
  "/images/baby/baby14.png",
  "/images/baby/baby10.png",
  "/images/baby/baby12.png",
  "/images/baby/baby13.png",
  "/images/baby/baby16.png",
  "/images/baby/baby18.png",
  "/images/baby/baby19.png",
  "/images/baby/baby21.png",
  "/images/baby/baby22.png",
  "/images/baby/baby27.png",
];

const comparisonRows = [
  { label: "Dermatologically Tested", zuvara: "Yes", ordinary: "Not Always" },
  { label: "Hypoallergenic Design", zuvara: "Yes", ordinary: "Varies" },
  { label: "Toxin-Free Materials", zuvara: "Yes", ordinary: "Varies" },
  { label: "Breathable Layers", zuvara: "Advanced", ordinary: "Basic" },
  { label: "Chlorine Bleaching", zuvara: "No", ordinary: "Usually Yes" },
  { label: "Fragrance", zuvara: "No", ordinary: "Often Added" },
  { label: "Absorbency", zuvara: "Up to 12 Hours", ordinary: "4-6 Hours" },
];

const themePresets: ThemePreset[] = [
  {
    accent: "#0f6d65",
    pageBg: "#f3f8f5",
    containerBg: "#d9efee",
    border: "#84aaa5",
    chipBg: "#d7ebe8",
    sectionTint: "#e7f4f1",
  },
  {
    accent: "#2d6f9f",
    pageBg: "#f1f7fd",
    containerBg: "#dbeefe",
    border: "#8eb9dd",
    chipBg: "#d4e8fb",
    sectionTint: "#e8f1fb",
  },
  {
    accent: "#8b6b00",
    pageBg: "#fff9ea",
    containerBg: "#fff1bf",
    border: "#d5bd6d",
    chipBg: "#ffe8a0",
    sectionTint: "#fff5d8",
  },
  {
    accent: "#6a4aa3",
    pageBg: "#f6f2ff",
    containerBg: "#e8defd",
    border: "#b49cdc",
    chipBg: "#decef9",
    sectionTint: "#efe7ff",
  },
];

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function pickHeroBaby(p: Product) {
  return p.heroImage2 || p.heroImage || p.image;
}

function pickHeroPack(p: Product) {
  return p.heroImage || p.image || pickHeroBaby(p);
}

export default function Page() {
  const params = useParams<{ babyCareProductPage: string }>();
  const slug = params?.babyCareProductPage;
  const product = babyCareProducts.find((item) => item.slug === slug);
  const products = babyCareProducts;
  const initialIndex = Math.max(
    0,
    products.findIndex((item) => item.slug === slug)
  );
  const [activeIdx, setActiveIdx] = useState(initialIndex);

  if (!product) {
    return <ProductNotFound />;
  }

  const active =
    products.length > 0 ? products[clampIndex(activeIdx, products.length)] : product;
  const heroPackSrc = pickHeroPack(active);
  const theme = themePresets[clampIndex(activeIdx, themePresets.length)];

  const variants = active.variants || [];
  const highlights = (active.highlights || []).slice(0, 4);

  return (
    <main
      className="relative overflow-hidden text-zinc-800 transition-colors duration-500 antialiased"
      style={{ backgroundColor: theme.pageBg }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[36rem] h-[44rem]"
        style={{
          background: `radial-gradient(ellipse at center, ${hexToRgba(theme.accent, 0.22)}, rgba(255,255,255,0))`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[122rem] h-[40rem]"
        style={{
          background: `radial-gradient(ellipse at center, ${hexToRgba(theme.accent, 0.18)}, rgba(255,255,255,0))`,
        }}
      />

      <BabyCareHeroSection
        active={active}
        products={products}
        heroPackSrc={heroPackSrc}
        theme={theme}
        onPrev={() => setActiveIdx((v) => v - 1)}
        onNext={() => setActiveIdx((v) => v + 1)}
        onSelectProduct={setActiveIdx}
        pickHeroPack={pickHeroPack}
      />

      <WhyTouchMattersSection theme={theme} />

      <ComfortDetailsSection theme={theme} highlights={highlights} moodboardImages={moodboardImages} />

      <SizeGuideSection theme={theme} variants={variants} />

      <TrustFusionSection theme={theme} comparisonRows={comparisonRows} />

      <CarePromiseSection theme={theme} conceptImages={conceptImages} />

      <FaqAndCloseViewSection active={active} theme={theme} />
    </main>
  );
}
