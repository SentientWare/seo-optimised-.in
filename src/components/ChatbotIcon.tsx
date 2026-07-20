"use client";

import React, { useState } from 'react';

export default function ChatbotIcon() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-28 right-4 lg:bottom-48 lg:right-16 bg-white border border-gray-200 text-[#004643] px-4 lg:px-6 py-3 lg:py-4 rounded-xl shadow-xl z-[101] font-medium text-sm lg:text-md animate-fade-in-up">
          This chatbot service is coming soon
          <div className="absolute -bottom-2 right-6 lg:right-12 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
        </div>
      )}
      <div
        onClick={handleClick}
        className="fixed bottom-4 right-4 w-24 h-24 lg:bottom-8 lg:right-20 lg:w-40 lg:h-40 z-[100] pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
      >
        <iframe
          src="https://lottie.host/embed/9342959c-d5cd-4d5c-955b-29d06f866b9a/CpPWk6pygF.lottie"
          className="w-full h-full border-0 bg-transparent pointer-events-none"
          title="Gemini Bot"
        ></iframe>
      </div>
    </>
  );

}
