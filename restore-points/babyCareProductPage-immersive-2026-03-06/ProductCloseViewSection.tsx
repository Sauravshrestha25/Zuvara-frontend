import React from "react";
import { Product } from "@/type/babyCareProductType";
import { motion } from "framer-motion";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

interface ProductCloseViewProps {
  product: Product;
  theme: ThemePreset;
}

const ProductCloseViewSection = ({ product, theme }: ProductCloseViewProps) => {
  if (!product.productCloseView) return null;

  const midIndex = Math.ceil((product.productCloseView.length || 0) / 2);
  const leftFeatures = product.productCloseView.slice(0, midIndex);
  const rightFeatures = product.productCloseView.slice(midIndex);

  const accentColor = theme.accent || product.background;

  return (
      <section className="relative px-6 py-20 lg:px-10 overflow-hidden">
        <div className="mx-auto max-w-7xl">

          {/* Header - Setting the technical context */}
          <div className="text-center mb-16 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: hexToRgba(accentColor, 0.55) }}>
              Engineering Spotlight
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight" style={{ color: hexToRgba(accentColor, 0.9) }}>
              A Closer Look At <span className="font-light italic opacity-60">Every Layer.</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT FEATURES: Visual Pointers Left */}
            <div className="lg:col-span-3 space-y-12 lg:space-y-24 order-2 lg:order-1">
              {leftFeatures.map((feature, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="group relative flex items-center lg:flex-row-reverse gap-6 text-left lg:text-right"
                  >
                    {/* Icon Container */}
                    <div
                      className="shrink-0 size-14 lg:size-16 rounded-2xl border flex items-center justify-center p-3 shadow-sm transition-all group-hover:shadow-md group-hover:scale-110"
                      style={{
                        backgroundColor: hexToRgba(theme.pageBg, 0.86),
                        borderColor: `${theme.border}66`,
                      }}
                    >
                      <img
                          src={feature.icon}
                          alt={feature.label}
                          className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="space-y-1">
                      <p
                        className="text-sm lg:text-base font-bold leading-snug uppercase tracking-tight"
                        style={{ color: hexToRgba(accentColor, 0.86) }}
                      >
                        {feature.label}
                      </p>
                      <div className="hidden lg:block h-px w-12 ml-auto rounded-full group-hover:w-20 transition-all duration-500" style={{ backgroundColor: `${accentColor}44` }} />
                    </div>
                  </motion.div>
              ))}
            </div>

            {/* CENTER: THE HERO PRODUCT */}
            <div className="lg:col-span-6 relative order-1 lg:order-2 flex flex-col items-center">
              {/* Ambient Background Radial */}
              <div
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[120%] rounded-full blur-[120px] opacity-10 pointer-events-none"
                  style={{ backgroundColor: accentColor }}
              />

              <div className="relative z-10 w-full max-w-sm lg:max-w-md mx-auto transform transition-transform duration-700 hover:scale-105">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
                />

                {/* Technical Scan Lines Decor */}
                <div
                  className="absolute inset-0 border-[1px] rounded-full scale-110 -z-10 animate-pulse"
                  style={{ borderColor: `${theme.border}66` }}
                />
              </div>

              {/* Bottom Label */}
              <div
                className="mt-8 px-5 py-2 rounded-full border backdrop-blur-sm shadow-sm"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.72),
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: hexToRgba(accentColor, 0.62) }}>
                  Interactive Anatomy
                </p>
              </div>
            </div>

            {/* RIGHT FEATURES: Visual Pointers Right */}
            <div className="lg:col-span-3 space-y-12 lg:space-y-24 order-3">
              {rightFeatures.map((feature, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="group relative flex items-center gap-6 text-left"
                  >
                    {/* Icon Container */}
                    <div
                      className="shrink-0 size-14 lg:size-16 rounded-2xl border flex items-center justify-center p-3 shadow-sm transition-all group-hover:shadow-md group-hover:scale-110"
                      style={{
                        backgroundColor: hexToRgba(theme.pageBg, 0.86),
                        borderColor: `${theme.border}66`,
                      }}
                    >
                      <img
                          src={feature.icon}
                          alt={feature.label}
                          className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="space-y-1">
                      <p
                        className="text-sm lg:text-base font-bold leading-snug uppercase tracking-tight"
                        style={{ color: hexToRgba(accentColor, 0.86) }}
                      >
                        {feature.label}
                      </p>
                      <div className="hidden lg:block h-px w-12 rounded-full group-hover:w-20 transition-all duration-500" style={{ backgroundColor: `${accentColor}44` }} />
                    </div>
                  </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
  );
};

export default ProductCloseViewSection;
