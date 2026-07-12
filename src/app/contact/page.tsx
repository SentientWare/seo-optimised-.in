"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    message: "",
    agreeToPrivacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { placeholder, value, type, checked } = target;
    let fieldKey = "";

    if (placeholder === "John") fieldKey = "firstName";
    else if (placeholder === "Doe") fieldKey = "lastName";
    else if (placeholder === "john@company.com") fieldKey = "email";
    else if (placeholder === "Enterprise Inc.") fieldKey = "company";
    else if (placeholder === "Chief Innovation Officer") fieldKey = "jobTitle";
    else if (placeholder === "+1 (555) 000-0000") fieldKey = "phone";
    else if (
      placeholder === "Tell us about your project requirements or specific challenges..."
    )
      fieldKey = "message";

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, agreeToPrivacy: checked }));
    } else if (fieldKey) {
      setFormData((prev) => ({ ...prev, [fieldKey]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.agreeToPrivacy) {
      alert("Please fill out all required fields and accept the privacy agreement.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50"
            alt="Contact Sentientware"
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue-dark via-enterprise-blue-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-2xl text-left">
            <div className="flex">
              <span className="inline-block px-4 py-1.5 bg-secondary-container/90 text-on-secondary-container text-xs font-bold tracking-[0.2em] uppercase rounded shadow-sm backdrop-blur-sm">
                Let&apos;s Connect
              </span>
            </div>
            <h1 className="font-display-xl text-4xl md:text-5xl text-white leading-tight font-bold">
              Let&apos;s <span className="text-metallic-gold-light">Re(AI)magine</span> <br />
              the Future Together
            </h1>
            <p className="font-body-lg text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              From engineering breakthroughs to strategic AI implementation, our global team is ready to accelerate your enterprise&apos;s digital evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Lead Capture Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl border border-surface-grey shadow-sm">
            <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary mb-8">
              Send us a message
            </h2>
            {submitSuccess ? (
              <div className="text-center py-16 space-y-6">
                <span className="material-symbols-outlined text-6xl text-metallic-gold-light animate-bounce">
                  mail_lock
                </span>
                <h3 className="font-headline-md text-primary text-2xl">Message Dispatched!</h3>
                <p className="text-body-md text-text-muted max-w-md mx-auto">
                  Thank you, {formData.firstName}. Your inquiry has been successfully routed to our Solutions Architecture desk. A regional team member will correspond with you at {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      company: "",
                      jobTitle: "",
                      phone: "",
                      message: "",
                      agreeToPrivacy: false,
                    });
                  }}
                  className="px-8 py-3 bg-enterprise-blue-dark text-white rounded font-label-bold text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-primary text-sm">First Name*</label>
                    <input
                      required
                      className="p-3 border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white"
                      placeholder="John"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-primary text-sm">Last Name*</label>
                    <input
                      required
                      className="p-3 border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white"
                      placeholder="Doe"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-primary text-sm">Work Email*</label>
                    <input
                      required
                      className="p-3 border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white"
                      placeholder="john@company.com"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-primary text-sm">Company*</label>
                    <input
                      required
                      className="p-3 border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white"
                      placeholder="Enterprise Inc."
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-primary text-sm">Job Title*</label>
                    <input
                      required
                      className="p-3 border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white"
                      placeholder="Chief Innovation Officer"
                      type="text"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-primary text-sm">Phone Number (Optional)</label>
                    <input
                      className="p-3 border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-primary text-sm">How can we help?*</label>
                  <textarea
                    required
                    className="p-3 border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white"
                    placeholder="Tell us about your project requirements or specific challenges..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="flex items-start gap-3 py-2">
                  <input
                    required
                    className="mt-1 rounded border-outline-variant text-primary focus:ring-primary h-4 w-4"
                    id="privacy"
                    type="checkbox"
                    checked={formData.agreeToPrivacy}
                    onChange={handleInputChange}
                  />
                  <label className="font-caption text-caption text-on-surface-variant text-xs" htmlFor="privacy">
                    I agree to the use or processing of my personal information by Sentientware Tech Solution for the purpose of fulfilling this request and in accordance with the{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Displaying Privacy Notice details...");
                      }}
                      className="text-primary underline font-semibold"
                    >
                      privacy notice
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary hover:bg-enterprise-blue-dark text-on-primary px-12 py-4 rounded-lg font-label-bold transition-all transform active:scale-95 shadow-md text-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Sidebar / Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* High-Touch Card */}
            <div className="bg-primary-container p-8 md:p-10 rounded-xl text-on-primary text-white relative overflow-hidden group shadow-lg">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                <span className="material-symbols-outlined text-[160px]">support_agent</span>
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md mb-4 text-metallic-gold-light">
                Urgent Inquiry?
              </h3>
              <p className="font-body-md text-sm mb-6 opacity-80 leading-relaxed">
                Our executive response desk is available for enterprise escalations and critical system inquiries.
              </p>
              <div className="space-y-4 text-sm font-semibold">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-metallic-gold-light">call</span>
                  <span>+91 6371763610</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-metallic-gold-light">mail</span>
                  <span>info@sentientware.in</span>
                </div>
              </div>
            </div>

            {/* Global Presence Locations */}
            <div className="bg-white p-8 rounded-xl border border-surface-grey shadow-sm">
              <h3 className="font-headline-md text-headline-md text-primary mb-6">Global Presence</h3>
              <div className="space-y-6">
                <div className="pb-6 border-b border-surface-grey">
                  <h4 className="font-label-bold text-primary mb-1 text-sm font-bold">
                    North America Headquarters
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    1200 Innovation Drive, Suite 500
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
                <div className="pb-6 border-b border-surface-grey">
                  <h4 className="font-label-bold text-primary mb-1 text-sm font-bold">
                    EMEA Center of Excellence
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Tech Plaza, Building 4
                    <br />
                    Zurich, Switzerland 8001
                  </p>
                </div>
                <div>
                  <h4 className="font-label-bold text-primary mb-1 text-sm font-bold">APAC Hub</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Level 42, International Finance Centre
                    <br />
                    Singapore 018981
                  </p>
                </div>
              </div>
              <Link
                className="mt-6 inline-flex items-center gap-2 font-label-bold text-primary hover:text-secondary transition-colors text-sm"
                href="/about-us"
              >
                View All Offices <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Channels Section */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">
              Specific Inquiries
            </h2>
            <p className="font-body-md text-on-surface-variant text-sm md:text-base">
              Reach the right department directly for faster coordination.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Careers */}
            <div className="bg-white p-8 rounded-xl border border-surface-grey bento-card flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-surface text-primary rounded-lg flex items-center justify-center mb-6 shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">work</span>
                </div>
                <h3 className="font-headline-md text-lg md:text-headline-md text-primary mb-3 font-semibold">
                  Careers
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Explore global opportunities and join our team of engineering experts.
                </p>
              </div>
              <a href="https://career.sentientware.in/" target="_blank" rel="noopener noreferrer" className="text-primary font-label-bold hover:text-secondary text-sm">
                Visit Careers Portal →
              </a>
            </div>

            {/* Media */}
            <div className="bg-white p-8 rounded-xl border border-surface-grey bento-card flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-surface text-primary rounded-lg flex items-center justify-center mb-6 shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">news</span>
                </div>
                <h3 className="font-headline-md text-lg md:text-headline-md text-primary mb-3 font-semibold">
                  Media & Press
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
                  For journalist inquiries, brand assets, and official press releases.
                </p>
              </div>
              <button
                onClick={() => alert("Downloading Media Kit...")}
                className="text-primary font-label-bold hover:text-secondary text-sm text-left"
              >
                Media Kit →
              </button>
            </div>

            {/* Investors */}
            <div className="bg-white p-8 rounded-xl border border-surface-grey bento-card flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-surface text-primary rounded-lg flex items-center justify-center mb-6 shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">trending_up</span>
                </div>
                <h3 className="font-headline-md text-lg md:text-headline-md text-primary mb-3 font-semibold">
                  Investors
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Access quarterly earnings reports, SEC filings, and governance data.
                </p>
              </div>
              <button
                onClick={() => alert("Redirecting to Investor Relations...")}
                className="text-primary font-label-bold hover:text-secondary text-sm text-left"
              >
                Investor Relations →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCa0W9mKGvy6urDJrrgKXlYV0twhKgFBF6rFi4TX5KIlwmQDJVxMeJVVbMbyhNj-CtZzY4LJmEA6odxTYvI7eEh9ld4-5kxlrNqgvXK9mie4RLBZGrK4Mich02wKzuHBBVmYD43VMQUXQfOsE97mLcTEPVzZyhkfyyE-2XBpj7kW5kRzy5G2_DzbT9or_VqrjO6T6yzmfIsEZeTebNbZPwvN9BoGXuT2ccM7dzLPP0v6ik1xJPWeEGs2jMxsCqwEI0bMjiY4lHoPFBe')",
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>

      </section>
    </>
  );
}
