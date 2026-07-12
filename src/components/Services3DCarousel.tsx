"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ServiceItem {
  title: string;
  icon: string;
  desc: string;
  bullets: string[];
  isHero?: boolean;
}

interface Services3DCarouselProps {
  items: ServiceItem[];
}

export default function Services3DCarousel({ items }: Services3DCarouselProps) {
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
    }, 4500);
    return () => clearInterval(interval);
  }, [isDragging, items.length]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div 
      className="relative w-full h-[600px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing my-8"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Container size matches the cards size approx */}
      <div className="relative w-[290px] sm:w-[340px] h-[440px] sm:h-[480px]">
        {items.map((item, index) => {
          let offset = index - activeIndex;
          if (offset < -Math.floor(items.length / 2)) {
            offset += items.length;
          } else if (offset > Math.floor(items.length / 2)) {
            offset -= items.length;
          }

          const isActive = offset === 0;
          const rotateZ = 0;
          const translateY = Math.abs(offset) * 15;
          const translateX = offset * 240; 
          const scale = 1 - Math.abs(offset) * 0.15;
          const zIndex = 100 - Math.abs(offset);
          const opacity = Math.abs(offset) > 2 ? 0 : (1 - Math.abs(offset) * 0.2);

          return (
            <div 
              key={index}
              onClick={() => handleCardClick(index)}
              className={`absolute top-0 left-0 w-full h-full bg-surface-container-lowest border rounded-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex flex-col group select-none p-8 ${
                item.isHero ? "border-primary/50 bg-gradient-to-br from-surface-container-lowest to-surface-container" : "border-outline-variant"
              }`}
              style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                cursor: isActive ? "default" : "pointer",
                boxShadow: isActive ? "0 20px 50px rgba(0,0,0,0.15)" : "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >
              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-primary text-on-primary rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                
                <h3 className="font-headline-md text-primary text-xl mb-3 leading-tight">{item.title}</h3>
                
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-grow">
                  {item.desc}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-on-surface text-xs font-medium">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pointer-events-auto">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 text-primary font-label-bold text-sm transition-all hover:text-secondary group/link"
                    onClick={(e) => {
                      if (!isActive) e.preventDefault();
                    }}
                  >
                    Learn More
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
