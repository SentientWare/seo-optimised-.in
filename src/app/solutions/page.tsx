"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SolutionsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    solution: "GenAI Hub",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { placeholder, value } = target;
    let fieldKey = "";
    if (placeholder === "FULL NAME") fieldKey = "fullName";
    else if (placeholder === "WORK EMAIL") fieldKey = "email";
    else if (target.tagName === "SELECT") fieldKey = "solution";

    if (fieldKey) {
      setFormData((prev) => ({ ...prev, [fieldKey]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please fill out the required fields (Full Name and Work Email).");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover blur-[2px] scale-[1.02]"
            alt="AI Solutions Visualization"
            src="/assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg"
          />
          <div className="absolute inset-0 bg-enterprise-blue-dark/40"></div>
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#F5A623]"></div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-wide uppercase">
                Enterprise Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white leading-tight font-bold tracking-tight lg:whitespace-nowrap">
              Empowering Your Business With <br />
              <span className="text-[#F5A623]">Advanced Engineering Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mt-6">
              Accelerate your transition to an autonomous enterprise. SentientWare provides industrial-grade AI platforms and highly tailored automation solutions engineered specifically for the demands of the modern global landscape.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                href="#platforms"
                className="bg-metallic-gold-light text-enterprise-blue-dark text-sm px-8 py-3.5 rounded font-bold transition-all hover:bg-white hover:scale-105"
              >
                Explore Frameworks
              </a>
              <Link
                href="/case-studies"
                className="bg-white/5 backdrop-blur-sm border border-outline-variant text-white text-sm px-8 py-3.5 rounded font-bold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
              >
                View Case Studies
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms Section (Bento Grid) */}
      <section id="platforms" className="py-24 px-6 md:px-margin-desktop max-w-container-max-width mx-auto scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">Core AI Platforms</h2>
          <div className="w-24 h-1 bg-metallic-gold-light"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Featured Platform */}
          <div className="md:col-span-8 bento-card bg-white border border-surface-grey p-10 relative overflow-hidden group rounded shadow-sm">
            <div className="absolute top-0 left-0 accent-line bg-metallic-gold-light"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
                hub
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">GenAI Hub</h3>
              <p className="font-body-md text-on-surface-variant max-w-md mb-8 text-sm">
                A centralized governance and orchestration layer for Large Language Models. Deploy, monitor, and scale generative AI applications with enterprise-grade security and compliance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Multi-LLM Interoperability
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Prompt Engineering Workspace
                </li>
              </ul>
              <button
                onClick={() => alert("Redirecting to GenAI Hub Demo request...")}
                className="inline-flex items-center gap-2 font-label-bold text-primary group-hover:text-secondary transition-colors text-sm"
              >
                Request Demo <span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">analytics</span>
            </div>
          </div>

          {/* SASVA Equivalent */}
          <div className="md:col-span-4 bento-card bg-enterprise-blue-dark p-10 text-on-primary border border-white/5 relative overflow-hidden group rounded shadow-lg">
            <div className="absolute top-0 left-0 accent-line bg-secondary-fixed"></div>
            <span className="material-symbols-outlined text-4xl text-metallic-gold-light mb-6 block">
              terminal
            </span>
            <h3 className="font-headline-md text-headline-md mb-4 text-glow">SASVA™ Assistant</h3>
            <p className="font-caption text-surface-variant mb-8 text-sm leading-relaxed">
              The AI-driven Engineering Co-pilot that automates 60% of the SDLC, from requirement gathering to testing.
            </p>
            <div className="mt-auto">
              <button
                onClick={() => alert("Loading SASVA™ documentation...")}
                className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-sm font-label-bold transition-all"
              >
                View Documentation
              </button>
            </div>
          </div>

          {/* Automation Platform */}
          <div className="md:col-span-12 bento-card bg-white border border-surface-grey p-10 grid grid-cols-1 md:grid-cols-3 gap-8 rounded shadow-sm">
            <div className="md:col-span-1 md:border-r border-surface-grey md:pr-8">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
                robot_2
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Intelligent Automation</h3>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
                Bridging the gap between RPA and cognitive AI to automate complex end-to-end business processes. Our platform provides the &quot;eyes&quot; and &quot;brain&quot; to your existing automation stack.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-surface rounded text-center shadow-sm">
                  <div className="text-secondary font-bold text-lg">45%</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted font-semibold">Cost Savings</div>
                </div>
                <div className="p-3 bg-surface rounded text-center shadow-sm">
                  <div className="text-secondary font-bold text-lg">3x</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted font-semibold">Throughput</div>
                </div>
                <div className="p-3 bg-surface rounded text-center shadow-sm">
                  <div className="text-secondary font-bold text-lg">99.9%</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted font-semibold">Accuracy</div>
                </div>
                <div className="p-3 bg-surface rounded text-center shadow-sm">
                  <div className="text-secondary font-bold text-lg">24/7</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted font-semibold">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions (Glass Cards) */}
      <section className="bg-surface py-24 px-6 md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">
              Domain Specialized Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-on-surface-variant font-body-md text-sm md:text-base">
              Engineering value at the intersection of industry expertise and next-gen technology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Banking */}
            <div className="group relative bg-white border border-surface-grey overflow-hidden rounded-xl h-[400px] shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3tLLtgSEn1i8xT8kGFg_xneaFYqC333t0dMVsZ0zNLS6A8pPWCB1FmeT1qIghXiu7l0IvwuEJpJc0SWabA2HcjyOPMkgVNE6scOu2bY_MzEKpwsHk4A_pDiMUn0qvFTiOnd0cMrtvH1Cc6chwoX9rRbrS1vE_m28n3c8DXSFBRwDnlitUCk5MFd7_b7NCbJj-kWitdvXB7fThTldmMJpEofuU2YPe4wbHOIVQ_7nhiJDuuWCZ0l5W9Rg3CpUotkwXzdhkr5YYpRHo')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-enterprise-blue-dark/60 to-transparent"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-on-primary">
                <span className="material-symbols-outlined text-secondary-fixed mb-4 block">
                  account_balance
                </span>
                <h4 className="font-headline-md text-headline-md mb-2">Banking & Finance</h4>
                <p className="font-caption text-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  AI-driven fraud detection, algorithmic trading, and personalized wealth management platforms.
                </p>
              </div>
            </div>

            {/* Healthcare */}
            <div className="group relative bg-white border border-surface-grey overflow-hidden rounded-xl h-[400px] shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoJAQFVIYOPUGGh7CVBi8nU3lIZQluf4tDO091FYkWsNXKK_Ep78Nr_QHsDNDYbbKI90RHrdZkTUt-WzsVTUijFCX9zmauShakAkyspkSgAUODvjeE00mpBU6P_VEqEh0YD4iv64YFVhf32lobiM1uCz1PSOIb_C926_rgJUimUjz7LTFG1t5CJZu2QaO2eTjKboQX2AAmvKRKUYOumpA-XL4HbPctPKFJsbB8CDkcKZg_3H_fKNM7o973sMY7MPido8B_zDhcZlpE')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-enterprise-blue-dark/60 to-transparent"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-on-primary">
                <span className="material-symbols-outlined text-secondary-fixed mb-4 block">
                  health_and_safety
                </span>
                <h4 className="font-headline-md text-headline-md mb-2">Healthcare</h4>
                <p className="font-caption text-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Precision diagnostics, patient care optimization, and HIPAA-compliant data lakes.
                </p>
              </div>
            </div>

            {/* Life Sciences */}
            <div className="group relative bg-white border border-surface-grey overflow-hidden rounded-xl h-[400px] shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFdX7PbL_sVraGl0tkC1xsjXm7QIPA6la7DzTo6d_8zT686b3eoITb3vBCH2bGf8jzK4CxPVNa_RoIFYFGV8wOy_VB0fq2i_-wxEiUW4pBWmy5_5JODZBWSsomkPzrCB635sDAPVALCt38mR7X_r531HXQVRdvtOYYsMUUZz11_UL72YDW3fGxBFIWpJO1jDEmgevZCY3KPg94jN-AdJl3doC6oHIT8U0ZRCb0hcP6uU0Hpj7XWKRcwlpW-CdjspVax6Mo1mgpty4g')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-enterprise-blue-dark/60 to-transparent"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-on-primary">
                <span className="material-symbols-outlined text-secondary-fixed mb-4 block">
                  science
                </span>
                <h4 className="font-headline-md text-headline-md mb-2">Life Sciences</h4>
                <p className="font-caption text-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Accelerating drug discovery and clinical trials through predictive analytics and AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 border-y border-surface-grey bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center">
          <p className="font-label-bold text-muted uppercase tracking-widest mb-10 text-xs">
            Strategic Platform Ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="font-bold text-xl md:text-2xl text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">cloud</span> AWS
            </span>
            <span className="font-bold text-xl md:text-2xl text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">google</span> Google Cloud
            </span>
            <span className="font-bold text-xl md:text-2xl text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">hub</span> Salesforce
            </span>
            <span className="font-bold text-xl md:text-2xl text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">terminal</span> Microsoft
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-margin-desktop bg-enterprise-blue-dark relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-[-20deg]"></div>
        <div className="max-w-container-max-width mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary mb-6">
              Ready to Re(AI)magine your enterprise?
            </h2>
            <p className="font-body-lg text-primary-fixed mb-10 text-sm md:text-base">
              Join 2,000+ global enterprises building the future on our platforms.
            </p>
            <div className="flex gap-6">
              <a
                href="#inquiry-form"
                className="px-8 py-4 bg-white text-enterprise-blue-dark font-bold rounded hover:bg-secondary-fixed transition-all text-center text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div id="inquiry-form" className="bg-white/5 p-8 md:p-12 border border-white/10 rounded-2xl glass-effect scroll-mt-20">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="material-symbols-outlined text-6xl text-metallic-gold-light animate-bounce">
                  check_circle
                </span>
                <h3 className="font-headline-md text-white">Inquiry Submitted!</h3>
                <p className="text-body-md text-surface-variant text-sm">
                  Thank you, {formData.fullName}. Our systems solutions team will follow up on your interest in {formData.solution} shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ fullName: "", email: "", solution: "GenAI Hub" });
                  }}
                  className="mt-6 px-6 py-2 bg-metallic-gold-light text-enterprise-blue-dark font-bold rounded text-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary-fixed text-xs mb-2">FULL NAME</label>
                    <input
                      required
                      className="w-full bg-transparent border border-white/20 rounded py-3 px-4 text-white focus:border-secondary transition-colors outline-none text-sm"
                      placeholder="FULL NAME"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-primary-fixed text-xs mb-2">WORK EMAIL</label>
                    <input
                      required
                      className="w-full bg-transparent border border-white/20 rounded py-3 px-4 text-white focus:border-secondary transition-colors outline-none text-sm"
                      placeholder="WORK EMAIL"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-primary-fixed text-xs mb-2">SOLUTION OF INTEREST</label>
                  <div className="relative">
                    <select
                      className="w-full bg-transparent border border-white/20 rounded py-3 px-4 text-white focus:border-secondary transition-colors outline-none text-sm appearance-none"
                      value={formData.solution}
                      onChange={handleInputChange}
                    >
                      <option className="text-black">GenAI Hub</option>
                      <option className="text-black">Intelligent Automation</option>
                      <option className="text-black">Industry Specialized Solutions</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-metallic-gold-light text-enterprise-blue-dark font-bold rounded hover:bg-white transition-all text-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
