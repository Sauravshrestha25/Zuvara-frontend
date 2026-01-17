"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface Variant {
  id: number;
  image: string;
  color: string;
}

interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  variants: Variant[];
}

const VideoSection = () => {
  const [selectedVariant, setSelectedVariant] = useState<
    Record<number, Variant>
  >({});
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const featuredProduct: Product = {
    id: 1,
    name: "Zuvara Baby Diaper",
    rating: 4.9,
    reviews: 328,
    image: "/diaper/diaper.png",
    category: "Premium Watch",
    inStock: true,
    variants: [
      { id: 1, image: "/diaper/diaper.png", color: "Black & Silver" },
      { id: 2, image: "/diaper/diaper2.png", color: "Gold & Silver" },
      { id: 3, image: "/diaper/diaper3.png", color: "Rose Gold" },
    ],
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-6 items-center">
          {/* Left Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-video bg-linear-to-br from-foreground to-[#8cd700] rounded-lg overflow-hidden shadow-2xl"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/zuvara-vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Controls */}
            <div className="absolute bottom-6 right-6 flex gap-4 z-10">
              <button
                onClick={handleToggleMute}
                className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all"
                aria-label="Toggle Volume"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Video Label */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-xs font-medium backdrop-blur-md">
              Zuvara Diaper Solutions.
            </div>
          </motion.div>

          {/* Right Side - Product Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="group h-full flex flex-col bg-white rounded-lg border border-zinc-200 overflow-hidden hover:border-[#8cd700] transition-all duration-400 relative">
              {/* Best Seller Badge */}
              <div className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-xs font-medium text-[#8cd700] shadow-sm">
                Best Seller
              </div>

              {/* Product Image Container */}
              <div className="relative bg-zinc-100 aspect-square overflow-hidden h-56 shrink-0">
                <Image
                  src={
                    selectedVariant[featuredProduct.id]?.image ||
                    featuredProduct.image
                  }
                  alt={featuredProduct.name}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>

              {/* Variant Thumbnails - Below Image */}
              <div className="px-3 py-2 bg-zinc-50 border-t border-zinc-100 w-full">
                <div className="flex gap-2 justify-center overflow-x-auto">
                  {featuredProduct.variants &&
                    featuredProduct.variants.length > 0 && (
                      <>
                        {featuredProduct.variants.slice(0, 6).map((variant) => (
                          <button
                            key={variant.id}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedVariant((prev) => ({
                                ...prev,
                                [featuredProduct.id]: variant,
                              }));
                            }}
                            className={`shrink-0 w-10 h-10 rounded border-2 overflow-hidden transition-all ${
                              selectedVariant[featuredProduct.id]?.id ===
                              variant.id
                                ? "border-zinc-500 ring-2 ring-[#8cd700]"
                                : "border-zinc-300 hover:border-zinc-500"
                            }`}
                            title={variant.color}
                          >
                            <Image
                              src={variant.image}
                              alt={variant.color}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                        {featuredProduct.variants.length > 6 && (
                          <div className="shrink-0 w-10 h-10 rounded border-2 border-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600 hover:border-zinc-500 transition-all">
                            +{featuredProduct.variants.length - 6}
                          </div>
                        )}
                      </>
                    )}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 p-4 flex flex-col">
                {/* Name */}
                <h3 className="text-sm lg:text-base font-semibold text-zinc-900 mb-2 line-clamp-2">
                  {featuredProduct.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-600 mb-3 line-clamp-2">
                  {featuredProduct.category} - Premium Quality
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(featuredProduct.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-zinc-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500">
                    ({featuredProduct.reviews})
                  </span>
                </div>

                {/* Link - Minimal Style */}
                <Link
                  href={`/product/${featuredProduct.id}`}
                  className="text-xs text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
                >
                  View details →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
