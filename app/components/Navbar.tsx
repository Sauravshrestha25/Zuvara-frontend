"use client";

import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    { label: "Products", href: "#" },
    { label: "Baby Care", href: "#" },
    { label: "Kids Fashion", href: "#" },
    { label: "Home & Living", href: "#" },
    { label: "Articles", href: "#" },
    { label: "About", href: "#" },
    { label: "Support", href: "#" },
  ];

  const mobileMenuItems = [
    { label: "Home", href: "/", icon: "material-symbols:home-rounded" },
    { label: "Search", href: "#", icon: "iconamoon:search-light" },
    {
      label: "Cart",
      href: "#",
      icon: "fluent:cart-20-filled",
      badge: 1,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/9801018656",
      icon: "logos:whatsapp-icon",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200">
        <div className="px-4 sm:px-6 lg:px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16 gap-16">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
            </Link>

            {/* Desktop Menu - Center */}
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-700 hover:text-black transition whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4 ">
              {/* Search Icon */}
              <button className=" hover:text-zinc-900 transition">
                <Icon icon="si:search-duotone" width="24" height="24" />
              </button>

              {/* Shopping Bag Icon */}
              <button className="hover:text-zinc-900 transition relative">
                <Icon icon="logos:whatsapp-icon" width="24" height="24" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Top */}
      <nav className="lg:hidden fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 h-14">
        <div className="flex justify-between items-center h-full px-4">
          {/* Humburger */}
          <Icon
            icon="material-symbols:menu-rounded"
            className="text-3xl font-semibold"
          />
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
          </Link>

          {/* Search Icon */}
          <button className="p-2">
            <Icon icon="iconamoon:search-light" width="24" height="24" />
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - App Style */}
      <nav className="lg:hidden fixed bottom-0 w-full z-50 bg-white border-t border-zinc-200">
        <div className="flex justify-around items-center h-20 px-2">
          {mobileMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-lg hover:bg-zinc-100 transition flex-1"
            >
              <Icon
                icon={item.icon}
                width="24"
                height="24"
                className="text-2xl"
              />
              <span className="text-xs text-zinc-700 font-medium">
                {item.label}
              </span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacers for fixed navbars */}
      <div className="h-14 lg:h-16" />
    </>
  );
}
