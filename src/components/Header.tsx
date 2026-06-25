"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about-us" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white w-full top-0 sticky border-b border-gray-200 shadow-sm z-50 transition-colors duration-300">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop h-16 w-full relative">
        {/* Brand Logo */}
        <Link href="/" className="hover:opacity-95 transition-opacity text-enterprise-blue-dark">
          <Logo />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm whitespace-nowrap relative py-2 group transition-colors duration-300 ${
                  active
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-500 font-medium"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${
                    active ? "bg-blue-600 scale-x-100" : "bg-blue-500 scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Header Action CTAs (Right Side) */}
        <div className="hidden md:flex items-center gap-4">
            <Link
              href="/careers"
              className="px-5 py-2 border border-gray-300 text-enterprise-blue-dark text-sm font-semibold rounded-md hover:text-blue-500 hover:border-blue-500 transition-colors duration-300 whitespace-nowrap"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 bg-enterprise-blue-dark text-white text-sm font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300 shadow-sm whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

        {/* Mobile Hamburger Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center p-2 text-primary dark:text-white"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-surface/95 dark:bg-enterprise-blue-dark/95 backdrop-blur-md flex flex-col p-6 space-y-6 shadow-xl border-t border-outline-variant dark:border-primary-container">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-body-md py-2 border-l-4 pl-3 transition-colors ${
                    active
                      ? "text-primary dark:text-secondary-fixed font-label-bold border-secondary"
                      : "text-on-surface-variant dark:text-surface-variant border-transparent hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-4 pt-6 border-t border-outline-variant dark:border-primary-container">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-enterprise-blue-dark text-on-primary font-label-bold rounded transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/careers"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 border border-metallic-gold-light text-primary dark:text-secondary-fixed font-label-bold rounded transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
