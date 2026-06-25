"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface CaseStudy {
  id: number;
  category: "Healthcare" | "Cloud Migration" | "Industrial AI";
  industry: "Healthcare" | "Financial Services" | "Manufacturing";
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  imgUrl: string;
  bgIsPlaceholder?: boolean;
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Industries");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [videoOpen, setVideoOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const initialCaseStudies: CaseStudy[] = [
    {
      id: 1,
      category: "Healthcare",
      industry: "Healthcare",
      title: "AI-Powered Patient Triage System for Regional Health Hub",
      desc: "Optimizing emergency response workflows using real-time predictive analytics and natural language processing across 14 hospitals.",
      metric: "35%",
      metricLabel: "Wait Time Reduction",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvdtSbmV8r3YJzvom8dRNxwSQnZeqvJvemNCEQJLWJ1BwQROm1MieySFU86CZz3_JZqTVsGsPWZd1xpAQn-fg8o3D5Zlp4OhgVcop-_42dj6s-xft0P5fXpIRAboOCJMST7SKPtq80y3azw3eCWcwbT7as2El9uWq6IC1_q2fcuhnqx6ggVYEpPiFpGPxBl9PldLJyGipaFWrgzumXrk304nASHkAshlvi6xdDqmPOU_s0YRnM_QJEyofaUr36uW7Ek3jRSXaoszI1",
    },
    {
      id: 2,
      category: "Cloud Migration",
      industry: "Financial Services",
      title: "Cloud Migration for a Fortune 500 Global Bank",
      desc: "Architecting a seamless transition of legacy core banking systems to a multi-cloud environment without downtime.",
      metric: "40%",
      metricLabel: "Increase in Operational Efficiency",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk1sr5ExXfrqsfHbB-NMl5jwAFTeAlywonanlpJ7D5vfG4Xz3n10lEH8-hofsdSzXyZJCHthAuBSOCXsebu4zoHr2I5uBLu4_8-bLLqN6Ahppf-AbRVWR_NzEv9KYe_0Cq2Ir7wGFoRW0MGEDhXYq7KiVqC-FnqAKtyHwOqSF57l-ED-cRNU-njczl7zMWHq7bS4yw7uJ73QrMEiIDUoGzemx7y1-23nlXSX6HWYjhxUPS3yJo4VJt60y53Pxlrzi7dACfAwn9EX8l",
      bgIsPlaceholder: true,
    },
    {
      id: 3,
      category: "Industrial AI",
      industry: "Manufacturing",
      title: "Predictive Maintenance for Global Steel Manufacturer",
      desc: "Reducing unscheduled downtime through IoT-integrated sensor networks and deep learning failure models.",
      metric: "$12M",
      metricLabel: "Annual Maintenance Savings",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP-MQjMzPp10R9GXptlBmlhSI8l5spWw5WCUSaDpBD-RxItnyiVh1d7JmW6c5ijkoV4rkMiI99YgnWhsbCHMtSk5HF1YjEf6Rxq0h2IZSD3TfpOy962DV_gIDMnBa43wcjfwR9M2f2ydxgLkhHgl7IgIPUJIaZdegwT_iw4i7HmHf4gugR_lOqmVdutm3GogdzumXgCIgkh1hGVkVI1Nnu07vJBqxAOKJya5Ol1581G52ffxX7OO77LOdeSoEc8yfFYDH8SoDcgjx",
    },
    {
      id: 4,
      category: "Healthcare",
      industry: "Healthcare",
      title: "AI Genomics Platform for Pediatric Cancer Diagnosis",
      desc: "Building a distributed genomic computing pipeline that speeds diagnostic report generation from 3 weeks to under 24 hours.",
      metric: "95%",
      metricLabel: "Speed Improvement",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ4Pk-bum-BIbJ9CxDeRhHmoDQ5_Zoba8ZxDQmenOYGJ4xYJ_pWamtY0D7nXgSKmj24yhQLfN7rBReRpGWx1DtwdFOEvq6_AYPpUAXSDTkhbToVAnHK8t9DTLO5l9M6dRvWFjMfDdMrE0enLJBD4TKv54pQN5sg_jDv6bAMVoDe8RSwcvfUIel1_kkiHu9CCekctR01m8DlsSWm2pr6NXVwHv0oJOYXDH_qs6dBbtV-HHLKeTCg_n5Hd17BaXpqIZs8GnV3m0JmBxl",
    },
    {
      id: 5,
      category: "Cloud Migration",
      industry: "Financial Services",
      title: "Secure Payment Ledger Migration for FinTech Enterprise",
      desc: "Upgrading and migrating highly audited distributed ledgers to AWS using automated compliance validation scripts.",
      metric: "100%",
      metricLabel: "Audit Success",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfCvXrs0-Vi9HWCerUXJT5M5EYuqMnpjxTZSXJ0L37-JEJWA-ojOY3gDXm3qnMg1vbvr47ruopzgGd8Ab3GHlXreJ_ordfJzgmTRbTZSNE3uA5fwOhvtWqcn-fV8spP5TNww3alGgPXxiQJn0g3wZBUEd7S2I3Bd-ChMkNfDRKTZCtyqErEHsbCj5YSW-_3giExumOR7g_2DBe_3BH4xHgdJkIyIvV1l_1MIvn583dcA5SzddydmPQGmjGhpYiu8rt3v_7ebUzmk4S",
    },
    {
      id: 6,
      category: "Industrial AI",
      industry: "Manufacturing",
      title: "Warehouse Supply Chain Optimizer for EuroGlobal Logistics",
      desc: "Optimizing global freight paths and cargo container packing configurations using multi-agent reinforcement learning.",
      metric: "22%",
      metricLabel: "Fuel Optimization",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc1crElsqL96fsQO0OdgmtQHoymL5aw4QJSsReWQPBiWBBGz-5Yu_CtBIcFOysvim36NisywnYfJcPRCTPzqNSxtQeFct1rVlqYSjfJeuR6e4oTs0vDi3Ia7BmzNe0hzMVqFFgkSpbrg-LrYSSBTudrmg6jS75x0CREX8IaAKYy_9TfU7ru5_LnbUH9-a65XA8eWdNPwK_cDtfcXKEV4ZlwHDFliLCWwB27FNt4M5AEPUUhQNvnsDLg3ffooEFW1NyWklxVQkskLpI",
    },
  ];

  const filteredCaseStudies = useMemo(() => {
    return initialCaseStudies.filter((study) => {
      const matchesFilter =
        activeFilter === "All Industries" || study.industry === activeFilter;
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

  const industries = ["All Industries", "Healthcare", "Financial Services", "Manufacturing"];

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
                    setVisibleCount(3);
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
                setVisibleCount(3);
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
                        <button
                          onClick={() => alert(`Opening detailed report for Case Study #${study.id}...`)}
                          className="flex items-center gap-2 font-label-bold text-primary group-hover:text-secondary transition-colors text-sm text-left"
                        >
                          Read Story{" "}
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
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
                Flagship Transformation
              </span>
              <h2 className="font-display-xl text-3xl md:text-[48px] text-white mb-8 leading-tight">
                Reimagining Logistics for EuroGlobal Freight
              </h2>
              <p className="text-primary-fixed-dim font-body-lg text-sm md:text-base mb-10 leading-relaxed">
                EuroGlobal faced a critical scalability bottleneck in their manual dispatch logic. Our engineering team deployed a custom-built AI &apos;Orchestrator&apos; that unified disparate legacy databases into a real-time graph database, enabling instant route optimization across 40 countries.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <span className="text-secondary-fixed font-display-xl text-3xl md:text-[40px] block mb-2">
                    22%
                  </span>
                  <p className="text-surface-variant text-caption uppercase font-label-bold text-[10px]">
                    Fuel Cost Reduction
                  </p>
                </div>
                <div>
                  <span className="text-secondary-fixed font-display-xl text-3xl md:text-[40px] block mb-2">
                    99.9%
                  </span>
                  <p className="text-surface-variant text-caption uppercase font-label-bold text-[10px]">
                    System Uptime
                  </p>
                </div>
              </div>
              <button
                onClick={() => alert("Downloading EuroGlobal Freight Case Study...")}
                className="bg-white text-enterprise-blue-dark px-10 py-4 rounded font-label-bold flex items-center gap-3 hover:bg-surface-variant transition-all text-sm"
              >
                View Full Report
                <span className="material-symbols-outlined">description</span>
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-metallic-gold-light to-secondary-fixed rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative glass-card p-4 rounded-2xl">
                  <img
                    className="rounded-xl w-full aspect-video object-cover shadow-2xl"
                    alt="EuroGlobal Command Center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc1crElsqL96fsQO0OdgmtQHoymL5aw4QJSsReWQPBiWBBGz-5Yu_CtBIcFOysvim36NisywnYfJcPRCTPzqNSxtQeFct1rVlqYSjfJeuR6e4oTs0vDi3Ia7BmzNe0hzMVqFFgkSpbrg-LrYSSBTudrmg6jS75x0CREX8IaAKYy_9TfU7ru5_LnbUH9-a65XA8eWdNPwK_cDtfcXKEV4ZlwHDFliLCWwB27FNt4M5AEPUUhQNvnsDLg3ffooEFW1NyWklxVQkskLpI"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setVideoOpen(true)}
                      className="w-20 h-20 bg-primary/80 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-100 hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg"
                      aria-label="Play report video"
                    >
                      <span className="material-symbols-outlined text-[40px]">play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-white border-b border-surface-grey">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">A Global Presence</h2>
          <p className="text-text-muted max-w-2xl mx-auto font-body-lg text-sm md:text-base">
            With strategic hubs in 21 countries, we combine global engineering standards with deep localized market insights.
          </p>
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
          {/* Map Overlay Info */}
          <div className="absolute bottom-8 left-8 flex flex-wrap gap-4 pr-8">
            <div className="bg-white/90 backdrop-blur-md p-4 rounded shadow border border-surface-grey">
              <span className="text-caption font-label-bold text-outline uppercase block mb-1 text-[10px]">
                North America
              </span>
              <span className="text-body-md font-bold text-primary text-sm">6 Major Hubs</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-4 rounded shadow border border-surface-grey">
              <span className="text-caption font-label-bold text-outline uppercase block mb-1 text-[10px]">
                EMEA
              </span>
              <span className="text-body-md font-bold text-primary text-sm">12 Design Centers</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-4 rounded shadow border border-surface-grey">
              <span className="text-caption font-label-bold text-outline uppercase block mb-1 text-[10px]">
                APAC
              </span>
              <span className="text-body-md font-bold text-primary text-sm">15 Innovation Labs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Advisor Button */}
      <button
        onClick={() => alert("Opening chat with an enterprise advisor...")}
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary hover:bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center transition-all z-50 group cursor-pointer"
        aria-label="Contact an Advisor"
      >
        <span className="material-symbols-outlined text-[32px]">support_agent</span>
        <span className="absolute right-20 bg-primary text-white px-4 py-2 rounded-lg text-xs font-label-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
          Contact an Advisor
        </span>
      </button>

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
              <h3 className="font-headline-md text-2xl mb-2">EuroGlobal Logistics Transformation Report</h3>
              <p className="text-surface-variant max-w-md">
                This report demonstrates how a multi-agent AI system optimizes shipping routes across 40 countries, saving fuel and improving dispatch speed.
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
