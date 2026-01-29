"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../common-ui/ProductCard";
import Image from "next/image";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";
import type { Product as ClothingProduct } from "@/type/babyClothesType";
import type { Product as StrollerProduct } from "@/type/strollerRockerProductType";

const ProductList = () => {
  const [activeTab, setActiveTab] = useState<"clothing" | "stroller">(
    "clothing",
  );

  const tabs = [
    { id: "clothing", label: "Clothing", icon: "/icons/clothes.png" },
    {
      id: "stroller",
      label: "Strollers & Rockers",
      icon: "/icons/stroller.png",
    },
  ] as const;

  const products =
    activeTab === "clothing"
      ? (clothingProducts as unknown as ClothingProduct[])
      : (strollerRockerProducts as unknown as StrollerProduct[]);

  return (
    <section className="container lg:min-h-screen mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl">
      {/* Tabs */}
      <div className="flex gap-4 mb-8 pt-4 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 lg:px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-foreground text-white shadow-lg"
                : "bg-zinc-100 text-foreground hover:bg-zinc-200"
            }`}
          >
            <div className="relative w-6 h-6 shrink-0">
              <Image
                src={tab.icon}
                alt={tab.label}
                fill
                className={`object-contain transition-all duration-300 ${
                  activeTab === tab.id ? "brightness-0 invert" : ""
                }`}
              />
            </div>
            {activeTab === tab.id && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                className="overflow-hidden whitespace-nowrap"
              >
                {tab.label}
              </motion.span>
            )}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2"
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product as any}
            index={index}
            activeTab={activeTab === "clothing" ? "clothing" : "stroller"}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ProductList;
