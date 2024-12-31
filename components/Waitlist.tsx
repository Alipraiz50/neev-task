"use client"
import React, { useState } from 'react';

import { MessageCircle } from 'lucide-react';

const WaitlistPage = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add email submission logic here
    setEmail('');
  };

  return (
    <div className="min-h-20px bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-3">
            Join the Future of Healthcare
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Be among the first to experience the next generation of healthcare technology
          </p>
          
          
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
        </div>
      </main>

      <footer className="p-6 bg-white/95 backdrop-blur flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-800 text-2xl font-bold">neev</div>
        
        <div className="flex items-center gap-6 text-gray-600 my-4 md:my-0">
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
          Talk to Us
          <MessageCircle className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
};

export default WaitlistPage;