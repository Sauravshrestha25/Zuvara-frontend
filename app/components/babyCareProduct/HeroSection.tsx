"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <span className="inline-block px-4 py-1.5 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
              Premium Collection
            </span> */}
            <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Everyday Baby <br />
              <span className="text-zinc-400">Care Essentials.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl">
              Diapers, wipes, and gentle care products meticulously designed to
              keep your baby clean, comfortable, and remarkably happy.
            </p>

            {/* <div className="mt-12 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-zinc-100 text-zinc-600 text-sm font-bold">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Dermatologically Tested
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-zinc-100 text-zinc-600 text-sm font-bold">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Hypoallergenic
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
