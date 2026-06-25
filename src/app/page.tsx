"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Pillar: Imagine */}
            <div className="group p-8 border border-white/10 hover:border-metallic-gold-light/50 transition-all duration-300 bg-white/5 rounded">
              <span className="material-symbols-outlined text-4xl text-metallic-gold-light mb-6 block">
                lightbulb
              </span>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-metallic-gold-light transition-colors">
                Imagine
              </h3>
              <p className="text-surface-variant font-body-md mb-8">
                Envision autonomous workflows and intelligent business models that redefine operational efficiency and customer engagement.
              </p>
              <ul className="space-y-3 text-caption opacity-60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> Design Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> Market Analysis
                </li>
              </ul>
            </div>

            {/* Pillar: Engineer */}
            <div className="group p-8 border border-white/10 hover:border-metallic-gold-light/50 transition-all duration-300 bg-white/5 rounded">
              <span className="material-symbols-outlined text-4xl text-metallic-gold-light mb-6 block">
                engineering
              </span>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-metallic-gold-light transition-colors">
                Engineer
              </h3>
              <p className="text-surface-variant font-body-md mb-8">
                Architect scalable, AI-driven infrastructures engineered for absolute reliability, extreme performance, and enterprise-grade security.
              </p>
              <ul className="space-y-3 text-caption opacity-60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> Cloud Native Dev
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> Legacy Modernization
                </li>
              </ul>
            </div>

            {/* Pillar: Modernize */}
            <div className="group p-8 border border-white/10 hover:border-metallic-gold-light/50 transition-all duration-300 bg-white/5 rounded">
              <span className="material-symbols-outlined text-4xl text-metallic-gold-light mb-6 block">
                rocket_launch
              </span>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-metallic-gold-light transition-colors">
                Modernize
              </h3>
              <p className="text-surface-variant font-body-md mb-8">
                Transform legacy systems into agile, self-optimizing platforms powered by cutting-edge neural networks and multi-cloud architectures.
              </p>
              <ul className="space-y-3 text-caption opacity-60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> AI Foundations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> Security by Design
                </li>
              </ul>
            </div>

            {/* Pillar: Manage */}
            <div className="group p-8 border border-white/10 hover:border-metallic-gold-light/50 transition-all duration-300 bg-white/5 rounded">
              <span className="material-symbols-outlined text-4xl text-metallic-gold-light mb-6 block">
                monitoring
              </span>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-metallic-gold-light transition-colors">
                Manage
              </h3>
              <p className="text-surface-variant font-body-md mb-8">
                Ensure continuous innovation with managed AI operations, predictive maintenance, and seamless orchestration across your entire technology stack.
              </p>
              <ul className="space-y-3 text-caption opacity-60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> Managed Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-metallic-gold-light rounded-full"></span> Continuous Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-32 bg-surface">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-6">Our Industry Expertise</h2>
            <p className="font-body-md text-text-muted">
              Domain knowledge is our foundation. We partner with leaders across global sectors to build the technologies of tomorrow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="group relative overflow-hidden h-96 bg-enterprise-blue-dark rounded shadow-lg">
              <img
                alt="Banking & Financial Services Landscape"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsb2SmEMBxN9NrZcSLYwAxo0ZmXo34Mr-HgBJ0LKmogXmj06m4ajIwv_9LsHBbdSxqlwABsKdUfHExkbihDeBDS6LtsbGFLOoRGNHsaWKhzB4VG4BdDFQUTLNkW13gK_pC8-Q9iTMBjLpT7lExeW5fYkzxXei8y0sg53JRH5hquB8WMImxB4Vxop4ie5F-KLuGGJGQR-3UCnfWwgEw_mBTfF56YjOuwDxR-ZZpSSBl12yywJY4bx5zUNVvi"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-headline-md text-white mb-2">Banking & Financial Services</h4>
                <div className="h-1 w-0 group-hover:w-20 bg-metallic-gold-light transition-all duration-300"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden h-96 bg-enterprise-blue-dark rounded shadow-lg">
              <img
                alt="Insurance Landscape"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvfm3-g_gP7zZT5EE7l39hP3B_7UVtenVAtzSm_eLACVA7-eS__HatOGgJJbXclObFw7fc3nmEDl4Bo-wGLF9FjsaAZW1xkC__G-WQzMVaJDvGRsG_0o9sGaOQbjvhLFLQ9hE43VwRB51rADTWPc97N-APBL5wWVQyO-vQMEFd9QEn3wcnByGPOM6xnIK8H0f3EKEv1ZgJLz-X1a77_lvB5zMQu3ATqH_mpQV-1t5UyISDjY8GnFU-Rj1R8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-blue-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-headline-md text-white mb-2">Insurance</h4>
                <div className="h-1 w-0 group-hover:w-20 bg-metallic-gold-light transition-all duration-300"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden h-96 bg-enterprise-blue-dark rounded shadow-lg">
              <div className="absolute inset-0 bg-enterprise-blue-dark flex items-center justify-center p-12 text-center">
                <div>
                  <h4 className="font-headline-md text-white mb-4">Life Sciences & Healthcare</h4>
                  <p className="text-caption text-surface-variant mb-6">
                    Revolutionizing patient care through precision engineering and data-driven insights.
                  </p>
                  <Link
                    href="/industries"
                    className="text-metallic-gold-light font-label-bold flex items-center gap-2 mx-auto justify-center group"
                  >
                    Learn More{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Case Study 1 */}
            <div className="bg-surface border border-surface-grey hover-lift overflow-hidden rounded shadow-sm">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Fortune 500 Bank Cloud Orchestration"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuK9VGd6qcvaluqxB3LZkJkY4mrT-Qve8zm5YrYrLe36hGCMKeBfzjSlVlgygRO4fhGytlhR6sacO7L7hZZiJbEaHW08BdOOIbyF9xRS9dBqHC9CxcrlRDyN-JkKu0YW0FBlKKSbnJUUgTD5PJwo4_VN5JAgqr1gfqREyhPyGYhlUIuo62Lv-fBaJKzmt_8HeEw9xeaqK7CvIpIwaAxEVtB8jBJcIsv7d9h8ChH78mgluzYKXJyEhrX3Fnn"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-caption px-3 py-1 font-label-bold uppercase">
                  FinTech
                </span>
              </div>
              <div className="p-8">
                <h4 className="font-headline-md text-primary mb-4 leading-tight">
                  Orchestrating Cloud Migration for a Fortune 500 Bank
                </h4>
                <p className="text-text-muted mb-6 font-body-md text-sm">
                  Achieved 40% reduction in infrastructure costs while increasing deployment speed by 3x.
                </p>
                <Link
                  href="/case-studies"
                  className="text-primary font-label-bold inline-flex items-center gap-2 group"
                >
                  Read Story{" "}
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    trending_flat
                  </span>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-surface border border-surface-grey hover-lift overflow-hidden rounded shadow-sm">
              <div className="h-64 bg-enterprise-blue-dark flex items-center justify-center p-12 text-white">
                <span className="material-symbols-outlined text-6xl opacity-20">
                  health_and_safety
                </span>
              </div>
              <div className="p-8">
                <h4 className="font-headline-md text-primary mb-4 leading-tight">
                  AI-Driven Genomics Platform for Precision Medicine
                </h4>
                <p className="text-text-muted mb-6 font-body-md text-sm">
                  Developing predictive models that identify patient risks months ahead of traditional methods.
                </p>
                <Link
                  href="/case-studies"
                  className="text-primary font-label-bold inline-flex items-center gap-2 group"
                >
                  Read Story{" "}
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    trending_flat
                  </span>
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-surface border border-surface-grey hover-lift overflow-hidden rounded shadow-sm">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARKmiXgxkNFWDz9enyOyJex-DdxvAmKDdWfZuTmKd8y8pGc9Te0oQbag1quvPidIr17fxgQ6NOqxiFlP2T7NNGvx1cvTRjnfrTMjUqiQS7AuCDjo-ijQzZrFlcKSViWa0adsKKZzYiRJNQXoWLwYq0cBFOJdgLhLj3m8Ybg3VZ9akbV9K6liG499-bOW_FFnDsaxP0C41a0TK1O6RCAw2AJ5asWWAN81oYK1SCl2EVG0KvoRjC7pYkqQUcDRJSL6MpfMc0P9OWeTRP')",
                  }}
                ></div>
                <span className="absolute top-4 left-4 bg-primary text-white text-caption px-3 py-1 font-label-bold uppercase">
                  Industrial
                </span>
              </div>
              <div className="p-8">
                <h4 className="font-headline-md text-primary mb-4 leading-tight">
                  Digital Twin Implementation for Smart Factories
                </h4>
                <p className="text-text-muted mb-6 font-body-md text-sm">
                  Real-time simulation environment that prevented millions in potential downtime losses.
                </p>
                <Link
                  href="/case-studies"
                  className="text-primary font-label-bold inline-flex items-center gap-2 group"
                >
                  Read Story{" "}
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    trending_flat
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery Center Section */}
      <section className="py-32 bg-enterprise-blue-dark text-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-8">Engineering Excellence Everywhere</h2>
            <p className="font-body-lg text-surface-variant mb-12">
              With over 50 delivery centers worldwide, our globally distributed teams provide 24/7 innovation, ensuring your enterprise never sleeps.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-metallic-gold-light pl-6">
                <div className="text-3xl md:text-display-xl font-bold text-metallic-gold-light mb-1">50+</div>
                <div className="text-caption uppercase font-label-bold opacity-60">Global Centers</div>
              </div>
              <div className="border-l-2 border-metallic-gold-light pl-6">
                <div className="text-3xl md:text-display-xl font-bold text-metallic-gold-light mb-1">200+</div>
                <div className="text-caption uppercase font-label-bold opacity-60">Fortune 500 Clients</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-40">
              <img
                className="w-full h-full object-cover"
                alt="Global world map with interconnected delivery centers"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkXR1RWndeTuA0KLi3DO4AUYmuuni78sXDehK3k9OMJbW3jrNrdM7RpRUx0frEK6ZG3bYxhzKeN0XmfTQplXPKwsfpB2g5LxOzYmSt2bH2cZq1L0lF0_iYe0yU5CgdtrpK7mWLKRYuYN1npKUbqj3izt7ubg1JhOZ_ApDXaJ6maRm4PvqICdB1mr46bbqEkoP4Ff8qoAv9LskUn6Wqmg6QCNcxC6co3icRWafecXu-VGho7Mmuw91R7BOSsC7ZY8wLGECRWxwBgeyJ"
              />
            </div>
            {/* Interactive Markers Simulation */}
            <div className="absolute inset-0 p-8 md:p-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-enterprise-blue-dark/80 p-4 border border-white/20 w-max rounded">
                  <span className="w-2 h-2 bg-metallic-gold-light rounded-full animate-ping"></span>
                  <span className="font-label-bold text-xs md:text-sm">New Delivery Center: London, UK</span>
                </div>
                <div className="flex items-center gap-4 bg-enterprise-blue-dark/80 p-4 border border-white/20 w-max ml-6 md:ml-12 rounded">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="font-label-bold text-xs md:text-sm">Headquarters: Silicon Valley, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <option>Banking</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
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
