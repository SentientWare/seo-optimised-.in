"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Custom AI Models", desc: "Successfully deployed and scaled for complex enterprise automation and real-time decision making." },
  { value: "99.9%", label: "Reliability", desc: "Guaranteed uptime for mission-critical systems, ensuring uninterrupted global business operations." },
  { value: "10x", label: "Efficiency", desc: "Massive workflow improvements achieved by eliminating manual redundancies and leveraging ML." },
  { value: "100%", label: "Compliance", desc: "Fully adhering to global data standards, strict privacy regulations, and robust infrastructure auditing." },
  { value: "24/7", label: "Monitoring", desc: "Continuous AI-driven security tracking, anomaly detection, and automated incident response." },
  { value: "Zero", label: "Trust Architecture", desc: "Secure by design networks that authenticate and authorize every single request seamlessly." },
];

export default function IndustryStatsCarousel() {
  const duplicatedStats = [...stats, ...stats, ...stats, ...stats];
  const containerRef = useRef<HTMLDivElement>(null);

  // 60FPS loop to dynamically rotate cards based on screen position
  useEffect(() => {
    let animationFrameId: number;

    const updateCards = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".carousel-card-wrapper");
      const centerX = window.innerWidth / 2;

      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const distFromCenter = cardCenterX - centerX;

        // Calculate rotation: 
        const maxDist = window.innerWidth * 0.8;
        let rotateY = (distFromCenter / maxDist) * -80;
        
        // Clamp rotation
        if (rotateY > 60) rotateY = 60;
        if (rotateY < -60) rotateY = -60;

        // Scale up slightly in the center
        let scale = 1 - Math.abs(distFromCenter / maxDist) * 0.3;
        if (scale < 0.75) scale = 0.75;
        
        // Fade out edges
        let opacity = 1 - Math.abs(distFromCenter / maxDist) * 0.8;
        if (opacity < 0.1) opacity = 0.1;

        const inner = card.querySelector(".carousel-card-inner");
        if (inner) {
          inner.style.transform = `perspective(1000px) rotateY(${rotateY}deg) scale(${scale})`;
          inner.style.opacity = opacity.toString();
        }
      });

      animationFrameId = requestAnimationFrame(updateCards);
    };

    updateCards();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-enterprise-blue-dark py-8 text-white overflow-hidden relative border-y border-primary/20 flex flex-col justify-center min-h-[350px]">
      {/* Subtle deep blue background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[300px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 text-center mb-4 relative z-20">
        <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1 block">
          Scale & Precision
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-white tracking-tight drop-shadow-md">
          Industry Metrics
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-xs">
          Unprecedented scale powered by next-generation architecture.
        </p>
      </div>

      {/* Diagonal Marquee Container */}
      <div className="relative w-[150vw] left-[-25vw] h-[300px] flex items-center z-10 origin-center -rotate-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_20%,_black_80%,transparent_100%)]">
        <motion.div
          ref={containerRef}
          className="flex gap-6 px-4 absolute left-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedStats.map((stat, idx) => (
            // The wrapper acts as a stable layout spacer and counter-rotates to stay upright
            <div key={idx} className="carousel-card-wrapper relative shrink-0 w-[200px] h-[250px] rotate-12">
              
              {/* The inner card gets 3D transformed dynamically by JS */}
              <div 
                className="carousel-card-inner absolute inset-0 bg-[#F0EDE5] rounded-xl overflow-hidden transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] border border-[#004643]/10 group-hover:shadow-[0_15px_30px_-5px_rgba(0,70,67,0.4)] group-hover:-translate-y-1"
              >
                {/* Cyprus Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004643]"></div>

                {/* Card Content - Split Top & Bottom */}
                <div className="p-5 h-full flex flex-col justify-between pt-6">
                  
                  {/* Top: Large Value */}
                  <div>
                    <h4 className="font-extrabold text-4xl tracking-tight text-[#004643]">
                      {stat.value}
                    </h4>
                  </div>
                  
                  {/* Bottom: Label & Description */}
                  <div>
                    <h5 className="text-[#004643] font-bold text-sm mb-1 leading-tight border-b border-[#004643]/20 pb-1">
                      {stat.label}
                    </h5>
                    <p className="text-[#004643]/80 text-[10px] font-medium leading-snug">
                      {stat.desc}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
