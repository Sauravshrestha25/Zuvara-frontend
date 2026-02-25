"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Product as BabyProduct, Variant as BabyVariant } from "@/type/babyCareProductType";
import type { Product as ClothingProduct, Variant as ClothingVariant } from "@/type/babyClothesType";
import type { Product as StrollerProduct, Variant as StrollerVariant } from "@/type/strollerRockerProductType";
import type { Product as PersonalProduct, Variant as PersonalVariant } from "@/type/personalCareProductType";

type ProductType =
  | BabyProduct
  | ClothingProduct
  | StrollerProduct
  | PersonalProduct;

type UnifiedVariant =
  | BabyVariant
  | ClothingVariant
  | StrollerVariant
  | PersonalVariant;

interface ProductCardProps {
  product: ProductType;
  index: number;
  activeTab: "baby" | "personal" | "clothing" | "stroller";
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  activeTab,
  className,
}) => {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState<UnifiedVariant | null>(null);

  const { variants } = product;

  const handleCardClick = () => {
    const routeMap: Record<typeof activeTab, string> = {
      baby: "babyCareProduct",
      personal: "personalCareProduct",
      stroller: "strollerRockerProduct",
      clothing: "clothing",
    };

    router.push(`/${routeMap[activeTab]}/${product.slug}`);
  };

  const displayVariantImage =
    selectedVariant?.image ||
    (variants && variants.length > 0 ? variants[0].image : product.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`h-full ${className}`}
    >
      <div
        onClick={handleCardClick}
        className="
          group relative flex flex-col
          w-full min-h-[360px]
          bg-white rounded-[28px] p-4
          transition-all duration-500 cursor-pointer
          border border-zinc-100
          hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-200
        "
      >
        {/* Soft gradient glow */}
        <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-emerald-50 via-transparent to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Badge */}
        <div className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wider text-emerald-900 border border-emerald-100 shadow-sm">
          Best Seller
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-50">
          <Image
            src={displayVariantImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 pt-6 px-2">

          <h3 className="text-sm lg:text-base font-medium text-zinc-800 leading-snug tracking-tight group-hover:text-emerald-900 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Variants */}
          {variants && variants.length > 0 && (
            <div className="mt-4 flex gap-2 flex-wrap">
              {variants.slice(0, 4).map((variant) => (
                <button
                  key={variant.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariant(variant);
                  }}
                  className={`size-8 rounded-full border border-zinc-200 overflow-hidden transition-all ${
                    (selectedVariant?.id ?? variants[0].id) === variant.id
                      ? "ring-2 ring-emerald-500 ring-offset-2"
                      : "hover:border-emerald-200"
                  }`}
                >
                  <Image
                    src={variant.image}
                    alt="variant"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto pt-6 flex items-center justify-between">

            <span className="text-emerald-900 font-medium text-sm tracking-wide">
              Explore Product
            </span>

            <div className="size-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 transition-all duration-300 group-hover:bg-emerald-900 group-hover:text-white">
              <ArrowUpRight size={16} />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;