"use client";

import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
      // Show after 3 seconds if no choice was made previously
      const timer = setTimeout(() => {
        setShow(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  // Do not render anything on the server to prevent hydration mismatch,
  // and only render the modal if `show` is true.
  if (!mounted || !show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-enterprise-blue-dark/80 backdrop-blur-md animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-10 relative overflow-hidden border border-gray-100">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-primary to-metallic-gold-light"></div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-blue-600 text-2xl">cookie</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-enterprise-blue-dark">We Value Your Privacy</h2>
            <p className="text-gray-500 text-sm mt-1">Manage your cookie preferences</p>
          </div>
        </div>
        
        <div className="text-gray-600 text-base leading-relaxed mb-8 space-y-4">
          <p>
            SentientWare uses cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
          </p>
          <p>
            By clicking <strong className="text-gray-800">"Accept All"</strong>, you consent to our use of cookies. You can choose to decline non-essential cookies by clicking <strong className="text-gray-800">"Decline"</strong>. Your choice will be saved for future visits.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-end pt-4 border-t border-gray-100">
          <button 
            onClick={handleDecline}
            className="w-full sm:w-auto px-6 py-3 text-gray-600 font-semibold bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="w-full sm:w-auto px-8 py-3 bg-enterprise-blue-dark text-white font-semibold rounded-lg hover:bg-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
