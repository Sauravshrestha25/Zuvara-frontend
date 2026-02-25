"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
   const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Baby", path: "/babyCareProduct" },
    { label: "Blog", path: "/blogs" },
    { label: "Contact", path: "/contact" },
  ];

  const navRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLImageElement>(null);

  const hoverTl = useRef<gsap.core.Timeline | null>(null);
  const pressTl = useRef<gsap.core.Timeline | null>(null);

  const startHoverTap = (target: HTMLElement, item: string) => {
  const hand = handRef.current;
  const nav = navRef.current;
  if (!hand || !nav) return;

  hoverTl.current?.kill();

  const navRect = nav.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  const x =
    targetRect.left -
    navRect.left +
    targetRect.width / 2 -
    30;

  hoverTl.current = gsap.timeline({ repeat: 2  });

  hoverTl.current
    .set(hand, {
      display: "block",
      x,
      y: -10,         
      rotate: 180,
      scale: 1.05,    
    })

    .to(hand, {
      scale: 0.95,
      y: -20,
      duration: 0.5,
      ease: "power2.inOut",
      onStart: () => {
        setActive(item); 
      },
    })   
    .to(hand, {
      scale: 1.05,
      y: -10,
      duration: 0.18,
      ease: "power2.inOut",
      onStart: () => {
        setActive("");
      },
    });
};

  const stopHoverTap = () => {
    hoverTl.current?.kill();
  };

  const handlePress = (target: HTMLElement, item: string) => {
    const hand = handRef.current;
    const nav = navRef.current;
    if (!hand || !nav) return;

    hoverTl.current?.kill();
    pressTl.current?.kill();

    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const x =
      targetRect.left -
      navRect.left +
      targetRect.width / 2 -
      30;

    pressTl.current = gsap.timeline();

    pressTl.current
      .set(hand, {
        display: "block",
        x,
        y: -80,
        rotate: 180,
      })
      .to(hand, {
        y: -20,
        duration: 0.4,
        ease: "power3.out",
      })
      .to(hand, {
        scale: 0.80,
        duration: 0.2,
        ease: "power1.inOut",
        onComplete: () => {
          setActive(item); 
        },
      })
      .to(hand, {
        y: -120,
        duration: 0.5,
        ease: "power3.in",
      })
      .set(hand, { display: "none" });
  };

 const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="w-[90%] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Image src="/logo/logo.png" alt="" width={120} height={60}></Image>
        </div>

        {/* Desktop Navbar */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center gap-10 relative"
        >
          {isDesktop && (
            <Image
              ref={handRef}
              src="/babyHand.png"
              alt="baby hand"
              width={60}
              height={60}
              className="absolute top-0 left-0 hidden pointer-events-none z-50"
            />
          )}

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onMouseEnter={(e) =>
                isDesktop &&
                startHoverTap(e.currentTarget as HTMLElement, item.label)
              }
              onMouseLeave={stopHoverTap}
              onClick={(e) =>
                handlePress(e.currentTarget as HTMLElement, item.label)
              }
              className={`relative  font-medium transition-all text-center duration-200 px-2 py-8 min-w-20 ${
                active === item.label
                  ? "bg-[#45685e] text-white! rounded-b-full"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-gray-800 text-xl">☰</button>
        </div>

        {/* CTA */}
        <button className="bg-babyCare text-black px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hidden md:block">
          Buy Now
        </button>

      </div>
    </header>
  );
};