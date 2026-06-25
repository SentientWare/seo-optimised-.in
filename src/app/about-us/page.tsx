"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AboutUsPage() {
  const [csrModal, setCsrModal] = useState(false);

  const leaders = [
    {
      name: "Anand Sharma",
      role: "Chief Executive Officer",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHMy5ahvt91l7JhGvOPdtr0IC8jkhYvpkyX1bptl_Yja78c7CFesQMlj3T5VLx0Zscah15CbIWR2GDswoGYj2f1S8sTkX_468ZGmfIhMY9rJYcMPYGsdp6QYXhBVylw1RQ8f8SC48ySUJq3YXoFwcdscHH05hyNlJk7KyhFluX1mFMQNH8bvIbH9iUDXWuT3jDzLc0fwgFw4BbjNI42WTLvWrY6a88HxqNSeBq5x65EsNe9rpXzmfAsoUyWPAJiZXH288tNANVpivl",
      bio: "Chief Executive Officer overseeing global strategy and execution.",
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Technology Officer",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-yN6NFlFxaao3GwO03mnc2x0ZzVWEer9FCMRT71ZNuj4agIiRwIqEC4XGHTtAGytVGWooYaz_MPgULpXxmJda_hENfBMu45xMIgB1bADWxUb2gGgwXnFTeT6G3e84G9DuvEszHaP_326WFtD0xYpeUttPM4Bd6YSq4LJVSADMauVBk0MESs-zfjpWy4WPpQazXeiaNLGYf7mCUScvNVRU2RuRkmaHT797wUlz67t-QgO5_M38e4rz58P6Cl5eE1IcIfsDBK8za9Dy",
      bio: "Chief Technology Officer leading advanced R&D and core architectures.",
    },
    {
      name: "David Chen",
      role: "Head of Global Operations",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDliB4844UpuoYRHQsTLJCqPgalqfjEnJ8e7D_w746UXQFfDCoaz8WGEkHptWPq77uWgclGsldQjik9IEd1kc67sHR3K2o9TfxJ6gXy0H8ALB6DOV-dzHvNU9Ft1XQpiedRPfFzQYz5xQs64joi-Y8TNSt5muCurolAfO29IzsHM_E7EU1_lh9MajtKvBxQ37icO9zq0qkx-AXg8pJDu9AQwtBfEDll7vsgb9UlDzyVo9U8HNjEBHE5uU5tM0ovgnP6O3gnNAThuPsX",
      bio: "Head of Global Operations ensuring delivery center integration.",
    },
    {
      name: "Sarah Jenkins",
      role: "Chief Marketing Officer",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz6Wb0jzvrtRAthT5R2aXn4ChWDTTYwLfgRFYlzwAkfKvInzC7yd4YtoCxQLHB93OOUG5Mk1lRgiDxHl5I7SvSJthQ9OCFJWYc4C2Y0sy3uG_rE7EoVtz4htDdKBeIjJGr1Ne1oqL9ksMtTqylSWCEa58SC8R1TwMjOV7VFB2tLdpMtkMp0NY3XsCSerfyGm4IDB7LVEaXJUGsI_RInoo8omzKviSacfjW_YP2MED2NZJVfsv8FmFw9PzTsZ9f1VaF7O9OMsEbFya2",
      bio: "Chief Marketing Officer guiding brand and communications globally.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover blur-[2px] scale-[1.02]"
            alt="Corporate Tech Architectural Setting"
            src="/assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
          />
          <div className="absolute inset-0 bg-enterprise-blue-dark/40"></div>
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#F5A623]"></div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-wide uppercase">
                A Trusted Digital Engineering Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white leading-tight font-bold tracking-tight lg:whitespace-nowrap">
              Pioneering the Future of <br />
              <span className="text-[#F5A623]">Global Engineering Excellence</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mt-6">
              SentientWare is a global collective of elite AI architects, automation engineers, and strategic visionaries. We are dedicated to transforming modern enterprises through scalable, sustainable, and highly intelligent technological solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#philosophy"
                className="bg-metallic-gold-light text-primary font-label-bold px-8 py-4 rounded hover:brightness-110 transition-all text-center text-sm"
              >
                Explore Our Journey
              </a>
              <button
                onClick={() => alert("Downloading Factsheet Document...")}
                className="border border-surface-variant text-on-primary font-label-bold px-8 py-4 rounded hover:bg-surface-variant/10 transition-all text-sm"
              >
                Download Factsheet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (The Grid) */}
      <section className="py-24 bg-surface border-b border-surface-grey">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="border-l-4 border-secondary pl-6 py-4">
              <div className="text-3xl md:text-display-xl font-display-xl text-primary mb-2">30+</div>
              <div className="text-[10px] md:text-label-bold font-label-bold text-outline uppercase tracking-widest">
                Years Experience
              </div>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <div className="text-3xl md:text-display-xl font-display-xl text-primary mb-2">20+</div>
              <div className="text-[10px] md:text-label-bold font-label-bold text-outline uppercase tracking-widest">
                Global Offices
              </div>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <div className="text-3xl md:text-display-xl font-display-xl text-primary mb-2">15k+</div>
              <div className="text-[10px] md:text-label-bold font-label-bold text-outline uppercase tracking-widest">
                Experts Globally
              </div>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <div className="text-3xl md:text-display-xl font-display-xl text-primary mb-2">500+</div>
              <div className="text-[10px] md:text-label-bold font-label-bold text-outline uppercase tracking-widest">
                Enterprise Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section (Modern Bento Layout) */}
      <section id="philosophy" className="py-32 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-6">
              Our Philosophy in Action
            </h2>
            <p className="text-body-lg text-body-md md:text-body-lg text-on-surface-variant">
              We don&apos;t just solve problems; we engineer the future of business through a rigorous four-pillar approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-auto md:auto-rows-[280px]">
            {/* Imagine */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl border border-surface-grey hover:shadow-xl transition-all duration-500 bg-enterprise-blue-dark p-8 md:p-12 flex flex-col justify-end text-white min-h-[250px] md:min-h-0">
              <div className="absolute top-8 right-8">
                <span className="material-symbols-outlined text-6xl text-metallic-gold-light opacity-40 group-hover:scale-110 transition-transform">
                  lightbulb
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-primary mb-4">Imagine</h3>
              <p className="text-body-md font-body-md text-surface-variant max-w-lg text-sm">
                Designing and delivering new digital experiences, revenue streams and business models to meet rising customer expectations.
              </p>
            </div>

            {/* Engineer */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl border border-surface-grey hover:shadow-xl transition-all duration-500 bg-surface-container-low p-8 md:p-12 min-h-[250px] md:min-h-0 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4">settings_suggest</span>
                <h3 className="text-headline-md font-headline-md text-primary mb-4">Engineer</h3>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                Streamline software engineering to drive greater efficiency and resiliency across products.
              </p>
            </div>

            {/* Modernize */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl border border-surface-grey hover:shadow-xl transition-all duration-500 bg-surface-bright p-8 md:p-12 min-h-[250px] md:min-h-0 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-4">update</span>
                <h3 className="text-headline-md font-headline-md text-primary mb-4">Modernize</h3>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                Reinvent applications, infrastructure and processes for cloud-native agility.
              </p>
            </div>

            {/* Manage */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl border border-surface-grey hover:shadow-xl transition-all duration-500 bg-primary-container p-8 md:p-12 flex flex-col justify-end text-white min-h-[250px] md:min-h-0">
              <div className="absolute top-8 right-8">
                <span className="material-symbols-outlined text-6xl text-secondary-fixed opacity-40 group-hover:scale-110 transition-transform">
                  analytics
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-primary mb-4">Manage</h3>
              <p className="text-body-md font-body-md text-primary-fixed-dim max-w-lg text-sm">
                Transform and optimize the heartbeat of operations and development to reduce costs and facilitate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">
                Executive Leadership
              </h2>
              <p className="text-body-lg text-body-md md:text-body-lg text-on-surface-variant">
                Guided by industry veterans with a vision for global engineering excellence.
              </p>
            </div>
            <button
              onClick={() => alert("Leader bio overlay coming soon...")}
              className="font-label-bold text-secondary flex items-center gap-2 hover:underline text-sm"
            >
              Meet All Leaders <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5] bg-surface-container-highest shadow-sm">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={leader.name}
                    src={leader.imgUrl}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-primary/95 to-transparent pt-12">
                    <p className="text-white text-xs mb-3 italic">{leader.bio}</p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`LinkedIn profile for ${leader.name}`);
                        }}
                        className="text-white hover:text-secondary-fixed"
                        aria-label="LinkedIn"
                      >
                        <span className="material-symbols-outlined text-sm">link</span>
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Email ${leader.name}`);
                        }}
                        className="text-white hover:text-secondary-fixed"
                        aria-label="Email"
                      >
                        <span className="material-symbols-outlined text-sm">alternate_email</span>
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="font-headline-md text-xl md:text-headline-md text-primary mb-1">
                  {leader.name}
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Locations Section */}
      <section className="py-32 bg-enterprise-blue-dark text-on-primary text-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary mb-8">
                Engineering Excellence Globally
              </h2>
              <p className="text-body-lg font-body-lg text-primary-fixed mb-12 text-sm md:text-base">
                With strategic hubs in over 20 countries, we provide 24/7 delivery capabilities and localized expertise for global enterprises.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-primary-container">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl">public</span>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1">North America</h4>
                    <p className="text-surface-variant text-body-md text-sm">
                      San Francisco (HQ), New York, Toronto, Austin
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-6 border-b border-primary-container">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl">language</span>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1">Europe & MEA</h4>
                    <p className="text-surface-variant text-body-md text-sm">
                      London, Berlin, Dubai, Johannesburg
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl">map</span>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1">Asia Pacific</h4>
                    <p className="text-surface-variant text-body-md text-sm">
                      Bangalore, Singapore, Sydney, Tokyo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary-container shadow-2xl relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
                <img
                  className="w-full h-full object-cover"
                  alt="Stylized global location map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpb0qPoDz1KU9mW9n6XsCwDjziJZoVNNMzScS_bfHlflPEJfJMj2IP_pBM3xRWju2AxGBtY6XAxQOHyp09XuRSoeHxggFrBnRf9RovS4RcTJdsQZ4L9vo5PtctNd1oOmAd5Fa_VIdR2rJvgRv8JOfTKjB-2dRrcrk0Yhmlw2V2HjR8h7JnpJGLnCe7cZj4LPsNBaJOzlsxwfR8bF7jKzRJvvValhwl7YMzSVy5D0XUw8VG3IXvI66eIUF4DsodVGi90bC4CIciqlzv"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="bg-surface rounded-2xl p-8 md:p-20 relative overflow-hidden border border-surface-grey">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none hidden md:block">
              <span className="material-symbols-outlined text-[300px] text-secondary">eco</span>
            </div>
            <div className="max-w-2xl relative z-10">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-6">
                Engineering a Sustainable Future
              </h2>
              <p className="text-body-lg text-sm md:text-base text-on-surface-variant mb-10">
                Our commitment to Corporate Social Responsibility goes beyond charity. We leverage technology to solve environmental challenges, promote digital inclusion, and foster diversity in the engineering world.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-label-bold text-on-surface">Net Zero by 2030</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-label-bold text-on-surface">Global Literacy Tech Fund</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-label-bold text-on-surface">50% Female Leadership</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-label-bold text-on-surface">Open Source Stewardship</span>
                </li>
              </ul>
              <button
                onClick={() => setCsrModal(true)}
                className="bg-primary text-on-primary font-label-bold px-8 py-4 rounded hover:bg-enterprise-blue-dark transition-all text-sm cursor-pointer"
              >
                Read CSR Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop text-center">
          <h3 className="font-label-bold text-outline uppercase tracking-widest mb-16 text-xs md:text-sm">
            Global Awards & Accolades
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-70">
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-primary">military_tech</span>
              <p className="text-caption font-label-bold text-on-surface-variant text-xs">
                Everest Group Peak Matrix
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-primary">workspace_premium</span>
              <p className="text-caption font-label-bold text-on-surface-variant text-xs">
                Gartner Magic Quadrant
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-primary">verified</span>
              <p className="text-caption font-label-bold text-on-surface-variant text-xs">
                ISO 27001 Certified
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-primary">stars</span>
              <p className="text-caption font-label-bold text-on-surface-variant text-xs">
                Forbes Best Employers
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-primary">award_star</span>
              <p className="text-caption font-label-bold text-on-surface-variant text-xs">
                AWS Premier Partner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Report Modal */}
      {csrModal && (
        <div className="fixed inset-0 z-50 bg-enterprise-blue-dark/90 flex items-center justify-center p-6 text-black">
          <div className="relative w-full max-w-lg bg-white p-8 rounded shadow-2xl border border-surface-grey">
            <button
              onClick={() => setCsrModal(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-primary"
              aria-label="Close report"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline-md text-2xl mb-4 text-primary">CSR Report Summary</h3>
            <p className="text-body-md text-sm text-text-muted mb-6">
              Our CSR program highlights for {new Date().getFullYear()} include transition to 100% renewable energy for all hosting and office infrastructures, alongside donating $5M to digital literacy initiatives globally.
            </p>
            <button
              onClick={() => setCsrModal(false)}
              className="w-full py-3 bg-primary text-white rounded font-label-bold text-sm"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}
