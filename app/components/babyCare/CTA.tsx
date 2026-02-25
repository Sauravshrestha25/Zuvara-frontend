"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ZuvyBabyModel from "./ZuvyBabyModel";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftLeafRef = useRef<HTMLDivElement>(null);
  const rightLeafRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // useGSAP(
  //   () => {
  //     // Force a refresh once the page is fully loaded and settled
  //     const handleLoad = () => ScrollTrigger.refresh();
  //     window.addEventListener("load", handleLoad);

  //     // Also refresh after a short delay for hydration settlement
  //     const refreshTimeout = setTimeout(() => {
  //       ScrollTrigger.refresh();
  //     }, 500);

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "+=100%",
  //         scrub: 1.5,
  //         pin: true,
  //         pinSpacing: true,
  //         markers: true,
  //         anticipatePin: 1,
  //         invalidateOnRefresh: true,
  //         refreshPriority: 1,
  //       },
  //     });

  //     tl.to(leftLeafRef.current, {
  //       xPercent: -100,
  //       yPercent: 100,
  //       scale: 1.2,
  //       ease: "none",
  //     }).to(
  //       rightLeafRef.current,
  //       {
  //         xPercent: 100,
  //         yPercent: 100,
  //         scale: 1.2,
  //         ease: "none",
  //       },
  //       "<",
  //     );

  //     return () => {
  //       window.removeEventListener("load", handleLoad);
  //       clearTimeout(refreshTimeout);
  //     };
  //   },
  //   { scope: sectionRef, dependencies: [] },
  // );


  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">

      <div className="relative lg:bg-babyCare h-auto md:h-[45vh] lg:h-[60vh] lg:py-8">
        {/* top curve border */}
        <div className="custom-shape-divider-top hidden lg:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
    <div
  ref={contentRef}
  className="container w-full h-full flex items-center rounded-xl lg:rounded-none bg-babyCare "
>
  <div className="overflow-hidden w-[90%] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end">
      
      {/* Content */}
      <div className="p-4 lg:py-24 ">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
          Premium Baby Comfort
        </p>

        <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4 font-poppins leading-[0.95] lg:leading-none">
          Gentle care for your baby&apos;s{" "}
          <span className="text-[#8cd700] italic">softest moments</span>
        </h2>

        <p className="text-zinc-700 text-sm lg:text-base mb-8 leading-relaxed max-w-md">
          Crafted with ultra-soft, breathable materials to keep your baby
          comfortable, protected, and happy all day long.
        </p>

        {/* CTA Button */}
        <button className="bg-[#45685E] hover:bg-[#3a5a52] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg">
          Shop Premium Diapers
        </button>
      </div>

      {/* Image */}
      <div className="relative h-64 md:h-full min-h-64 hidden lg:block">
        <Image
          src="/images/baby/baby31.png"
          alt="Premium Baby Care"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
</div>

        {/* bottom curve border */}
        {/* <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default CTA;
