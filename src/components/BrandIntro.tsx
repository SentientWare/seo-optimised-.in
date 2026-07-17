"use client";

import React, { useRef, useEffect } from "react";

export default function BrandIntro({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        // If autoplay fails (e.g. browser policy), we could show a play button,
        // but for now let's just complete to unblock the user.
        console.warn("Autoplay prevented:", e);
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      });
    }
  }, [onComplete]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    // Trigger the close transition 0.6 seconds before the video finishes
    if (video.duration && video.duration - video.currentTime <= 0.6 && !completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  };

  const handleEnded = () => {
    if (!completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src="/assets/intro.mp4"
        className="w-full h-full object-contain"
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
    </div>
  );
}
