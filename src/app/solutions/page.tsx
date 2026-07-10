"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SolutionsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    solution: "Enterprise Intelligence Platform",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
        <div className="absolute inset-0 z-0 bg-[#001A35]">
          <Image
            src="/assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg"
            alt="AI Solutions Visualization"
            fill
            priority
            className="object-cover blur-[2px] scale-[1.02]"
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
          <p className="max-w-3xl text-on-surface-variant font-body-md text-base leading-relaxed mb-6">
            Our foundational technologies are designed to scale with your ambition. We build secure, interoperable, and intelligent systems that serve as the backbone of your modern enterprise architecture.
          </p>
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
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Enterprise Intelligence Platform</h3>
              <p className="font-body-md text-on-surface-variant max-w-md mb-8 text-sm">
                A unified AI-powered platform that enables organizations to automate workflows, streamline learning, optimize operations, and unlock actionable insights through enterprise-grade intelligence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Intelligent Automation
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Unified Business Platform
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  Enterprise-Grade Security
                </li>
              </ul>

            </div>
            <div className="absolute right-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">analytics</span>
            </div>
          </div>

          {/* Sentient AI */}
          <div className="md:col-span-4 bento-card bg-enterprise-blue-dark p-10 text-on-primary border border-white/5 relative overflow-hidden group rounded shadow-lg flex flex-col justify-between">
            <div className="absolute top-0 left-0 accent-line bg-secondary-fixed"></div>
            
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-metallic-gold-light mb-6 block drop-shadow-md">
                terminal
              </span>
              <h3 className="font-headline-md text-headline-md mb-4 text-glow">Sentient AI</h3>
              <p className="font-caption text-surface-variant mb-8 text-sm leading-relaxed">
                The intelligent enterprise assistant that helps teams automate workflows, accelerate development, generate insights, and build smarter solutions.
              </p>
            </div>

            <div className="space-y-4 relative z-10 mt-auto">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <span className="material-symbols-outlined text-secondary-fixed text-xl">auto_awesome</span>
                <span className="text-sm font-medium text-white/90">Workflow Automation</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <span className="material-symbols-outlined text-secondary-fixed text-xl">speed</span>
                <span className="text-sm font-medium text-white/90">Accelerated Development</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <span className="material-symbols-outlined text-secondary-fixed text-xl">query_stats</span>
                <span className="text-sm font-medium text-white/90">Data-Driven Insights</span>
              </div>
            </div>

            <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none scale-150 rotate-12">
              <span className="material-symbols-outlined text-[200px]">smart_toy</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <div className="text-left">
              <h2 className="font-headline-lg text-4xl md:text-5xl text-primary mb-6 leading-tight">
                Domain Specialized Solutions
              </h2>
              <p className="text-on-surface-variant font-body-lg text-lg">
                Engineering value at the intersection of industry expertise and next-gen technology.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-xl border border-surface-grey shadow-sm relative text-left h-full flex items-center">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-metallic-gold-light text-enterprise-blue-dark px-6 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm whitespace-nowrap">
                Engineered for Success
              </div>
              <p className="text-on-surface-variant font-body-md leading-relaxed text-base pt-2">
                From legacy modernization to greenfield AI implementations, we deliver measurable business outcomes tailored to your sector&apos;s unique constraints and opportunities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {[
              {
                title: "AI & Intelligent Automation",
                desc: "Automate repetitive business processes, workflows, approvals, and complex decision-making. Our machine learning solutions continuously learn from data patterns to optimize performance and ensure precision, freeing your human capital for strategic initiatives.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%208.39.30%20PM.jpeg"
              },
              {
                title: "Recruitment & Talent Intelligence",
                desc: "Transform your hiring pipeline with AI-powered resume screening, candidate assessments, and seamless onboarding. We leverage predictive models to match the right talent to roles while minimizing unconscious bias, fostering a dynamic, future-ready culture.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%209.11.21%20PM.jpeg"
              },
              {
                title: "Learning & Workforce Development",
                desc: "Empower teams through personalized employee training, continuous certifications, and skill development platforms. Our intelligent systems track performance to identify knowledge gaps and recommend custom pathways, building a resilient, agile workforce.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%208.43.46%20PM.jpeg"
              },
              {
                title: "Business Intelligence & Analytics",
                desc: "Harness the power of your data through real-time dashboards, custom KPI tracking, and robust predictive analytics. We turn complex datasets into clear, actionable insights that drive confident decision-making and help anticipate market trends.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%208.49.30%20PM.jpeg"
              },
              {
                title: "Enterprise Process Management",
                desc: "Streamline mission-critical departments like HR, Finance, and Operations into a singular, cohesive ecosystem. Our process management frameworks eliminate bottlenecks, enforce compliance, and provide unparalleled visibility into internal workflows.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%208.50.24%20PM.jpeg"
              },
              {
                title: "Cloud & Infrastructure Solutions",
                desc: "Accelerate your digital transition with comprehensive cloud migration, scalable infrastructure architectures, and robust DevOps practices. Our managed cloud solutions guarantee maximum uptime, uncompromising security, and cost-efficient scalability.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%208.58.04%20PM.jpeg"
              },
              {
                title: "IoT & Smart Connected Systems",
                desc: "Bridge the physical and digital worlds using smart devices, real-time asset monitoring, and industrial IoT networks. Unlock predictive maintenance capabilities that anticipate equipment failures before they happen, slashing downtime.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%209.00.31%20PM.jpeg"
              },
              {
                title: "Technology Consulting & Transformation",
                desc: "Navigate the complexities of modernization with expert enterprise consulting and strategic digital transformation roadmaps. We guide your seamless adoption of AI while aligning cutting-edge tech investments directly with your core business objectives.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%208.42.11%20PM.jpeg"
              },
              {
                title: "Custom Enterprise Platforms",
                desc: "Architect bespoke software ecosystems, from robust ERPs and CRMs to specialized customer portals and compliant applications. We prioritize user-centric design and seamless API integrations to provide the foundational software your enterprise needs to scale.",
                image: "/assets/WhatsApp%20Image%202026-07-10%20at%209.17.27%20PM.jpeg"
              }
            ].map((sol, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md shadow-sm">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="pt-6">
                  <h3 className="font-headline-md text-[1.35rem] leading-tight text-primary mb-3">
                    {sol.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 border-y border-surface-grey bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center">
          <p className="font-label-bold text-muted uppercase tracking-widest mb-12 text-xs font-semibold">
            Strategic Platform Ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[
              { name: "AWS", color: "hover:border-[#FF9900] hover:text-[#FF9900]", icon: "cloud" },
              { name: "Google Cloud", color: "hover:border-[#4285F4] hover:text-[#4285F4]", icon: "cloud_done" },
              { name: "Salesforce", color: "hover:border-[#00A1E0] hover:text-[#00A1E0]", icon: "hub" },
              { name: "Microsoft", color: "hover:border-[#00A4EF] hover:text-[#00A4EF]", icon: "grid_view" },
            ].map((platform, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-3 px-8 py-4 rounded-full border border-surface-grey bg-white text-on-surface-variant font-bold text-lg md:text-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${platform.color}`}
              >
                <span className="material-symbols-outlined">{platform.icon}</span>
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-margin-desktop bg-enterprise-blue-dark relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-[-20deg]"></div>
        <div className="max-w-container-max-width mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-lg text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-on-primary mb-6">
              Ready to Re(AI)magine your enterprise?
            </h2>
            <p className="font-body-lg text-lg md:text-xl font-medium text-white/80 mb-10 leading-relaxed">
              Join 2,000+ global enterprises building the future on our platforms. Partner with us to scale intelligently.
            </p>
            <div className="flex gap-6">
              <a
                href="#inquiry-form"
                className="px-8 py-4 bg-white text-enterprise-blue-dark font-bold rounded-none hover:bg-secondary-fixed transition-all text-center text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div id="inquiry-form" className="bg-white/10 p-8 md:p-12 border border-white/20 rounded-none backdrop-blur-md shadow-2xl scroll-mt-20">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="material-symbols-outlined text-6xl text-metallic-gold-light animate-bounce">
                  check_circle
                </span>
                <h3 className="font-headline-md text-2xl font-bold text-white">Inquiry Submitted!</h3>
                <p className="text-body-md text-white/80 text-base">
                  Thank you, {formData.fullName}. Our systems solutions team will follow up on your interest in {formData.solution} shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ fullName: "", email: "", solution: "Enterprise Intelligence Platform" });
                  }}
                  className="mt-8 px-8 py-3 bg-metallic-gold-light text-enterprise-blue-dark font-bold rounded-none text-sm hover:bg-white transition-all shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-xs font-bold tracking-widest uppercase mb-2">Full Name</label>
                    <input
                      required
                      name="fullName"
                      className="w-full bg-white/5 border border-white/20 rounded-none py-4 px-5 text-white placeholder-white/30 focus:border-metallic-gold-light focus:bg-white/10 transition-all outline-none text-base"
                      placeholder="Jane Doe"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-bold tracking-widest uppercase mb-2">Work Email</label>
                    <input
                      required
                      name="email"
                      className="w-full bg-white/5 border border-white/20 rounded-none py-4 px-5 text-white placeholder-white/30 focus:border-metallic-gold-light focus:bg-white/10 transition-all outline-none text-base"
                      placeholder="jane@company.com"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-bold tracking-widest uppercase mb-2">Solution of Interest</label>
                  <div className="relative">
                    <select
                      name="solution"
                      className="w-full bg-white/5 border border-white/20 rounded-none py-4 px-5 text-white focus:border-metallic-gold-light focus:bg-white/10 transition-all outline-none text-base appearance-none cursor-pointer"
                      value={formData.solution}
                      onChange={handleInputChange}
                    >
                      <option className="text-black" value="Enterprise Intelligence Platform">Enterprise Intelligence Platform</option>
                      <option className="text-black" value="Intelligent Automation">Intelligent Automation</option>
                      <option className="text-black" value="Industry Specialized Solutions">Industry Specialized Solutions</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/70">
                      <span className="material-symbols-outlined text-xl">arrow_drop_down</span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-metallic-gold-light text-enterprise-blue-dark font-extrabold rounded-none hover:bg-white transition-all text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
