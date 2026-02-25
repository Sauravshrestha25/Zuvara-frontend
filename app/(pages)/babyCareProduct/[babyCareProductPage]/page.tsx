"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { babyCareProducts } from "@/constants/babyCareProduct";
import type { Product, Variant } from "@/type/babyCareProductType";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import FaqSection from "@/app/components/common-ui/FaqSection";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react";
import DescSection from "@/app/components/babyCareProductPage/DescSection";
import ProductFeature from "@/app/components/babyCareProductPage/ProductFeature";
import ReviewSection from "@/app/components/babyCareProductPage/ReviewSection";
import HeroSection from "@/app/components/babyCareProductPage/HeroSection";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import ProductVideoSection from "@/app/components/babyCareProductPage/ProductVideoSection";

/* ───────────────────────── THEME ───────────────────────── */

type Theme = {
  name: string;
  bg: string;
  fg: string;
  pageBg: string;
  pageText: string;
  subtleText: string;
  cardBg: string;
  cardBorder: string;
  divider: string;
  headingColor: string;
  starColor: string;
  tagBg: string;
  tagFg: string;
  variantBorder: string;
  navText: string;
  nextBtnBg: string;
  nextBtnText: string;
  glowColor: string;
};

const THEMES: Theme[] = [
  {
    name: "yellow",
    bg: "#d97706",
    fg: "#ffffff",
    pageBg: "#fffbeb",
    pageText: "#1c1917",
    subtleText: "#78716c",
    cardBg: "#fef3c7",
    cardBorder: "#fde68a",
    divider: "#fde68a",
    headingColor: "#92400e",
    starColor: "#f59e0b",
    tagBg: "#d97706",
    tagFg: "#ffffff",
    variantBorder: "#d97706",
    navText: "#92400e",
    nextBtnBg: "#d97706",
    nextBtnText: "#ffffff",
    glowColor: "#fbbf24",
  },
  {
    name: "purple",
    bg: "#7c3aed",
    fg: "#ffffff",
    pageBg: "#f5f3ff",
    pageText: "#1e1b4b",
    subtleText: "#6b7280",
    cardBg: "#ede9fe",
    cardBorder: "#ddd6fe",
    divider: "#ddd6fe",
    headingColor: "#5b21b6",
    starColor: "#7c3aed",
    tagBg: "#7c3aed",
    tagFg: "#ffffff",
    variantBorder: "#7c3aed",
    navText: "#5b21b6",
    nextBtnBg: "#7c3aed",
    nextBtnText: "#ffffff",
    glowColor: "#a78bfa",
  },
  {
    name: "blue",
    bg: "#1d4ed8",
    fg: "#ffffff",
    pageBg: "#eff6ff",
    pageText: "#1e3a5f",
    subtleText: "#4b5563",
    cardBg: "#dbeafe",
    cardBorder: "#bfdbfe",
    divider: "#bfdbfe",
    headingColor: "#1e40af",
    starColor: "#2563eb",
    tagBg: "#1d4ed8",
    tagFg: "#ffffff",
    variantBorder: "#1d4ed8",
    navText: "#1e40af",
    nextBtnBg: "#1d4ed8",
    nextBtnText: "#ffffff",
    glowColor: "#60a5fa",
  },
];

/* ───────────────────────── COMPONENT ───────────────────────── */

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  /* ───────── Theme from URL ───────── */

  const rawTheme = Number(searchParams.get("theme") ?? "0");
  const themeIndex = isNaN(rawTheme) ? 0 : rawTheme % THEMES.length;
  const theme = THEMES[themeIndex];

  /* ───────── Product Derived (NO STATE) ───────── */

  const productSlug = params.babyCareProductPage as string;

  const product: Product | null = useMemo(() => {
    return (
      babyCareProducts.find((p) => p.slug === productSlug) || null
    );
  }, [productSlug]);

  /* ───────── Variant State (UI Only) ───────── */

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  /* Safe reset — NO synchronous render blocking */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedVariant(product?.variants?.[0] ?? null);
    }, 0);

    return () => clearTimeout(timeout);
  }, [productSlug, product?.variants]);

  /* ───────── Next Product ───────── */

  function handleNextProduct() {
    const currentIndex = babyCareProducts.findIndex(
      (p) => p.slug === productSlug
    );

    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + 1) % babyCareProducts.length;

    const nextThemeIndex = (themeIndex + 1) % THEMES.length;
    const nextSlug = babyCareProducts[nextIndex].slug;

    router.push(`/babyCareProduct/${nextSlug}?theme=${nextThemeIndex}`);
  }

  /* ───────── Not Found ───────── */

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: theme.pageBg }}
      >
        <h2 style={{ color: theme.pageText }}>
          Product Not Found
        </h2>
      </div>
    );
  }

  const themedProduct: Product = {
    ...product,
    background: theme.bg,
    foreground: theme.fg,
  };

  /* ───────── Render ───────── */

  return (
    <div
      className="min-h-screen lg:pb-16"
      style={
        {
          backgroundColor: theme.pageBg,
          color: theme.pageText,
          "--product-bg": theme.bg,
          "--product-fg": theme.fg,
          "--product-glow": theme.glowColor,
          "--card-bg": theme.cardBg,
          "--card-border": theme.cardBorder,
          "--divider": theme.divider,
          "--heading-color": theme.headingColor,
          "--subtle-text": theme.subtleText,
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* ─── Top Bar ─── */}

        <div className="flex items-center justify-between py-6">
          {isSmallerDevice ? (
            <button
              type="button"
              onClick={() => router.back()}
              className="flex items-center gap-2"
              style={{ color: theme.navText }}
            >
              <ArrowLeft size={16} />
              Back
            </button>
          ) : (
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <Link href="/babyCareProduct">Baby Care</Link>
              <ChevronRight size={14} />
              <span style={{ color: theme.bg }}>
                {product.name}
              </span>
            </nav>
          )}

          <button
            type="button"
            onClick={handleNextProduct}
            className="flex items-center gap-2 px-4 py-2 rounded-full z-10000"
            style={{
              backgroundColor: theme.nextBtnBg,
              color: theme.nextBtnText,
            }}
          >
            Next
            <ArrowRight size={16} />
          </button>
        </div>

        {/* ─── Hero ─── */}

        <HeroSection product={themedProduct} />

        {/* ─── Image + Info ─── */}

        <div className="flex flex-col lg:flex-row gap-10 mt-12">

          {/* Image */}

          <div className="w-full lg:w-1/2 aspect-square relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVariant?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={selectedVariant?.image || "/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Info */}

          <div className="w-full lg:w-1/2 space-y-6">

            <h1 className="text-3xl font-bold">
              {product.name}
            </h1>

            <p>{product.subDesc1}</p>

            {/* Variants */}

            {(product.variants?.length ?? 0) > 1 && (
              <div className="flex gap-4 flex-wrap">
                {product.variants!.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className="border rounded-xl p-2"
                  >
                    <Image
                      src={v.image}
                      alt="variant"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* ─── Sections ─── */}

        <div className="mt-20 space-y-16">
          <DescSection product={themedProduct} />
          <ProductCloseViewSection product={themedProduct} />
          <ProductVideoSection product={themedProduct} />
          <ProductFeature product={themedProduct} />
          <ReviewSection product={themedProduct} theme={theme} />
          <FaqSection
            product={themedProduct}
            questionColor={theme.headingColor}
            answerColor={theme.subtleText}
            faqs={product.faqs}
          />
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;