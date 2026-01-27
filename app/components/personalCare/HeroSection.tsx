"use client";

import Button from "../common-ui/Button";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const HeroSection = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <main className="bg-ternary h-[85vh] lg:min-h-screen relative">
      <section className="px-4 sm:px-6 lg:px-6 mx-auto! max-w-7xl h-full lg:min-h-screen flex flex-col lg:flex-row items-center relative">
        {/* left side */}
        <div className="lg:w-1/2 flex-1 self-stretch flex flex-col justify-between lg:justify-center gap-4 lg:gap-8 py-8 lg:py-16">
          <div className="space-y-4 lg:space-y-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">
              Period care that lets you move, rest, and live normally.
            </h1>
            {/* <h1>Made for Everyday Living</h1> */}
            <p className="text-lg lg:text-xl">
              Designed to support you—wherever the day takes you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {isSmallerDevice && (
              <div className="w-fit bg-zinc-300 px-4 py-1 rounded-full z-30 flex items-center gap-2">
                <img
                  src="/icons/trusted-icon.png"
                  alt="trusted icon"
                  className="size-5"
                />
                <p className="flex flex-col">
                  <span className="text-sm font-semibold">Trusted by</span>
                  <span className="text-xs">100K+ Nepali mothers</span>
                </p>
              </div>
            )}
            <Button
              content="Product List"
              link="/personalCareProduct"
              for="personalCare"
              buttonClassName="w-full lg:w-fit z-30"
            />
          </div>
        </div>

        {/* right side - mobile */}
        {isSmallerDevice && (
          <div className="w-1/2 absolute bottom-0 right-0">
            <div className="relative flex justify-center">
              <img
                src="/images/personalCare/lady-with-goggles.png"
                alt="lady with goggles"
                className="w-fit h-[55vh] object-contain z-20 relative rounded-[50px]"
              />
              <div className="size-90 rounded-full bg-personalCare absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
              {/* <img
                src="/icons/sparkle.png"
                alt="sparkle icon"
                className="size-8 invert absolute top-0 left-[40%]"
              /> */}
            </div>
          </div>
        )}

        {/* right side - desktop */}
        {!isSmallerDevice && (
          <div className="lg:w-1/2 relative">
            <div className="relative flex justify-center">
              <img
                src="/images/personalCare/lady-with-goggles.png"
                alt="lady with goggles"
                className="w-fit h-[55vh] object-contain z-20 relative rounded-[50px]"
              />
              <div className="size-90 rounded-full bg-personalCare absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
              <img
                src="/icons/sparkle.png"
                alt="sparkle icon"
                className="size-8 invert absolute top-0 left-[40%]"
              />
              <div className="absolute bottom-16 left-0 bg-zinc-300 px-6 py-2 rounded-full z-30 flex items-center gap-2">
                <img
                  src="/icons/trusted-icon.png"
                  alt="trusted icon"
                  className="size-7"
                />
                <p className="flex flex-col">
                  <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Trusted by</span>
                  <span className="text-sm font-bold text-zinc-800">100K+ Nepali mothers</span>
                </p>
              </div>
            </div>

               <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-20 right-0 bg-white/90 px-6 py-2 rounded-full z-30"
              >
                 <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-pink-100 flex items-center justify-center text-xl">✨</div>
                    <div>
                      <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Comfort</p>
                      <p className="text-sm font-bold text-zinc-800">All Day Long</p>
                    </div>
                 </div>
              </motion.div>
          </div>
        )}
      </section>
    </main>
  );
};

export default HeroSection;
