"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    industry: "AI & Security",
    title: "Developing a Real-Time AI Surveillance System for Intelligent Threat Detection",
    desc: "Designed a computer vision platform capable of detecting weapons in live video feeds and generating instant alerts.",
    image: "/assets/cs_ai_surveillance.png",
    icon: null,
  },
  {
    id: 2,
    industry: "Education",
    title: "Developing a Scalable Learning Management Platform for Modern Educational Institutions",
    desc: "Created a centralized LMS that simplifies academic operations, improves collaboration, and streamlines course management.",
    image: "/assets/cs_lms.png",
    icon: null,
  },
  {
    id: 3,
    industry: "Data Analytics",
    title: "Automating Business Reporting Through Interactive Power BI Analytics",
    desc: "Reduced manual reporting efforts while enabling real-time performance monitoring across departments.",
    image: "/assets/cs_power_bi.png",
    icon: null,
  },
  {
    id: 4,
    industry: "Enterprise SaaS",
    title: "Engineering a Multi-Tenant SaaS Platform for Enterprise Workflow Automation",
    desc: "Developed a cloud-native SaaS platform that automates business operations with secure multi-tenant architecture, role-based access control, and scalable infrastructure.",
    image: "/assets/cs_saas.png",
    icon: null,
  },
  {
    id: 5,
    industry: "Sales Intelligence",
    title: "Designing an Interactive Sales Intelligence Dashboard for Data-Driven Decision Making",
    desc: "Built executive dashboards that transformed complex sales data into actionable business insights, enabling organizations to make faster and smarter decisions.",
    image: "/assets/cs_sales.png",
    icon: null,
  },
  {
    id: 6,
    industry: "Hospitality",
    title: "Transforming a Local Restaurant into a Digital-First Customer Experience",
    desc: "Designed and developed a modern, responsive restaurant website that enhanced online visibility, showcased digital menus, simplified customer engagement, and strengthened brand presence.",
    image: "/assets/cs_restaurant.png",
    icon: null,
  },
];

export default function CaseStudies3DCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setStartX(clientX);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const dx = clientX - startX;
    
    // Threshold to trigger next/prev
    if (dx > 50) {
      setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setStartX(clientX);
      setIsDragging(false);
    } else if (dx < -50) {
      setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setStartX(clientX);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Auto-rotation
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div 
      className="relative w-full h-[650px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing my-12"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="relative w-[320px] h-[480px]">
        {items.map((item, index) => {
          // Calculate circular offset
          let offset = index - activeIndex;
          if (offset < -Math.floor(items.length / 2)) {
            offset += items.length;
          } else if (offset > Math.floor(items.length / 2)) {
            offset -= items.length;
          }

          const isActive = offset === 0;
          const rotateZ = 0; // Removed tilt to keep cards straight
          const translateY = Math.abs(offset) * 20; // Slightly reduced push down for straight cards
          const translateX = offset * 220; // Spread out sides
          const scale = 1 - Math.abs(offset) * 0.1;
          const zIndex = 100 - Math.abs(offset);
          const opacity = Math.abs(offset) > 2 ? 0 : 1;

          return (
            <div 
              key={item.id}
              onClick={() => handleCardClick(index)}
              className="absolute top-0 left-0 w-full h-full bg-surface border border-surface-grey rounded shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex flex-col group select-none"
              style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                cursor: isActive ? "default" : "pointer",
                boxShadow: isActive ? "0 20px 50px rgba(0,0,0,0.3)" : "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              {/* Card Header (Image or Icon) */}
              <div className="h-56 relative overflow-hidden shrink-0 pointer-events-none">
                {item.image ? (
                  <>
                    <Image src={item.image} alt={item.title} fill className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" draggable="false" />
                  </>
                ) : (
                  <div className="w-full h-full bg-enterprise-blue-dark flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-6xl opacity-30">{item.icon}</span>
                  </div>
                )}
                <span className="absolute top-4 left-4 bg-primary text-white text-caption px-3 py-1 font-label-bold uppercase shadow-md">
                  {item.industry}
                </span>
              </div>
              
              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h4 className="font-headline-md text-primary mb-3 leading-tight line-clamp-3 pointer-events-none">
                  {item.title}
                </h4>
                <p className="text-text-muted mb-8 font-body-md text-sm line-clamp-3 pointer-events-none">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <Link
                    href="/case-studies"
                    className="text-primary font-label-bold inline-flex items-center gap-2 transition-colors hover:text-metallic-gold-light"
                    onDragStart={(e) => e.preventDefault()}
                    onClick={(e) => { if(!isActive) e.preventDefault(); }}
                  >
                    Read Story{" "}
                    <span className="material-symbols-outlined text-base">
                      trending_flat
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Interaction Hint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3 text-surface-variant font-label-bold uppercase tracking-widest pointer-events-none">
        <span className="material-symbols-outlined text-xl animate-pulse">swipe</span>
        <span className="text-sm">Swipe or Click Cards</span>
      </div>
    </div>
  );
}
