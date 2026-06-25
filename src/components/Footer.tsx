import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-enterprise-blue-dark dark:bg-primary-container w-full pt-16 pb-8 border-t border-primary-container text-white transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-container-max-width mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="font-headline-md text-headline-md text-metallic-gold-light font-bold">
            Sentientware
          </div>
          <p className="text-surface-variant opacity-80 text-caption max-w-xs leading-relaxed">
            Engineering global excellence through high-performance technology solutions. Leading the AI frontier with robust enterprise frameworks.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-metallic-gold-light transition-colors"
              aria-label="Global"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-metallic-gold-light transition-colors"
              aria-label="Share"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-metallic-gold-light transition-colors"
              aria-label="Forum"
            >
              <span className="material-symbols-outlined">forum</span>
            </a>
          </div>
        </div>

        {/* Company / Industries Links */}
        <div>
          <h5 className="text-on-primary font-label-bold mb-6 uppercase tracking-wider">
            Industries
          </h5>
          <ul className="space-y-3 text-caption">
            <li>
              <Link
                href="/industries"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Banking & Financial Services
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Healthcare & Life Sciences
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Insurance Sector
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Industrial & Smart Manufacturing
              </Link>
            </li>
          </ul>
        </div>

        {/* Platforms & Services Links */}
        <div>
          <h5 className="text-on-primary font-label-bold mb-6 uppercase tracking-wider">
            Platforms & Services
          </h5>
          <ul className="space-y-3 text-caption">
            <li>
              <Link
                href="/solutions"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                GenAI Hub
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                SASVA™ Assistant
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Cloud Engineering & Dev
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Digital Modernization
              </Link>
            </li>
          </ul>
        </div>

        {/* Corporate Support Links */}
        <div>
          <h5 className="text-on-primary font-label-bold mb-6 uppercase tracking-wider">
            Corporate
          </h5>
          <ul className="space-y-3 text-caption">
            <li>
              <Link
                href="/about-us"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                About Sentientware
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Careers & Opportunities
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Global Offices & Locations
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Privacy Policy & Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-16 px-6 md:px-margin-desktop max-w-container-max-width mx-auto border-t border-white/5 pt-8 text-center">
        <p className="text-caption text-surface-variant opacity-60">
          © {new Date().getFullYear()} Sentientware Tech Solution. Engineering Excellence Globally. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
