"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
} from "lucide-react";

import type { Product } from "@/type/babyCareProductType";
import { babyCareProducts } from "@/constants/babyCareProduct"; 
import DescSection from "@/app/components/babyCareProductPage/DescSection";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import ProductFeature from "@/app/components/babyCareProductPage/ProductFeature";
import ReviewSection from "@/app/components/babyCareProductPage/ReviewSection";
import FaqSection from "@/app/components/common-ui/FaqSection";
import Link from "next/link";

const btnBase =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
const btnSoft =
  btnBase +
  " bg-white/14 text-white ring-1 ring-white/20 hover:bg-white/18 backdrop-blur";


function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function pickHeroBaby(p: Product) {
  // "baby changes" image:
  // prefer heroImage2 (you used it for hero alt pack), fallback to heroImage then image.
  return p.heroImage2 || p.heroImage || p.image;
}

function pickHeroPack(p: Product) {
  // pack/product visual:
  return p.heroImage || p.image || pickHeroBaby(p);
}

export default function BabyCareHero() {
  const products = babyCareProducts;
  const [activeIdx, setActiveIdx] = useState(0);
  const active =
    products.length > 0 ? products[clampIndex(activeIdx, products.length)] : null;

  if (!active) {
    return null;
  }

  const fg = active.foreground || "#ffffff";
  const bg = active.background || "#456a5c";

  const heroBabySrc = pickHeroBaby(active);
  const heroPackSrc = pickHeroPack(active);

  const title = active?.name ?? "Zuvara";
  const category = active?.category ?? "Baby Care";

  const desc = active?.description ?? "";

  const rating = active.rating;
  const reviews = active.reviews;
  const featureStyle = {
    "--subtle-text": "#52525b",
    "--page-text": "#18181b",
    "--product-glow": active.background ?? "#a1a1aa",
  } as CSSProperties;

  return (
    <div className="w-full">
      {/* HERO */}
      <motion.section
        className="relative overflow-hidden"
        animate={{ backgroundColor: bg }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* soft blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-24 h-130 w-130 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 top-10 h-105 w-105 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-35 left-1/2 h-105 w-205 -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT: Copy + controls */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1"
                  style={{
                    color: fg,
                    borderColor: "rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.10)",
                  }}
                >
                  <Sparkles size={14} />
                  <span className="opacity-90">{category}</span>
                </div>

                <div className="mt-4">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={active.id + "-title"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32 }}
                      className="text-4xl font-extrabold tracking-tight md:text-5xl"
                      style={{ color: fg }}
                    >
                      {title}
                    </motion.h1>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active.id + "-desc"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.92, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, delay: 0.03 }}
                      className="mt-4 max-w-xl text-base md:text-lg"
                      style={{ color: fg }}
                    >
                      {desc}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* rating + price */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {typeof rating === "number" && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-sm ring-1 ring-white/20 backdrop-blur">
                      <Star size={16} className="opacity-90" color={fg} />
                      <span style={{ color: fg }}>
                        {rating.toFixed(1)}
                        {typeof reviews === "number" ? (
                          <span className="opacity-80"> • {reviews} reviews</span>
                        ) : null}
                      </span>
                    </div>
                  )}

                </div>

                {/* product selector */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveIdx((v) => v - 1)}
                    className={btnSoft}
                    aria-label="Previous product"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex flex-wrap gap-2">
                    {products.map((p, i) => {
                      const isActive = p.id === active.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setActiveIdx(i)}
                          className={
                            "rounded-full px-4 py-2 text-sm ring-1 transition backdrop-blur " +
                            (isActive
                              ? "bg-white text-black ring-white/40"
                              : "bg-white/12 text-white ring-white/20 hover:bg-white/16")
                          }
                          style={!isActive ? { color: fg } : undefined}
                        >
                          {p.name}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveIdx((v) => v + 1)}
                    className={btnSoft}
                    aria-label="Next product"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" className={btnSoft}>
                   <Link href="#product">View details</Link> 
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Animated baby + product pack */}
            <div className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[620px]">
                {/* base glass card */}
                <div className="absolute inset-0 rounded-[32px] bg-white/10 ring-1 ring-white/20 backdrop-blur" />

                {/* baby (changes animated) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-baby"}
                    initial={{ opacity: 0, x: 24, scale: 0.98, rotate: 0.6 }}
                    animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, x: -18, scale: 0.985, rotate: -0.4 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 p-6 md:p-8">
                      <div className="relative h-full w-full">
                        <Image
                          src={heroBabySrc}
                          alt={`${active.name} baby`}
                          fill
                          priority
                          className="object-contain drop-shadow-2xl"
                          sizes="(max-width: 1024px) 92vw, 48vw"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* pack/product (slower parallax-ish) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-pack"}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.99 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute -bottom-6 right-4 h-[48%] w-[48%] md:right-6 md:h-[52%] md:w-[52%]"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={heroPackSrc}
                        alt={`${active.name} pack`}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1024px) 52vw, 28vw"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* small badges */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {(active.variants || []).slice(0, 6).map((v) => (
                  <div
                    key={v.id}
                    className="flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs ring-1 ring-white/20 backdrop-blur"
                    style={{ color: fg }}
                  >
                    {v.icon ? (
                      <Image
                        src={v.icon}
                        alt={v.size ?? "Variant icon"}
                        width={18}
                        height={18}
                        className="opacity-95"
                      />
                    ) : null}
                    <span className="font-semibold">{v.size}</span>
                    {v.weight ? (
                      <span className="opacity-80">({v.weight}kg)</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="product" className="mx-auto max-w-7xl px-6 py-12 md:py-16 space-y-8">
        <div className="rounded-3xl bg-white p-6 md:p-8">
          <DescSection product={active} />
        </div>
        <div className="rounded-3xl bg-babyCare/10 p-6 md:p-8">
          <ProductCloseViewSection product={active} />
        </div>
        <div className="rounded-3xl bg-white p-6 md:p-8">
          <ProductFeature
            product={active}
            style={featureStyle}
          />
        </div>
        <div className="rounded-3xl bg-babyCare/10 p-6 md:p-8">
          <ReviewSection product={active} />
        </div>
        <div className="rounded-3xl bg-white p-6 md:p-8">
          <FaqSection
            product={active}
            faqs={active.faqs}
            questionColor={active.background}
            answerColor="#52525b"
          />
        </div>
      </section>
    </div>
  );
}
