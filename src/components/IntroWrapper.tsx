"use client";

import React, { useState, useEffect } from "react";
import BrandIntro from "./BrandIntro";

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Optionally check session storage so it only plays once per session
  useEffect(() => {
    // Session storage check removed for testing so the video plays every refresh
  }, []);

  const handleComplete = () => {
    // Start fade out transition
    setFadeOut(true);
    
    // Remove component entirely after transition ends
    setTimeout(() => {
      setShowIntro(false);
    }, 1500); // 1.5s transition duration
  };

  return (
    <>
      {showIntro && (
        <div
          className="fixed inset-0 z-[9999] bg-black"
          style={{
            transition: "clip-path 1.5s cubic-bezier(0.65, 0, 0.35, 1)",
            clipPath: fadeOut ? "inset(0 0 100% 0)" : "inset(0 0 0 0)"
          }}
        >
          <BrandIntro onComplete={handleComplete} />
        </div>
      )}
      
      {/* 
        The homepage is behind the intro. Once the intro fades out,
        the site is completely visible and interactable.
      */}
      <div
        className={`h-full transition-all duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          showIntro && !fadeOut ? "opacity-0 blur-sm" : "opacity-100 blur-0"
        }`}
        style={{
          transform: showIntro && !fadeOut ? "translateY(4rem) scale(0.98)" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
