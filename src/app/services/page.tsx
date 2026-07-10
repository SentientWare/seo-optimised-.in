"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ServicesScrollGallery from "@/components/ServicesScrollGallery";

export default function ServicesPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch((e) => console.log("Video play failed:", e));
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const services = [
    {
      title: "AI & Intelligent Automation",
      icon: "smart_toy",
      image: "/assets/_Как искусственный интеллект меняет систему здравоохранения в 2025 году_.jpg",
      desc: "Pioneering the next frontier of intelligence with bespoke Agentic AI and enterprise GenAI architectures.",
      bullets: [
        "Agentic AI Frameworks",
        "GenAI Hub Implementation",
        "Custom LLM Orchestration",
      ],
      isHero: true,
    },
    {
      title: "Enterprise Application Development",
      icon: "developer_mode",
      image: "/assets/Web Developer Tools.jpg",
      desc: "Building scalable, robust, and future-proof enterprise applications tailored to your business needs.",
      bullets: [
        "Custom Software Engineering",
        "Legacy Modernization",
        "Microservices Architecture",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: "cloud_done",
      image: "/assets/Cloud tech_.jpg",
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
      image: "/assets/Data analytics and visualization.jpg",
      desc: "Turning raw data into strategic assets with advanced telemetry and predictive modeling systems.",
      bullets: [
        "Data Modernization Strategy",
        "Real-time Pipeline Engineering",
        "Governance & Data Ethics",
      ],
    },
    {
      title: "Software Product Engineering",
      icon: "settings_ethernet",
      image: "/assets/download (6).jpg",
      desc: "End-to-end product development life cycles focused on scalability, security, and market velocity.",
      bullets: [
        "Full-stack Development",
        "Embedded Systems & IoT",
        "DevSecOps Integration",
      ],
    },
    {
      title: "DevOps & Platform Engineering",
      icon: "speed",
      image: "/assets/The Demand for DevOps Engineers in Canada Is Exploding — Here Is Why.jpg",
      desc: "Accelerating delivery pipelines with automated, secure, and reliable deployment processes.",
      bullets: [
        "CI/CD Automation",
        "Infrastructure as Code",
        "Site Reliability Engineering",
      ],
    },
    {
      title: "Enterprise Security",
      icon: "shield_with_heart",
      image: "/assets/Stay Ahead of Cyber Threats!.jpg",
      desc: "Protecting your global ecosystem with Zero Trust architectures and real-time threat intelligence.",
      bullets: [
        "Zero Trust Architecture",
        "Identity & Access Management",
        "Threat Hunting & Response",
      ],
    },
    {
      title: "Digital Transformation & Consulting",
      icon: "trending_up",
      image: "/assets/Which Digital Transformation Services is best in 2026.jpg",
      desc: "Strategic roadmaps that bridge the gap between business objectives and technological reality.",
      bullets: [
        "Digital Maturity Assessments",
        "Agile Transformation",
        "Change Management",
      ],
    },
    {
      title: "Digital Experience Engineering",
      icon: "language",
      image: "/assets/Want to reduce client churn and increase agency retention rates_.jpg",
      desc: "Crafting immersive, intuitive, and engaging digital experiences across all touchpoints.",
      bullets: [
        "CX/UX Innovation Design",
        "Omnichannel Experiences",
        "Interactive Portals",
      ],
    },
    {
      title: "Industry Solutions",
      icon: "factory",
      image: "/assets/Streamlining Manufacturing Processes with OEE Efficiency Tools.jpg",
      desc: "Domain-specific technology solutions tailored for complex and highly regulated industries.",
      bullets: [
        "FinTech & Banking",
        "Healthcare Tech",
        "Industrial IoT",
      ],
    },
    {
      title: "Data Engineering Solutions",
      icon: "database",
      image: "/assets/Claves de la privacidad y protección de datos.jpg",
      desc: "Architecting robust data pipelines and scalable lakes to harness the full potential of your enterprise data.",
      bullets: [
        "Data Lake Architecture",
        "ETL Pipeline Automation",
        "Big Data Processing",
      ],
    },
    {
      title: "Data Science",
      icon: "science",
      image: "/assets/DATA SCIENCE_ Data Science Deep Learning Artificial Intelligence Analysis Business Internet Technolog Stock Illustration _ Adobe Stock.jpg",
      desc: "Extracting actionable insights through advanced statistical modeling and predictive analytics.",
      bullets: [
        "Predictive Modeling",
        "Statistical Analysis",
        "Deep Learning",
      ],
    },
    {
      title: "Machine Learning",
      icon: "memory",
      image: "/assets/Understanding Machine Learning_ The Technology Reshaping Our World.jpg",
      desc: "Building and deploying custom ML models that automate complex processes and drive innovation.",
      bullets: [
        "Custom ML Models",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
    {
      title: "Drone & IoT Technologies",
      icon: "flight_takeoff",
      image: "/assets/IOT MOBILE APP DEVELOPMENT COMPANY AHMEDABAD.jpg",
      desc: "Integrating unmanned aerial systems and connected devices for real-time remote monitoring, data collection, and automation.",
      bullets: [
        "Unmanned Aerial Systems (UAS)",
        "IoT Sensor Networks",
        "Edge Computing Integration",
      ],
    },
  ];

  const industries = [
    { name: "Banking & Financial Services", icon: "account_balance" },
    { name: "Healthcare & Life Sciences", icon: "health_metrics" },
    { name: "Education & EdTech", icon: "school" },
    { name: "Retail & eCommerce", icon: "shopping_cart_checkout" },
    { name: "Manufacturing & Industrial", icon: "precision_manufacturing" },
    { name: "AI & Enterprise SaaS", icon: "smart_toy" },
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
        <div className="max-w-[1400px] mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004643] mb-12 tracking-tight">
            Core Transformation Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-[#004643] pl-6">
              Comprehensive solutions tailored for complex global infrastructures.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-[#F0EDE5] pl-6">
              We specialize in high-performance engineering that drives sustainable growth.
            </p>
          </div>
        </div>
        <ServicesScrollGallery items={services} />
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
              <video
                ref={videoRef}
                className="w-full aspect-[4/3] object-cover transition-all duration-700"
                loop
                controls
                playsInline
              >
                <source src="/assets/IMG_0965.MP4" type="video/mp4" />
              </video>
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
                className="group relative bg-surface-container-lowest p-6 text-center rounded-none border border-outline-variant/40 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,112,243,0.15)] cursor-pointer overflow-hidden flex flex-col items-center justify-center min-h-[160px] hover:-translate-y-1"
              >
                {/* Subtle radial glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Animated top accent border */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>
                
                <div className="mb-4 relative z-10">
                  <span className="material-symbols-outlined text-on-surface-variant/80 group-hover:text-primary text-4xl transition-all duration-300 group-hover:scale-110">{ind.icon}</span>
                </div>
                
                <p className="font-semibold text-on-surface text-sm leading-snug relative z-10">{ind.name}</p>
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
