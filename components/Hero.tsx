"use client"

import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
          <span className="text-2xl font-semibold text-gray-900">neev</span>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a 
            href="https://twitter.com" 
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <button className="px-4 sm:px-6 py-2 border-2 border-gray-900 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm sm:text-base">
            Careers
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 md:pt-20 text-center">
        <h1 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 max-w-4xl mx-auto leading-tight ${
            animate ? 'animate-fade-inout' : 'opacity-0'
          }`}
        >
          Connecting Patients and Providers Through{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Precision
          </span>
        </h1>
        <p 
          className={`mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${
            animate ? 'animate-fade-inout-delayed' : 'opacity-0'
          }`}
        >
          Making healthcare simple, smart, and more human centric by reducing admin work, 
          saving time, and enabling doctors to focus on what truly matters - Patients
        </p>
      </main>

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          16.67% { opacity: 1; }
          33.33% { opacity: 0; }
          50% { opacity: 1; }
          66.67% { opacity: 0; }
          83.33% { opacity: 1; }
          100% { opacity: 1; }
        }

        :global(.animate-fade-inout) {
          animation: fadeInOut 6s ease-in-out forwards;
        }

        :global(.animate-fade-inout-delayed) {
          animation: fadeInOut 6s ease-in-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

