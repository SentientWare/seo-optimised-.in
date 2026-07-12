"use client";

import React, { useState } from "react";
import Link from "next/link";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  return (
    <footer className="bg-enterprise-blue-dark dark:bg-primary-container w-full pt-16 pb-8 border-t border-primary-container text-white transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-container-max-width mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="font-headline-md text-headline-md text-metallic-gold-light font-bold">
            Sentientware
          </div>
          <div className="text-surface-variant opacity-80 text-caption max-w-xs leading-relaxed space-y-4">
            <p>
              Engineering global excellence through high-performance technology solutions. Leading the AI frontier with robust enterprise frameworks.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://sentientware.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-metallic-gold-light transition-colors w-fit">
                <span className="material-symbols-outlined text-[1.125rem]">public</span>
                <span>Visit Our Website: sentientware.in</span>
              </a>
              <div className="font-label-bold text-white pt-1">
                Follow Us for Updates:
              </div>
              <div className="flex gap-4 items-center pt-1">
                <a href="https://www.instagram.com/sentientware_tech/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-metallic-gold-light transition-transform hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/sentientware-tech-solutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-metallic-gold-light transition-transform hover:scale-110" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://x.com/Sentientware_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-metallic-gold-light transition-transform hover:scale-110" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/1LRi5Begnp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-metallic-gold-light transition-transform hover:scale-110" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.whatsapp.com/channel/0029Vb5zcjgI1rcm9VuzII09" target="_blank" rel="noopener noreferrer" className="text-white hover:text-metallic-gold-light transition-transform hover:scale-110" aria-label="WhatsApp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.031 2C6.471 2 1.956 6.516 1.956 12.076c0 1.777.464 3.513 1.347 5.044L2 22l5.039-1.321c1.478.803 3.149 1.226 4.992 1.226 5.559 0 10.075-4.516 10.075-10.076C22.106 6.516 17.59 2 12.031 2zm5.727 14.545c-.244.686-1.42 1.257-1.957 1.321-.512.062-1.185.1-3.691-.941-3.023-1.257-4.99-4.364-5.137-4.561-.147-.197-1.228-1.636-1.228-3.12 0-1.483.774-2.222 1.045-2.502.27-.28.588-.35.784-.35.197 0 .393.003.565.011.183.008.43-.071.674.521.257.625.882 2.155.956 2.302.073.148.122.321.024.519-.098.197-.147.321-.295.493-.146.172-.305.378-.44.505-.147.135-.306.284-.135.58.172.296.76 1.255 1.632 2.031 1.127 1.004 2.062 1.312 2.357 1.448.294.135.466.111.638-.086.171-.198.736-.855.933-1.15.196-.296.393-.247.663-.148.27.099 1.716.808 2.01 1.006.294.198.49.297.564.462.074.164.074.954-.17 1.64z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
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
              <a
                href="https://career.sentientware.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all"
              >
                Careers & Opportunities
              </a>
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsPrivacyModalOpen(true);
                }}
                className="text-surface-variant opacity-80 hover:text-metallic-gold-light underline transition-all text-left"
              >
                Privacy Policy & Terms
              </button>
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

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </footer>
  );
}
