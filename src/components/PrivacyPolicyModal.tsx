"use client";

import React, { useEffect } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy & Terms</h2>
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
          
          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">01</span>
              Introduction
            </h3>
            <p className="leading-relaxed">
              Welcome to SentientWare Tech Solution Pvt. Ltd. We are committed to protecting your personal and business information while maintaining a transparent and trustworthy business relationship.
            </p>
            <p className="leading-relaxed mt-2">
              This Privacy Policy outlines the terms under which we collect, use, store, and disclose data, as well as legal terms including Non-Disclosure, client conduct, and our refund policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">02</span>
              Information We Collect
            </h3>
            <p className="mb-2">We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal details (name, email, phone)</li>
              <li>Business information (company name, requirements, scope)</li>
              <li>Technical data (IP address, browser type, etc.)</li>
              <li>Communication records (email, support chat, call logs)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">03</span>
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Deliver services as per agreements or contracts</li>
              <li>Provide customer support and updates</li>
              <li>Analyze system performance and improve our services</li>
              <li>Send important notices, including updates or legal changes</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">04</span>
              Confidentiality & Non-Disclosure (NDA)
            </h3>
            <p className="leading-relaxed mb-2">
              We understand the critical importance of confidentiality in business relationships. All communications, project data, deliverables, source code, documentation, and business insights shared with us are treated as strictly confidential.
            </p>
            <p className="mb-2">We commit that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>We will never share or resell client data.</li>
              <li>Employees and subcontractors are bound by internal NDAs.</li>
              <li>All access to confidential project data is on a strict need-to-know basis.</li>
              <li>Upon request, we can sign formal NDAs with clients before project initiation.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">05</span>
              Client Behavior Policy
            </h3>
            <p className="mb-2">To ensure a professional working environment, we expect clients to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Communicate respectfully and professionally</li>
              <li>Provide accurate and complete information</li>
              <li>Avoid spamming, harassment, or threats</li>
              <li>Adhere to timelines mutually agreed upon</li>
            </ul>
            <p className="mb-2">We reserve the right to terminate engagement if:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clients become abusive, unresponsive, or manipulative</li>
              <li>There is a breach of trust or misrepresentation of data</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">06</span>
              No Refund Policy
            </h3>
            <p className="leading-relaxed">
              Due to the custom nature of our services (including but not limited to software development, consultation, and design), we do not offer refunds once work has commenced or deliverables have been partially or fully provided.
            </p>
            <p className="leading-relaxed mt-2">
              Exceptions may only be granted in writing under extraordinary cases agreed by both parties.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">07</span>
              Third-Party Services
            </h3>
            <p className="leading-relaxed">
              We may use trusted third-party tools (e.g., Firebase, AWS, Google Analytics) as part of our service delivery. These platforms have their own privacy policies and data handling practices.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">08</span>
              Cookies & Analytics
            </h3>
            <p className="leading-relaxed">
              Our website uses cookies to collect non-personally identifiable information for analytical and performance purposes. By continuing to use our website, you consent to our use of cookies.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">09</span>
              Data Retention & Deletion
            </h3>
            <p className="leading-relaxed">
              We retain user data only for as long as required for the purposes described above or as required by law. Clients may request data deletion by emailing us.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">10</span>
              Intellectual Property
            </h3>
            <p className="mb-2">Unless otherwise agreed in writing:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>All code, designs, and digital assets produced by us remain our intellectual property until the project is fully paid.</li>
              <li>Licensing or handover will occur after full payment and mutual agreement.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">11</span>
              Legal Jurisdiction
            </h3>
            <p className="leading-relaxed">
              This agreement is governed by the laws of the Republic of India. Any disputes shall be resolved in the jurisdiction of Brahmapur, Odisha.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">12</span>
              Changes to This Policy
            </h3>
            <p className="leading-relaxed">
              We may update this policy from time to time. We encourage you to review it periodically. Updates will be reflected on this page with the new effective date.
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
            <h3 className="text-lg font-bold text-enterprise-blue-dark dark:text-metallic-gold-light mb-3 flex items-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">13</span>
              Contact Us
            </h3>
            <p className="leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy or any other legal concern:
            </p>
            <address className="not-italic text-sm font-medium leading-loose">
              <strong>SentientWare Tech Solution Pvt. Ltd.</strong><br/>
              Lakshmi Narayan Panda, Uma Nagar 3rd Lane, Lanjipalli,<br/>
              Ganjam, Brahmapur Sadar, Odisha, 760008<br/>
              <a href="mailto:info@sentientware.in" className="text-blue-600 hover:underline">info@sentientware.in</a><br/>
              <a href="tel:+916371763610" className="text-blue-600 hover:underline">+91 6371763610</a>
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
