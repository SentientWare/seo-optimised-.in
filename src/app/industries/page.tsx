"use client";

import React from "react";
import Link from "next/link";

interface Sector {
  title: string;
  desc: string;
  imgUrl: string;
  linkText: string;
  href: string;
  colSpan?: string;
}

export default function IndustriesPage() {
  const sectors: Sector[] = [
    {
      title: "Banking & Financial Services",
      desc: "Securing digital assets and accelerating fintech innovation through robust architecture.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfCvXrs0-Vi9HWCerUXJT5M5EYuqMnpjxTZSXJ0L37-JEJWA-ojOY3gDXm3qnMg1vbvr47ruopzgGd8Ab3GHlXreJ_ordfJzgmTRbTZSNE3uA5fwOhvtWqcn-fV8spP5TNww3alGgPXxiQJn0g3wZBUEd7S2I3Bd-ChMkNfDRKTZCtyqErEHsbCj5YSW-_3giExumOR7g_2DBe_3BH4xHgdJkIyIvV1l_1MIvn583dcA5SzddydmPQGmjGhpYiu8rt3v_7ebUzmk4S",
      linkText: "Case Study",
      href: "/case-studies",
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "Engineering patient-centric ecosystems and interoperable data networks for global health systems.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ4Pk-bum-BIbJ9CxDeRhHmoDQ5_Zoba8ZxDQmenOYGJ4xYJ_pWamtY0D7nXgSKmj24yhQLfN7rBReRpGWx1DtwdFOEvq6_AYPpUAXSDTkhbToVAnHK8t9DTLO5l9M6dRvWFjMfDdMrE0enLJBD4TKv54pQN5sg_jDv6bAMVoDe8RSwcvfUIel1_kkiHu9CCekctR01m8DlsSWm2pr6NXVwHv0oJOYXDH_qs6dBbtV-HHLKeTCg_n5Hd17BaXpqIZs8GnV3m0JmBxl",
      linkText: "View Solutions",
      href: "/solutions",
    },
    {
      title: "Retail & eCommerce",
      desc: "Designing high-conversion storefronts, omnichannel experiences, and AI-driven personalized shopping.",
      imgUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      linkText: "View Solutions",
      href: "/solutions",
      colSpan: "lg:col-span-2",
    },
    {
      title: "Manufacturing & Industrial",
      desc: "Driving Industry 4.0 through IoT sensors, digital twins, and predictive maintenance solutions.",
      imgUrl: "https://lh3.googleusercontent.com/aida/AP1WRLsb2SmEMBxN9NrZcSLYwAxo0ZmXo34Mr-HgBJ0LKmogXmj06m4ajIwv_9LsHBbdSxqlwABsKdUfHExkbihDeBDS6LtsbGFLOoRGNHsaWKhzB4VG4BdDFQUTLNkW13gK_pC8-Q9iTMBjLpT7lExeW5fYkzxXei8y0sg53JRH5hquB8WMImxB4Vxop4ie5F-KLuGGJGQR-3UCnfWwgEw_mBTfF56YjOuwDxR-ZZpSSBl12yywJY4bx5zUNVvi",
      linkText: "Case Study",
      href: "/case-studies",
      colSpan: "lg:col-span-2",
    },
    {
      title: "Education & EdTech",
      desc: "Building interactive learning management systems, student analytics dashboards, and virtual classrooms.",
      imgUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      linkText: "Case Study",
      href: "/case-studies",
    },
    {
      title: "Software & Hi-Tech",
      desc: "Engineering the next generation of SaaS, cloud infrastructure, and enterprise AI frameworks.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-8p71qvpD4wLf4cOw1nOxkRu5tekRFKnZsdT61vJi_8nG5YOCBGFdwYHPbMeIUqtYBy7K99v5jBt5GkiNrXSO0S7w0x4slA7DZ17zL0SA9djO5KRTN1MNQlED6F2-JkZaCPDTPJN-M7E6sFHHlnaSClPzltdedWIt6on7Q89jk-dqFn0w0sIXq_6P1CyC4HWQuXG_X0Fw6HUlYLcHMJ1GxywftdrF63l2sdnI5hTxPImOmSbFNRQfKCGJsUaTlOdFyHycuCtnokyH",
      linkText: "View Solutions",
      href: "/solutions",
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Optimizing global fleet operations, real-time tracking, and automated warehouse management through AI.",
      imgUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      linkText: "View Solutions",
      href: "/solutions",
    },
    {
      title: "IoT & Connected Devices",
      desc: "Transforming environments with smart sensors, real-time analytics, and edge processing.",
      imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      linkText: "Case Study",
      href: "/case-studies",
    },
    {
      title: "Real Estate & PropTech",
      desc: "Modernizing property management and virtual tours through connected digital platforms.",
      imgUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      linkText: "View Solutions",
      href: "/solutions",
      colSpan: "lg:col-span-2",
    },
    {
      title: "Drone & UAV Solutions",
      desc: "Empowering aerial data collection, mapping, and automated surveying operations.",
      imgUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
      linkText: "Case Study",
      href: "/case-studies",
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover blur-[2px] scale-[1.02]"
            alt="Global Industries Background"
            src="/assets/industry.png"
          />
          <div className="absolute inset-0 bg-enterprise-blue-dark/40"></div>
        </div>
        <div className="relative z-10 max-w-container-max-width mx-auto px-6 md:px-margin-desktop flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#F5A623]"></div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-wide uppercase">
                Global Sector Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white leading-tight font-bold tracking-tight lg:whitespace-nowrap">
              Providing Highly Specialized Solutions <br />
              <span className="text-[#F5A623]">For Every Sector</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mt-6">
              Delivering precision-engineered automation across diverse sectors. SentientWare combines deep domain expertise with cutting-edge artificial intelligence to solve the world&apos;s most complex industrial, financial, and healthcare challenges.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                className="bg-metallic-gold-light text-enterprise-blue-dark px-8 py-4 font-label-bold flex items-center gap-2 group transition-all rounded hover:bg-white text-center"
                href="#industries-grid"
              >
                Explore Sectors
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid Section */}
      <section
        className="py-32 px-6 md:px-margin-desktop max-w-container-max-width mx-auto scroll-mt-20"
        id="industries-grid"
      >
        <div className="mb-20 text-center space-y-4">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary">Engineered for Success</h2>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            From legacy modernization to greenfield AI implementations, we deliver measurable business outcomes tailored to your sector&apos;s unique constraints and opportunities.
          </p>
        </div>

        {/* Bento-style Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className={`group relative h-96 overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant hover:shadow-xl transition-all duration-500 ${
                sector.colSpan || ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${sector.imgUrl}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-headline-md text-xl md:text-headline-md text-on-primary mb-2">
                  {sector.title}
                </h3>
                <p className="text-surface-variant text-sm font-body-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {sector.desc}
                </p>
                <Link
                  className="mt-4 flex items-center gap-2 text-secondary-fixed font-label-bold text-sm"
                  href={sector.href}
                >
                  {sector.linkText} <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-enterprise-blue-dark py-24 text-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter text-center">
          <div className="p-8 border-b md:border-b-0 md:border-r border-primary-container/30 last:border-0">
            <h4 className="text-metallic-gold-light font-display-xl text-3xl md:text-4xl mb-2">15+</h4>
            <p className="text-on-primary-container font-label-bold uppercase tracking-widest text-xs">
              Verticals Served
            </p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-primary-container/30 last:border-0">
            <h4 className="text-metallic-gold-light font-display-xl text-3xl md:text-4xl mb-2">200+</h4>
            <p className="text-on-primary-container font-label-bold uppercase tracking-widest text-xs">
              Enterprise Clients
            </p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-primary-container/30 last:border-0">
            <h4 className="text-metallic-gold-light font-display-xl text-3xl md:text-4xl mb-2">30k+</h4>
            <p className="text-on-primary-container font-label-bold uppercase tracking-widest text-xs">
              Engineers
            </p>
          </div>
          <div className="p-8 last:border-0">
            <h4 className="text-metallic-gold-light font-display-xl text-3xl md:text-4xl mb-2">$1.8B</h4>
            <p className="text-on-primary-container font-label-bold uppercase tracking-widest text-xs">
              Annual Revenue
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden grid-mesh">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop flex flex-col items-center text-center">
          <h2 className="font-display-xl text-3xl md:text-headline-lg text-primary mb-8">
            Ready to Transform Your Industry?
          </h2>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mb-12">
            Partner with the engineering specialists who understand your domain as deeply as your code. Let&apos;s build the future of your sector together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="bg-enterprise-blue-dark text-on-primary px-10 py-4 font-label-bold hover:shadow-xl transition-all scale-95 active:opacity-80 rounded text-center"
            >
              Speak to an Expert
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-primary text-primary px-10 py-4 font-label-bold hover:bg-surface-grey transition-all scale-95 active:opacity-80 rounded text-center"
            >
              Browse Success Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
