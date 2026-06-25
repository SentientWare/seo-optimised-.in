"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  const services = [
    {
      title: "Sentientware.AI",
      icon: "neurology",
      desc: "Pioneering the next frontier of intelligence with bespoke Agentic AI and enterprise GenAI architectures.",
      bullets: [
        "Agentic AI Frameworks",
        "GenAI Hub Implementation",
        "Custom LLM Orchestration",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: "cloud_done",
      desc: "Resilient multi-cloud and hybrid foundations designed for maximum availability and global distribution.",
      bullets: [
        "Cloud Native Engineering",
        "Multi-cloud Management",
        "Legacy to Cloud Migration",
      ],
    },
    {
      title: "Data & Analytics",
      icon: "analytics",
      desc: "Turning raw data into strategic assets with advanced telemetry and predictive modeling systems.",
      bullets: [
        "Data Modernization Strategy",
        "Real-time Pipeline Engineering",
        "Governance & Data Ethics",
      ],
    },
    {
      title: "Consulting",
      icon: "lightbulb",
      desc: "Strategic roadmaps that bridge the gap between business objectives and technological reality.",
      bullets: [
        "Digital Maturity Assessments",
        "CX/UX Innovation Design",
        "Agile Transformation",
      ],
    },
    {
      title: "Software Product Engineering",
      icon: "settings_ethernet",
      desc: "End-to-end product development life cycles focused on scalability, security, and market velocity.",
      bullets: [
        "Full-stack Development",
        "Embedded Systems & IoT",
        "DevSecOps Integration",
      ],
    },
    {
      title: "Enterprise Security",
      icon: "shield_with_heart",
      desc: "Protecting your global ecosystem with Zero Trust architectures and real-time threat intelligence.",
      bullets: [
        "Zero Trust Architecture",
        "Identity & Access Management",
        "Threat Hunting & Response",
      ],
    },
  ];

  const industries = [
    { name: "FinTech", icon: "account_balance" },
    { name: "Healthcare", icon: "health_metrics" },
    { name: "Industrial", icon: "precision_manufacturing" },
    { name: "Telecom", icon: "cell_tower" },
    { name: "Retail", icon: "shopping_cart_checkout" },
    { name: "AeroSpace", icon: "rocket" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover blur-[2px] scale-[1.02]"
            alt="Services Engineering Excellence"
            src="/assets/campaign-creators-gMsnXqILjp4-unsplash.jpg"
          />
          <div className="absolute inset-0 bg-enterprise-blue-dark/40"></div>
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#F5A623]"></div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-wide uppercase">
                Engineering Excellence Globally
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white leading-tight font-bold tracking-tight lg:whitespace-nowrap">
              Accelerating the Lifecycle of <br />
              <span className="text-[#F5A623]">Digital Transformation</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mt-6">
              Empowering global enterprises through intelligent automation and robust digital architectures. SentientWare delivers end-to-end engineering excellence, from agentic AI deployments to secure multi-cloud modernizations.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                href="#pillars"
                className="bg-secondary-fixed text-on-secondary-fixed text-sm px-8 py-3.5 rounded font-label-bold transition-all hover:bg-metallic-gold-light hover:scale-105"
              >
                Explore Our Pillars
              </a>
              <button
                onClick={() => alert("Downloading Capabilities Document...")}
                className="bg-white/5 backdrop-blur-sm border border-outline-variant text-on-primary text-sm px-8 py-3.5 rounded font-label-bold hover:bg-white/10 transition-all hover:scale-105"
              >
                Download Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Introduction */}
      <section id="pillars" className="bg-surface py-32 px-6 md:px-margin-desktop scroll-mt-20">
        <div className="max-w-container-max-width mx-auto text-center mb-20">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">
            Core Transformation Pillars
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Comprehensive solutions tailored for complex global infrastructures. We specialize in high-performance engineering that drives sustainable growth.
          </p>
        </div>
        <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-surface-container-lowest border border-outline-variant p-10 rounded shadow-sm transition-all duration-300 service-card-glow"
            >
              <div className="w-16 h-16 mb-8 flex items-center justify-center bg-primary text-on-primary rounded-lg transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed text-sm font-body-md">
                {service.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-3 text-body-md text-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-primary font-label-bold group/link transition-all"
              >
                Learn More
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Featured Service */}
      <section className="bg-mesh-dark py-32 overflow-hidden relative text-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-secondary-fixed mb-6">
              The Sentientware.AI Edge
            </h2>
            <p className="text-body-lg font-body-lg text-primary-fixed mb-12">
              We don&apos;t just implement AI; we engineer autonomous agentic systems that live within your ecosystem, optimizing operations and predicting market shifts before they happen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 rounded-lg">
                <span className="text-4xl md:text-display-xl font-display-xl text-metallic-gold-light block mb-2">
                  40%
                </span>
                <p className="text-label-bold font-label-bold text-on-primary text-sm">
                  Operational Efficiency
                </p>
                <p className="text-caption font-caption text-surface-variant">
                  Average increase across recent deployments.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 rounded-lg">
                <span className="text-4xl md:text-display-xl font-display-xl text-metallic-gold-light block mb-2">
                  3.5x
                </span>
                <p className="text-label-bold font-label-bold text-on-primary text-sm">
                  ROI within 12 Months
                </p>
                <p className="text-caption font-caption text-surface-variant">
                  Typical client returns on agentic AI hubs.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary-fixed opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-enterprise-blue-dark border border-primary-container rounded-xl overflow-hidden shadow-2xl">
              <div
                className="w-full aspect-[4/3] bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWL0xjOi1T3Ipzl7eLK47j9tgXj3VkC7RA2yRE5a14Wq10xZsjxcI0laRe7CMI7kZ3K9REMT6qA0By_QLAtjKkNF29xtC8510L9eIgyYcPV9OVORsQVrrrVaMwgNEdMK2WOJDGvY-MMIYYmW_tIOEZYjBKRzAnWsz6rgPWH74SVNzmkt7arP1IOnXEbsBHeETw1ETh_GSmNwLM6yROUEEdMXD80rn01NxpDWmqndMIvp4Uv307RKcPLHLc2xllx3H2SUU_ChjPmk4Q')",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="w-20 h-20 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                  aria-label="Play video"
                >
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Industry Reach Banner */}
      <section className="bg-surface py-20 border-y border-outline-variant">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-2">
                Global Industry Reach
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Applied intelligence across specialized vertical markets.
              </p>
            </div>
            <Link
              href="/industries"
              className="text-primary font-label-bold border-b border-primary hover:text-secondary hover:border-secondary transition-all pb-1 text-sm"
            >
              View All Solutions
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="group bg-surface-container-low p-6 text-center rounded border border-transparent hover:border-metallic-gold-light hover:bg-white transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-primary mb-3 text-3xl">{ind.icon}</span>
                <p className="text-label-bold font-label-bold text-on-surface text-sm">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-enterprise-blue-dark/95 flex items-center justify-center p-6">
          <div className="relative w-full max-w-4xl bg-black aspect-video rounded overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-secondary z-10 bg-black/60 p-2 rounded-full"
              aria-label="Close video"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-12 text-white">
              <span className="material-symbols-outlined text-6xl text-metallic-gold-light mb-4 animate-pulse">
                smart_display
              </span>
              <h3 className="font-headline-md text-2xl mb-2">Capabilities Demo Video</h3>
              <p className="text-surface-variant max-w-md">
                This is a mock presentation video showing Sentientware.AI systems orchestrating legacy modernizations.
              </p>
              <button
                onClick={() => setVideoOpen(false)}
                className="mt-6 px-6 py-2 bg-secondary-fixed text-on-secondary-fixed rounded font-label-bold text-sm"
              >
                Dismiss Player
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
