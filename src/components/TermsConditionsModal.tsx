"use client";

import React, { useEffect } from "react";

interface TermsConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsConditionsModal({ isOpen, onClose }: TermsConditionsModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-enterprise-blue-dark rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Terms and Conditions</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-gray-700 dark:text-gray-300 space-y-8 custom-scrollbar">
          
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Effective Date: March 30, 2026
          </p>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">01</span>
              Agreement to Terms
            </h3>
            <p className="leading-relaxed">
              By accessing or using the Sentientware website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">02</span>
              Use of Services
            </h3>
            <p className="leading-relaxed">
              You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for ensuring that all persons who access the services through your internet connection are aware of these terms and comply with them.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">03</span>
              Payments and Billing
            </h3>
            <p className="leading-relaxed">
              All payments for our services are processed through secure third-party payment gateways (e.g., Razorpay). By providing your payment information, you authorize us and our payment processors to charge the applicable fees to your designated payment method.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">04</span>
              Intellectual Property Rights
            </h3>
            <p className="leading-relaxed">
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Sentientware Pvt Ltd and are protected by international copyright, trademark, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">05</span>
              Limitation of Liability
            </h3>
            <p className="leading-relaxed">
              In no event will Sentientware Pvt Ltd, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website or any services accessed through it.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">06</span>
              Modifications to Terms
            </h3>
            <p className="leading-relaxed">
              We reserve the right to revise and update these Terms and Conditions from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms and Conditions means that you accept and agree to the changes.
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">07</span>
              Contact Information
            </h3>
            <p className="leading-relaxed mb-4">
              For any questions or concerns regarding these terms, please contact us at:
            </p>
            <address className="not-italic text-sm font-medium leading-loose">
              <strong>Email:</strong> <a href="mailto:info@sentientware.in" className="text-blue-600 hover:underline">info@sentientware.in</a><br/>
              <strong>Mobile:</strong> <a href="tel:+916371763610" className="text-blue-600 hover:underline">+91 63717 63610</a>
            </address>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-enterprise-blue-dark/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-enterprise-blue-dark text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
