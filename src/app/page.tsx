"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import TechnologyStack from "@/components/TechnologyStack";
import CaseStudies3DCarousel from "@/components/CaseStudies3DCarousel";

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    industry: "Industry Interest",
    challenge: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [revenueStat, setRevenueStat] = useState("$1.0B+");

  const backgroundVideos = [
    "/assets/video1.mp4",
    "/assets/video2.mp4",
    "/assets/video3.mp4",
    "/assets/video4.mp4",
    "/assets/video5.mp4",
    "/assets/video6.mp4",
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
  };

  // Animate statistics counter simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevenueStat("$1.65B+");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { placeholder, value } = target;
    // Map placeholders to keys since the original HTML uses placeholders
    let fieldKey = "";
    if (placeholder === "First Name") fieldKey = "firstName";
    else if (placeholder === "Last Name") fieldKey = "lastName";
    else if (placeholder === "Work Email") fieldKey = "email";
    else if (placeholder === "Tell us about your challenge") fieldKey = "challenge";
    else if (e.target.tagName === "SELECT") fieldKey = "industry";

    if (fieldKey) {
      setFormData((prev) => ({ ...prev, [fieldKey]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert("Please fill out the required fields (First Name and Email).");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark py-24">
        <div className="absolute inset-0 z-0">
          <video
            key={backgroundVideos[currentVideoIndex]}
            src={backgroundVideos[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-enterprise-blue-dark/30 backdrop-blur-[3px]"></div>
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-none text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#F5A623]"></div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-wide uppercase">
                Digital Engineering Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white leading-tight font-bold tracking-tight lg:whitespace-nowrap">
              Driving Innovation in <span className="text-[#F5A623]">Automation,</span><br />
              <span className="text-[#F5A623]">AI Works & Seamless Automation</span>
            </h1>

            <p className="text-surface-variant font-body-lg max-w-2xl text-lg md:text-xl opacity-90 leading-relaxed">
              Empowering global enterprises to scale faster and smarter. We leverage cutting-edge artificial intelligence, cloud-native architectures, and deep industry expertise to transform your operational workflows into autonomous, future-ready ecosystems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-[#3A78C4] hover:bg-blue-600 text-white text-sm font-bold px-8 py-3.5 transition-all flex items-center gap-2"
              >
                Contact Us <span>&rarr;</span>
              </Link>
              <Link
                href="/services"
                className="bg-transparent border border-white/30 text-white text-sm font-bold px-8 py-3.5 hover:bg-white/10 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* Company Statistics */}
      <section className="bg-surface py-20 border-b border-surface-grey">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
          <div className="space-y-2">
            <div className="font-display-xl text-3xl md:text-headline-lg text-primary transition-all duration-1000 ease-out">
              {revenueStat}
            </div>
            <div className="text-caption text-text-muted font-label-bold uppercase tracking-widest">
              Annual Revenue
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-display-xl text-3xl md:text-headline-lg text-primary">30,000+</div>
            <div className="text-caption text-text-muted font-label-bold uppercase tracking-widest">
              Global Talent
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-display-xl text-3xl md:text-headline-lg text-primary">25+</div>
            <div className="text-caption text-text-muted font-label-bold uppercase tracking-widest">
              Countries
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-display-xl text-3xl md:text-headline-lg text-primary">100%</div>
            <div className="text-caption text-text-muted font-label-bold uppercase tracking-widest">
              Carbon Neutral Goals
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview: The Core Pillars */}
      <section className="py-32 bg-enterprise-blue-dark text-white relative overflow-hidden">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10">
          <div className="max-w-2xl mb-20">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-6">The SentientWare Automation Framework</h2>
            <p className="font-body-lg text-surface-variant">
              At SentientWare, we don&apos;t just deploy technology—we architect intelligent ecosystems. Our comprehensive four-pillar framework ensures your enterprise transitions seamlessly into an autonomous, AI-driven future.
            </p>
          </div>
          <div className="space-y-24">
            {/* Pillar: Imagine */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-none shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 border border-white/10">
                <div className="w-full pt-[56.25%]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark/80 via-enterprise-blue-dark/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <Image src="/assets/human-robot-interaction-digital-world.jpg" alt="Imagine Pillar" fill className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 lg:pl-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-2xl text-metallic-gold-light">lightbulb</span>
                  </div>
                  <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest text-sm">Phase 01</span>
                </div>
                <h3 className="font-headline-lg text-4xl lg:text-5xl">Imagine</h3>
                <p className="text-surface-variant font-body-lg text-lg leading-relaxed">
                  Envision autonomous workflows and intelligent business models that redefine operational efficiency and customer engagement.
                </p>
                <div className="pt-4 flex items-center gap-6">
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">Design Strategy</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">Market Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar: Engineer */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-none shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 border border-white/10">
                <div className="w-full pt-[56.25%]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark/80 via-enterprise-blue-dark/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <Image src="/assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg" alt="Engineer Pillar" fill className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 lg:pr-10 text-left lg:text-right flex flex-col items-start lg:items-end">
                <div className="flex items-center gap-4 mb-2 flex-row-reverse lg:flex-row">
                  <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest text-sm hidden lg:block">Phase 02</span>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-2xl text-metallic-gold-light">engineering</span>
                  </div>
                  <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest text-sm lg:hidden">Phase 02</span>
                </div>
                <h3 className="font-headline-lg text-4xl lg:text-5xl">Engineer</h3>
                <p className="text-surface-variant font-body-lg text-lg leading-relaxed lg:text-right">
                  Architect scalable, AI-driven infrastructures engineered for absolute reliability, extreme performance, and enterprise-grade security.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4 justify-start lg:justify-end">
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">Cloud Native Dev</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">Legacy Modernization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar: Modernize */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-none shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 border border-white/10">
                <div className="w-full pt-[56.25%]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark/80 via-enterprise-blue-dark/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <Image src="/assets/deng-xiang--WXQm_NTK0U-unsplash.jpg" alt="Modernize Pillar" fill className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 lg:pl-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-2xl text-metallic-gold-light">rocket_launch</span>
                  </div>
                  <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest text-sm">Phase 03</span>
                </div>
                <h3 className="font-headline-lg text-4xl lg:text-5xl">Modernize</h3>
                <p className="text-surface-variant font-body-lg text-lg leading-relaxed">
                  Transform legacy systems into agile, self-optimizing platforms powered by cutting-edge neural networks and multi-cloud architectures.
                </p>
                <div className="pt-4 flex items-center gap-6">
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">AI Foundations</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">Security by Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar: Manage */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-none shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 border border-white/10">
                <div className="w-full pt-[56.25%]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark/80 via-enterprise-blue-dark/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <Image src="/assets/chase-chappell-LKS62TmI-L8-unsplash.jpg" alt="Manage Pillar" fill className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 lg:pr-10 text-left lg:text-right flex flex-col items-start lg:items-end">
                <div className="flex items-center gap-4 mb-2 flex-row-reverse lg:flex-row">
                  <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest text-sm hidden lg:block">Phase 04</span>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-2xl text-metallic-gold-light">monitoring</span>
                  </div>
                  <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest text-sm lg:hidden">Phase 04</span>
                </div>
                <h3 className="font-headline-lg text-4xl lg:text-5xl">Manage</h3>
                <p className="text-surface-variant font-body-lg text-lg leading-relaxed lg:text-right">
                  Ensure continuous innovation with managed AI operations, predictive maintenance, and seamless orchestration across your entire technology stack.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4 justify-start lg:justify-end">
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">Managed Services</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <span className="w-2 h-2 bg-metallic-gold-light rounded-full"></span>
                    <span className="text-sm font-medium">Continuous Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-32 bg-surface">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-[1400px] mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004643] mb-12 tracking-tight">
              Our Industry Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-[#004643] pl-6">
                Domain knowledge is our foundation.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-[#F0EDE5] pl-6">
                We partner with leaders across global sectors to build the technologies of tomorrow.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="group relative overflow-hidden h-96 bg-enterprise-blue-dark rounded shadow-lg">
              <Image src="/assets/jared-brashier-duNHkmSkW6M-unsplash.jpg" alt="Drone & IoT Technologies Landscape" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-headline-md text-white mb-2">Drone & IoT Technologies</h4>
                <div className="h-1 w-0 group-hover:w-20 bg-metallic-gold-light transition-all duration-300"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden h-96 bg-enterprise-blue-dark rounded shadow-lg">
              <Image src="/assets/Pixel Foundry.jpg" alt="Software & Hi-Tech Landscape" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <h4 className="font-headline-md text-white mb-2">Software & Hi-Tech</h4>
                  <div className="h-1 w-0 group-hover:w-20 bg-metallic-gold-light transition-all duration-300 mb-2"></div>
                  <Link href="/industries" className="flex items-center gap-2 text-metallic-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <span className="font-label-bold uppercase tracking-wider text-sm hover:underline">Learn More</span>
                    <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden h-96 bg-enterprise-blue-dark rounded shadow-lg">
              <Image src="/assets/c2c.jpg" alt="Consumer Tech Landscape" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-headline-md text-white mb-2">Consumer Tech</h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-surface-variant text-sm leading-relaxed pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Transforming the consumer electronics ecosystem with AI-driven insights, smart device connectivity, and hyper-personalized digital experiences.
                    </p>
                  </div>
                </div>
                <div className="h-[2px] w-12 group-hover:w-full bg-metallic-gold-light transition-all duration-500 ease-out mb-4 mt-2"></div>
                <Link href="/industries" className="flex items-center gap-2 text-metallic-gold-light cursor-pointer w-fit group/btn">
                  <span className="font-label-bold uppercase tracking-wider text-sm group-hover/btn:text-white transition-colors">Learn More</span>
                  <span className="material-symbols-outlined text-sm transform group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-24 bg-surface border-y border-surface-variant overflow-hidden">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop mb-16">
          <div className="text-center">
            <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest mb-4 block">
              Trusted By Industry Leaders
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary">
              Our Clients & Partners
            </h2>
          </div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative w-full flex overflow-hidden group/marquee">
          {/* Fading edges for marquee */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-scroll-left group-hover/marquee:[animation-play-state:paused] whitespace-nowrap py-8">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center justify-center gap-12 md:gap-24 px-6 md:px-12 shrink-0">
                {[
                  { name: "Microsoft", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoft/microsoft-original.svg" },
                  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
                  { name: "Amazon", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                  { name: "IBM", icon: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg" },
                  { name: "Oracle", icon: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
                  { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg" },
                  { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
                ].map((client, idx) => (
                  <div key={idx} className="flex items-center justify-center transition-all duration-500 group-hover/marquee:opacity-30 group-hover/marquee:grayscale hover:!opacity-100 hover:!grayscale-0 hover:scale-125 hover:drop-shadow-2xl cursor-pointer w-28 h-14 md:w-40 md:h-20 shrink-0">
                    <img src={client.icon} alt={client.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest mb-4 block">
                Proven Success
              </span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary">
                Global Impact, Local Excellence
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-primary text-primary font-label-bold hover:bg-primary hover:text-white transition-all rounded"
            >
              View All Case Studies
            </Link>
          </div>
          <CaseStudies3DCarousel />
        </div>
      </section>

      {/* Project Delivery & User Satisfaction */}
      <section className="py-12 bg-enterprise-blue-dark text-white border-y border-white/10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest mb-4 block">
              Excellence Delivered
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
              Project Delivery & User Satisfaction
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-4 border-[#F5A623] pl-6">
                Our commitment to excellence translates into measurable success.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-4 border-white/20 pl-6">
                We take pride in delivering robust solutions that drive absolute satisfaction for our enterprise partners.
              </p>
            </div>
          </div>

          {/* Horizontal Carousel for Stats */}
          <div className="relative w-full flex overflow-hidden group/marquee py-4">
            {/* Fading edges for marquee */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-enterprise-blue-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-enterprise-blue-dark to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-scroll-left group-hover/marquee:[animation-play-state:paused] py-4">
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex items-stretch gap-6 px-3 shrink-0">
                  {[
                    { icon: 'task_alt', stat: '10+', label: 'Projects Delivered' },
                    { icon: 'sentiment_very_satisfied', stat: '99%', label: 'Client Satisfaction' },
                    { icon: 'handshake', stat: '95%', label: 'Retention Rate' },
                    { icon: 'engineering', stat: '50+', label: 'Expert Engineers' },
                    { icon: 'network_check', stat: '99.9%', label: 'Uptime Guaranteed' },
                    { icon: 'public', stat: '20+', label: 'Global Partners' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 border border-white/10 bg-gradient-to-br from-white/10 to-white/5 rounded-none backdrop-blur-md shadow-lg hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(245,166,35,0.15)] hover:border-metallic-gold-light/40 transition-all duration-500 w-64 md:w-72 shrink-0 flex flex-col items-center justify-center text-center group cursor-default">
                      <div className="text-metallic-gold-light material-symbols-outlined text-5xl mb-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(245,166,35,0.5)] transition-all duration-500">{item.icon}</div>
                      <div className="font-display-xl text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-metallic-gold-light transition-colors duration-500">{item.stat}</div>
                      <div className="text-surface-variant font-label-bold uppercase tracking-widest text-xs mt-2">{item.label}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Technology Stack Section */}
      <TechnologyStack />

      {/* Contact CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="bg-surface p-8 lg:p-20 border border-surface-grey flex flex-col lg:flex-row gap-16 items-center rounded">
            <div className="flex-1">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-6">
                Ready to Re(AI)magine Your Future?
              </h2>
              <p className="font-body-lg text-text-muted mb-10">
                Our enterprise architects are ready to discuss your complex challenges. Let&apos;s engineer the next phase of your digital evolution together.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    verified
                  </span>
                  <div>
                    <h5 className="font-label-bold text-primary">Confidential Consultation</h5>
                    <p className="text-caption text-text-muted">A deep dive into your infrastructure and goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    speed
                  </span>
                  <div>
                    <h5 className="font-label-bold text-primary">Rapid Prototyping</h5>
                    <p className="text-caption text-text-muted">Moving from concept to POC in as little as 4 weeks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md bg-white p-8 shadow-xl border border-surface-grey rounded">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="material-symbols-outlined text-6xl text-metallic-gold-light animate-bounce">
                    check_circle
                  </span>
                  <h3 className="font-headline-md text-primary">Collaboration Requested!</h3>
                  <p className="text-body-md text-text-muted">
                    Thank you, {formData.firstName}. An enterprise architect will reach out to you within 24 hours at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        industry: "Industry Interest",
                        challenge: "",
                      });
                    }}
                    className="mt-6 px-6 py-2 bg-enterprise-blue-dark text-white rounded font-label-bold text-sm"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      className="w-full border border-surface-grey focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 text-body-md rounded"
                      placeholder="First Name"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    <input
                      className="w-full border border-surface-grey focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 text-body-md rounded"
                      placeholder="Last Name"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <input
                    required
                    className="w-full border border-surface-grey focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 text-body-md rounded"
                    placeholder="Work Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="relative">
                    <select
                      className="w-full border border-surface-grey focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 text-body-md rounded text-text-muted bg-white appearance-none"
                      value={formData.industry}
                      onChange={handleInputChange}
                    >
                      <option>Industry Interest</option>
                      <option>Banking & Financial Services</option>
                      <option>Healthcare & Life Sciences</option>
                      <option>Retail & eCommerce</option>
                      <option>Manufacturing & Industrial</option>
                      <option>Education & EdTech</option>
                      <option>Software & Hi-Tech</option>
                      <option>Logistics & Supply Chain</option>
                      <option>IoT & Connected Devices</option>
                      <option>Real Estate & PropTech</option>
                      <option>Drone & UAV Solutions</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                      <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                    </div>
                  </div>
                  <textarea
                    className="w-full border border-surface-grey focus:ring-1 focus:ring-primary focus:border-primary px-4 py-3 text-body-md rounded"
                    placeholder="Tell us about your challenge"
                    rows={4}
                    value={formData.challenge}
                    onChange={handleInputChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-enterprise-blue-dark hover:bg-primary text-white font-label-bold py-4 transition-all shadow-lg rounded"
                  >
                    Request Collaboration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
