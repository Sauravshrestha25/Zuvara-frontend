"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftRight = () => {
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    if (!leftImageRef.current || !rightImageRef.current) return;

    // Set initial positions
    gsap.set(leftImageRef.current, { x: "-100vw" });
    gsap.set(rightImageRef.current, { x: "100vw" });

    // Animate left image moving from left screen edge to middle on scroll
    gsap.to(leftImageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
      },
      x: 0,
      ease: "power2.out",
    });

    // Animate right image moving from right screen edge to middle on scroll
    gsap.to(rightImageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
      },
      x: 0,
      ease: "power2.out",
    });

    // Pin the container
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "bottom center",
        pin: true,
        markers: false,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-8 overflow-hidden hidden md:block "
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center min-h-96 gap-0 relative">
          {/* Left Image - starts from screen left corner */}
          <div ref={leftImageRef} className="w-1/2 shrink-0 -mr-px">
            <Image
              src="/images/left.png"
              alt="Left Section"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Image - starts from screen right corner */}
          <div ref={rightImageRef} className="w-1/2 shrink-0 -ml-px">
            <Image
              src="/images/right.png"
              alt="Right Section"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftRight;
