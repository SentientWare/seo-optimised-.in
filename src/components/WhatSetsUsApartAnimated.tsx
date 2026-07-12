"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARDS_DATA = [
  {
    icon: "🚀",
    floatingEmojis: ["💡", "📈", "⚙️", "🌟"],
    title: "Innovation-Driven Engineering",
    titleClass: "font-serif italic font-medium",
    desc: "We leverage cutting-edge technologies to solve your most complex business challenges. By prioritizing engineering excellence and continuous innovation, we build resilient, future-ready solutions that accelerate digital transformation.",
    bgClass: "bg-[#E85D04]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: "🤖",
    floatingEmojis: ["🧠", "⚡", "🔍"],
    title: "AI-First Innovation",
    titleClass: "font-sans font-black tracking-tight",
    desc: "From generative AI agents to predictive data analytics, we embed artificial intelligence deeply into your enterprise workflows. Our smart algorithms automate repetitive tasks and empower your teams to make faster, data-driven decisions.",
    bgClass: "bg-[#F3EBE1]",
    textColor: "text-[#2A2A2A]",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: "☁️",
    floatingEmojis: ["🌐", "🛡️", "🚀"],
    title: "Scalable & Cloud-Ready",
    titleClass: "font-sans font-bold",
    desc: "Built from the ground up for the modern cloud. We architect systems with infinite scalability, robust microservices, and 99.9% uptime SLAs, ensuring your applications can seamlessly handle massive global traffic without breaking a sweat.",
    bgClass: "bg-[#77997B]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: "🔒",
    floatingEmojis: ["🔑", "👁️", "🔥"],
    title: "Security by design",
    titleClass: "font-sans font-black text-center",
    desc: "Security isn't an afterthought—it's embedded in our DNA. We implement military-grade encryption, zero-trust architectures, and strict compliance standards (like ISO 27001) to protect your mission-critical data against evolving cyber threats.",
    bgClass: "bg-[#3B154D]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: "🤝",
    floatingEmojis: ["💼", "💬", "🎯"],
    title: "Customer-Centric Partnership",
    titleClass: "font-serif italic font-medium",
    desc: "We believe in building deep, collaborative partnerships rather than traditional vendor relationships. By aligning our technological roadmaps directly with your core business objectives, we ensure every line of code delivers measurable ROI.",
    bgClass: "bg-[#D84315]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: "🌍",
    floatingEmojis: ["🌱", "🔮", "✨"],
    title: "Future-Focused Vision",
    titleClass: "font-sans font-bold",
    desc: "We don't just build for today; we engineer for tomorrow. By continuously investing in R&D and exploring next-generation technologies like quantum computing and edge AI, we keep your business permanently ahead of the digital curve.",
    bgClass: "bg-[#1F1F1F]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  },
];

export default function WhatSetsUsApartAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse interaction state
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop/Tablet Complex Animation
    mm.add("(min-width: 768px)", () => {
      const container = containerRef.current;
      const cards = cardsRef.current;
      if (!container || cards.length !== 6) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%", // Trigger when section is 75% into view
          toggleActions: "play none none reverse", // Play automatically, reverse if they scroll back up
          onLeave: () => setAnimationComplete(true),
          onEnterBack: () => setAnimationComplete(false),
        },
      });

      cards.forEach((card, i) => {
        // Calculate offset to move all cards to the visual center (approximate)
        const row = Math.floor(i / 3);
        const col = i % 3;
        
        // Pull dots up slightly so they converge near the center text
        const yOffset = row === 0 ? -50 : -200;
        const xOffset = col === 0 ? 150 : col === 1 ? 0 : -150;

        // Phase 1: Dots (Scale 0, opacity 0 at start, then appear as dots)
        tl.fromTo(card, {
          x: xOffset,
          y: yOffset,
          scale: 0.05,
          opacity: 0,
          borderRadius: "50%",
          boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.8)",
          rotationX: 0,
          rotationY: 0,
          z: -500,
        }, {
          opacity: 1,
          z: 0,
          duration: 0.2,
          ease: "none",
        }, 0); // Start all at time 0

        // Phase 2: Unfold to full cards
        tl.to(card, {
          scale: 0.8,
          borderRadius: "0px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          rotationX: (Math.random() - 0.5) * 20,
          rotationY: (Math.random() - 0.5) * 20,
          duration: 0.6,
          ease: "power2.inOut",
        }, 0.2); // Faster sequence

        // Phase 3: Horizontal line float
        tl.to(card, {
          x: (col - 1) * 200, // Tighter horizontal line
          y: -50, // Float slightly up
          z: (Math.abs(col - 1) * -50),
          scale: 1,
          rotationX: -5,
          rotationY: (col - 1) * -5,
          duration: 0.6,
          ease: "power3.inOut",
        }, 0.8);

      });

      // Phase 4: Settle into permanent grid positions
      tl.to(cards, {
        x: 0,
        y: 0,
        z: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        borderRadius: "0px",
        duration: 0.8,
        ease: "back.out(1.2)",
      }, 1.4); // Start after Phase 3

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    });

    // Mobile Fallback
    mm.add("(max-width: 767px)", () => {
      const cards = cardsRef.current;
      gsap.set(cards, { clearProps: "all" });
      
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
      setAnimationComplete(true);
    });

    return () => mm.revert();
  }, []);

  // Phase 5: Mouse Interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    if (!animationComplete) return;
    
    const card = cardsRef.current[idx];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      z: 30,
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (idx: number) => {
    if (!animationComplete) return;
    const card = cardsRef.current[idx];
    if (!card) return;

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      z: 0,
      y: 0,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} className="py-24 bg-surface relative overflow-hidden [perspective:2000px]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        {/* Subtle Perspective Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(60deg)] origin-bottom opacity-50" />
      </div>

      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10 w-full">
        <div className="mb-10 md:mb-16 text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            The principles that define how we innovate, engineer, and deliver intelligent solutions that help organizations adapt, scale, and succeed in a rapidly evolving digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 [transform-style:preserve-3d]">
          {CARDS_DATA.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="w-full max-w-[340px] mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white relative [transform-style:preserve-3d] group flex flex-col border border-gray-100"
              style={{ willChange: "transform, opacity", borderRadius: "0px" }}
            >
              {/* Top Half (Replaces Image) */}
              <div className={`relative w-full h-[180px] p-6 flex flex-col items-center justify-center text-center ${card.bgClass}`}>
                {/* Floating Emojis for aesthetic */}
                {card.floatingEmojis.slice(0, 3).map((emoji, i) => (
                  <div 
                    key={i} 
                    className="absolute text-2xl drop-shadow-lg z-10 pointer-events-none opacity-50"
                    style={{
                      top: `${15 + i * 25}%`,
                      left: i % 2 === 0 ? "10%" : "auto",
                      right: i % 2 !== 0 ? "10%" : "auto",
                      transform: `rotate(${(i - 1) * 20}deg)`,
                    }}
                  >
                    {emoji}
                  </div>
                ))}
                
                <span className="text-4xl drop-shadow-md mb-3 relative z-20">{card.icon}</span>
                <h3 className={`text-2xl font-bold leading-tight relative z-20 ${card.textColor} drop-shadow-sm`}>
                  {card.title}
                </h3>
              </div>

              {/* Bottom Half (Body) */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Simulated Date/Meta like screenshot */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 font-medium">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span>Core Principle</span>
                </div>

                {/* Subtitle / Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2 flex-grow">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
