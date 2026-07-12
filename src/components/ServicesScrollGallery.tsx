"use client";

import React from "react";
import Link from "next/link";

interface ServiceItem {
  title: string;
  icon: string;
  desc: string;
  bullets: string[];
  isHero?: boolean;
  image?: string;
}

interface ServicesScrollGalleryProps {
  items: ServiceItem[];
}

export default function ServicesScrollGallery({ items }: ServicesScrollGalleryProps) {
  return (
    <div className="w-full relative pb-32">
      {/* We add a large padding bottom so the last card has room to scroll */}
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 flex flex-col gap-8 md:gap-20 relative">
        {items.map((item, index) => {
          // Calculate the sticky top position so they stack neatly like a deck of cards
          // For mobile, we might use a smaller offset
          const topOffset = 120 + index * 20; 

          return (
            <div
              key={index}
              className="sticky w-full"
              style={{
                top: `${topOffset}px`,
                zIndex: index,
              }}
            >
              {/* Card Container */}
              <div 
                className={`w-full overflow-hidden rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border bg-surface-container-lowest transition-all duration-500 flex flex-col md:flex-row ${
                  item.isHero 
                    ? "border-primary/50 bg-gradient-to-br from-surface-container-lowest to-surface-container" 
                    : "border-outline-variant"
                }`}
              >
                {/* Left side: Image & Title */}
                <div className={`relative p-8 md:p-12 flex flex-col justify-end ${item.isHero ? "md:w-1/2 min-h-[400px]" : "md:w-2/5 min-h-[300px]"} border-b md:border-b-0 md:border-r border-outline-variant/30 overflow-hidden group/image`}>
                  
                  {item.image && (
                    <>
                      <img 
                        src={encodeURI(item.image)} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110" 
                      />
                      {/* Dark gradient overlay so white text is always readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                      {/* Optional subtle tint */}
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                    </>
                  )}

                  <div className="relative z-10">
                    <div className={`flex items-center justify-center bg-primary text-white rounded-2xl shadow-xl mb-6 backdrop-blur-sm border border-white/20 ${item.isHero ? "w-20 h-20" : "w-14 h-14"}`}>
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <h3 className={`font-headline-md text-white leading-tight drop-shadow-lg ${item.isHero ? "text-3xl md:text-5xl font-bold" : "text-2xl md:text-3xl"}`}>
                      {item.title}
                    </h3>
                    {item.isHero && (
                      <div className="mt-4 inline-block bg-metallic-gold-light text-black px-4 py-1.5 rounded-full text-sm font-label-bold uppercase tracking-wider shadow-md">
                        Hero Service
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side: Description & Bullets */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${item.isHero ? "md:w-1/2" : "md:w-3/5"}`}>
                  <p className={`text-on-surface-variant leading-relaxed mb-10 ${item.isHero ? "text-lg md:text-xl font-medium" : "text-base"}`}>
                    {item.desc}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-on-surface font-medium">
                        <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-outline-variant/30">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-2 text-primary font-label-bold transition-all hover:text-secondary group/link"
                    >
                      <span className="text-lg">Explore Capabilities</span>
                      <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
