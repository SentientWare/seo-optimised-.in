import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Sentientware Company Logo */}
      <img 
        src="https://career.sentientware.in/logo.png" 
        alt="Sentientware Logo" 
        className="w-20 h-20 object-contain flex-shrink-0 -mr-4"
      />
      
      {showText && (
        <span className="font-headline-md text-2xl font-bold tracking-tight text-blue-700">
          Sentientware
        </span>
      )}
    </div>
  );
}
