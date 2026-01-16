"use client";

import Image from "next/image";
import Button from "../common-ui/Button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-screen lg:h-screen overflow-hidden">
        <Image
          src="/baby/baby-mom.png"
          alt="Happy Baby"
          height={1000}
          width={1000}
          className="object-contain h-full object-bottom"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white" />
      </div>
      {/* Content - Left Side */}
      <div className="relative z-10 w-full flex flex-col justify-start mt-32 mx-auto! px-4 sm:px-6 lg:px-6 max-w-5xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-7xl mb-6  text-foreground font-medium font-poppins"
        >
          Your child needs
          <br />
          <span className="text-[#8cd700] ">Comfort & Safety</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-700 mb-8 max-w-xl"
        >
          Trusted by newly married couples around the world, focusing on comfort
          and safety for your heart and healthy baby.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button content="Explore Baby Care Products" link="/shop" />
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8cd700]/10">
              <span className="text-foreground font-bold text-sm">✓</span>
            </div>
            <p className="text-sm font-semibold text-foreground">
              Trusted by 100+ Nepali mothers
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8cd700]/10">
              <span className="text-foreground font-bold text-sm">✓</span>
            </div>
            <p className="text-sm font-semibold text-foreground">
              In every Nepali mother&apos;s bag
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
