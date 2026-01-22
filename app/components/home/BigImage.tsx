"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const BigImage = () => {
  // const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const start = isSmallerDevice ? "top bottom" : "center bottom";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          // start: "center bottom",
          // start: "top bottom",
          start,
          end: "bottom center",
          scrub: 1.2,
          // markers: true,
        },
      });

      // Animate only image sliding from bottom to top
      // tl.from(imageRef.current, {
      //   x: -window.innerHeight,
      //   opacity: 0,
      //   duration: 1,
      // })
      // Animate text appearing after image animation completes
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1,
        },
        // 1, // Delay equal to image animation duration
        "<",
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-auto md:h-[40vh] lg:h-[80vh] xl:h-[70vh] bg-divider flex items-center relative">
      {/* top curve border */}
      <div className="custom-shape-divider-top">
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
      <div className="container w-full">
        <div ref={sectionRef} className="overflow-hidden">
          {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-12 items-center"> */}
          <div className="flex items-center">
            {/* Left Side - Text Content */}
            <div
              ref={titleRef}
              className="w-2/3 lg:w-1/2 pl-8 lg:py-24 flex flex-col items-start justify-center lg:pl-36"
            >
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Premium Collection
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-3 font-poppins leading-[0.9] lg:leading-none">
                Discover our{" "}
                <span className="text-[#8cd700] italic">complete range</span> of
                products
              </h2>
              <p className="hidden md:block text-zinc-700 text-sm lg:text-base leading-relaxed">
                Quality baby products designed for comfort and safety.
              </p>
            </div>

            {/* Right Side - Animated Image */}
            <div
              // ref={imageRef}
              className="w-1/3 lg:w-1/2 relative h-64 md:h-full min-h-64"
            >
              <Image
                src="/baby/baby-with-product.png"
                alt="Sleeping Baby"
                fill
                className="object-contain object-center pr-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom curve border */}
      <div className="custom-shape-divider-bottom">
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
      </div>
    </section>
  );
};

export default BigImage;
