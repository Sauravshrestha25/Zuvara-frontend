"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../common-ui/ProductCard";
import { babyCareProducts } from "@/constants/babyCareProduct";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";

const ProductList = () => {
  const [activeTab, setActiveTab] = useState<"baby" | "clothing" | "stroller">(
    "baby",
  );

  const products =
    activeTab === "baby"
      ? babyCareProducts
      : activeTab === "clothing"
        ? clothingProducts
        : strollerRockerProducts;

  const tabs = [
    { id: "baby", label: "Baby Care", icon: "/icons/l.png" },
    { id: "clothing", label: "Clothing", icon: "/icons/clothes.png" },
    {
      id: "stroller",
      label: "Strollers & Rockers",
      icon: "/icons/stroller.png",
    },
  ] as const;

  return (
    <section className="px-4 pt-4">
      {/* Tabs */}
      <h2 className="text-2xl font-semibold mb-2">Category</h2>
      <div className="flex gap-4 mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2 py-3 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
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
            {/* {activeTab === tab.id && ( */}
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              className="whitespace-pre-line text-sm"
            >
              {tab.label}
            </motion.span>
            {/* )} */}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            activeTab={activeTab}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ProductList;
