import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Sentientware Company Logo */}
      <img 
        src="/favicon.ico" 
        alt="Sentientware Logo" 
        className="w-14 h-14 object-contain flex-shrink-0"
      />
      
      {showText && (
        <span className="font-headline-md text-2xl font-bold tracking-tight text-blue-700">
          Sentientware
        </span>
      )}
    </div>
  );
}
