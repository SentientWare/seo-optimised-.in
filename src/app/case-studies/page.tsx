"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

interface CaseStudy {
  id: number;
  category: string;
  industry: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  imgUrl: string;
  bgIsPlaceholder?: boolean;
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Solutions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [videoOpen, setVideoOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play with sound when section is in view
            videoRef.current?.play().catch(e => console.log("Video play failed:", e));
          } else {
            // Pause when section leaves view
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

  const initialCaseStudies: CaseStudy[] = [
    {
      id: 1,
      category: "Industrial AI",
      industry: "Data & Intelligence",
      title: "AI-Powered Drone Intelligence Platform",
      desc: "Delivering autonomous drone solutions for aerial inspection, surveillance, infrastructure monitoring, and AI-driven visual analytics across enterprise operations.",
      metric: "80%",
      metricLabel: "Reduction in Inspection Time",
      imgUrl: "/assets/download%20(8).jpg",
    },
    {
      id: 2,
      category: "Business Intelligence",
      industry: "Data & Intelligence",
      title: "Executive Analytics & Business Intelligence",
      desc: "Transforming enterprise data into actionable insights with real-time dashboards, KPI monitoring, predictive analytics, and AI-powered executive reporting.",
      metric: "40%",
      metricLabel: "Faster Decision-Making",
      imgUrl: "/assets/Business%20Analytics%20Skiils.jpg",
    },
    {
      id: 3,
      category: "Enterprise AI",
      industry: "Cloud & Platforms",
      title: "Enterprise Learning & Workforce Platform",
      desc: "Empowering organizations with an AI-driven learning platform featuring training management, assessments, certifications, skill development, and workforce analytics.",
      metric: "3×",
      metricLabel: "Increase in Learning Engagement",
      imgUrl: "/assets/ADCA%20Computer%20Centre%20in%20Ara%20-%20Career%20Boss%20Institute.jpg",
    },
    {
      id: 4,
      category: "Enterprise AI",
      industry: "Enterprise Automation",
      title: "AI-Powered Recruitment & Talent Screening",
      desc: "Helping enterprises streamline hiring through AI-powered resume screening, candidate assessments, interview workflows, and intelligent recruitment analytics.",
      metric: "75%",
      metricLabel: "Reduction in Manual Screening",
      imgUrl: "/assets/AI-Powered%20Interview%20Copilot.jpg",
    },
    {
      id: 5,
      category: "Cloud Migration",
      industry: "Cloud & Platforms",
      title: "Enterprise Cloud Modernization",
      desc: "Modernizing enterprise infrastructure through cloud migration, scalable architectures, DevOps automation, and secure multi-cloud deployments.",
      metric: "99.9%",
      metricLabel: "Platform Availability",
      imgUrl: "/assets/6%20Benefits%20of%20Seamless%20Cloud%20Integration%20for%20SMBs.jpg",
    },
    {
      id: 6,
      category: "Enterprise AI",
      industry: "Enterprise Automation",
      title: "Intelligent Business Process Automation",
      desc: "Automating approvals, document workflows, HR operations, finance processes, and enterprise task management using AI-driven automation.",
      metric: "60%",
      metricLabel: "Faster Process Execution",
      imgUrl: "/assets/Transform%20Your%20Company%20with%20Future-Proof%20Digital%20Process%20Automation.jpg",
    },
  ];

  const filteredCaseStudies = useMemo(() => {
    return initialCaseStudies.filter((study) => {
      const matchesFilter =
        activeFilter === "All Solutions" || study.industry === activeFilter;
      const matchesSearch =
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const industries = ["All Solutions", "Data & Intelligence", "Enterprise Automation", "Cloud & Platforms"];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover blur-[2px] scale-[1.02]"
            alt="Case Studies Background Data"
            src="/assets/scott-graham-5fNmWej4tAA-unsplash.jpg"
          />
          <div className="absolute inset-0 bg-enterprise-blue-dark/40"></div>
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#F5A623]"></div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-wide uppercase">
                Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white leading-tight font-bold tracking-tight lg:whitespace-nowrap">
              Measurable Impact Through <br />
              <span className="text-[#F5A623]">Breakthrough Technological Innovation</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mt-6">
              We partner with global leaders to implement intelligent automation that delivers measurable ROI and operational superiority. Explore how SentientWare solves the most complex technical challenges at an enterprise scale.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                href="/contact"
                className="bg-metallic-gold-light text-enterprise-blue-dark text-sm px-8 py-3.5 rounded font-bold transition-all hover:bg-white hover:scale-105 flex items-center gap-2"
              >
                Consult an Expert
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Filter Bar */}
      <section className="bg-surface-container-low py-8 sticky top-20 z-40 shadow-sm border-b border-surface-grey transition-all duration-300">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 w-full">
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {industries.map((ind) => {
              const active = activeFilter === ind;
              return (
                <button
                  key={ind}
                  onClick={() => {
                    setActiveFilter(ind);
                    setVisibleCount(6);
                  }}
                  className={`px-6 py-2 rounded-full font-label-bold whitespace-nowrap text-sm transition-all duration-300 ${
                    active
                      ? "bg-primary text-white"
                      : "bg-white border border-outline-variant text-on-surface-variant hover:border-primary"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>
          <div className="relative w-full md:w-64">
            <input
              className="w-full pl-10 pr-4 py-2.5 rounded border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
              placeholder="Search case studies..."
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
          </div>
        </div>
      </section>

      {/* Case Study Library Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
              <h3 className="font-headline-md text-primary">No case studies found</h3>
              <p className="text-text-muted mt-2 text-sm">
                Try adjusting your filters or search queries.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.slice(0, visibleCount).map((study) => (
                  <article
                    key={study.id}
                    className="group bg-white rounded-xl border border-surface-grey overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden">
                      {study.bgIsPlaceholder ? (
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url('${study.imgUrl}')` }}
                        ></div>
                      ) : (
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={study.title}
                          src={study.imgUrl}
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-label-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col border-t-2 border-transparent group-hover:border-metallic-gold-light transition-all">
                      <h3 className="font-headline-md text-lg font-bold text-enterprise-blue-dark mb-4 line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-text-muted mb-8 line-clamp-3 text-sm font-body-md">
                        {study.desc}
                      </p>
                      <div className="mt-auto flex flex-col gap-6">
                        <div className="bg-surface-container-low p-4 rounded">
                          <span className="block text-primary font-display-xl text-2xl md:text-[32px] leading-none mb-1">
                            {study.metric}
                          </span>
                          <span className="text-caption text-outline font-label-bold uppercase text-[10px]">
                            {study.metricLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredCaseStudies.length > visibleCount && (
                <div className="mt-16 flex justify-center">
                  <button
                    onClick={loadMore}
                    className="px-8 py-3 border-2 border-primary text-primary rounded font-label-bold hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                  >
                    Load More Case Studies
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-24 bg-enterprise-blue-dark relative overflow-hidden text-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-metallic-gold-light font-label-bold uppercase tracking-widest mb-4 block text-sm">
                🚚 Logistics & Supply Chain (Coming Soon)
              </span>
              <h2 className="font-display-xl text-3xl md:text-[48px] text-white mb-8 leading-tight">
                AI-Driven Logistics Optimization Platform
              </h2>
              <p className="text-primary-fixed-dim font-body-lg text-sm md:text-base mb-10 leading-relaxed">
                Currently in R&D, we&apos;re building an intelligent logistics platform that leverages AI, IoT, and real-time analytics to optimize fleet operations, automate warehouse workflows, and enhance supply chain visibility.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <span className="text-secondary-fixed font-display-xl text-3xl md:text-[40px] block mb-2">
                    30%
                  </span>
                  <p className="text-surface-variant text-caption uppercase font-label-bold text-[10px]">
                    Target Reduction in Delivery Costs
                  </p>
                </div>
                <div>
                  <span className="text-secondary-fixed font-display-xl text-3xl md:text-[40px] block mb-2">
                    40%
                  </span>
                  <p className="text-surface-variant text-caption uppercase font-label-bold text-[10px]">
                    Goal Faster Route Planning
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-metallic-gold-light to-secondary-fixed rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative glass-card p-4 rounded-2xl">
                  <video
                    ref={videoRef}
                    className="rounded-xl w-full aspect-video object-cover shadow-2xl bg-black"
                    controls
                    playsInline
                  >
                    <source src="/assets/Untitled design.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-white border-b border-surface-grey">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop mb-20 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <span className="text-secondary font-label-bold uppercase tracking-widest mb-4 block">Global Reach</span>
            <h2 className="font-display-xl text-3xl md:text-5xl text-primary leading-tight">
              Connecting Businesses Worldwide
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mt-6">
              Through innovative technology, intelligent solutions, and AI-powered products, we&apos;re helping organizations across the globe accelerate digital transformation and build a smarter future together.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="w-12 h-1 bg-secondary mb-6"></div>
            <h3 className="text-2xl font-bold text-enterprise-blue-dark mb-4">A Connected Digital Ecosystem</h3>
            <p className="text-text-muted text-base leading-relaxed">
              From intelligent automation and enterprise platforms to cloud infrastructure, IoT, drone technologies, and advanced analytics, we empower businesses to streamline operations, improve decision-making, and unlock new opportunities for growth. Our vision is to create a connected digital ecosystem where innovation knows no boundaries, enabling organizations of every size to adapt, scale, and thrive in an increasingly intelligent world.
            </p>
          </div>
        </div>
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop h-[400px] md:h-[500px] bg-surface-container-low rounded-2xl overflow-hidden relative border border-surface-grey">
          <div className="w-full h-full opacity-80 mix-blend-multiply">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGJZKJWkl6JOAUa2Wq4CWR2eqsg_eWG5_ppMi3h-3o3-HfpEknGljmxfjjtKycGIDdT1i2xImghQmBR0ELcCdIa2eO_ETMX__9gN3PD3qwGENvTZ2s3oDTF8iXrVMBHrCrzRRFaSN_3VbIoICLhfgEDZWctQyg1AqQx_OQs90VMvmvAPiIUotlPlX07RnAIMPbHILEd-nwq2ihgmanZylkAgiDO-106ZQklBXTB1HIRALX_XajIbuuqpq1plMlfQgGyVHw-w3nxFAE')",
              }}
            ></div>
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
            <video
              className="w-full h-full object-cover bg-black"
              controls
              autoPlay
              playsInline
            >
              <source src="/assets/Untitled design.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
