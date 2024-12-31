"use client"
import React, { useState, useEffect } from 'react';

const FloatingMessages = () => {
  const [showCards, setShowCards] = useState([false, false, false, false, false]);

  useEffect(() => {
    showCards.forEach((_, index) => {
      setTimeout(() => {
        setShowCards(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 2000);
    });
  }, );

  const patientData = [
    { name: "Sarah Johnson", age: "34", type: "Regular Checkup", time: "10:30 AM" },
    { name: "Mike Chen", age: "45", type: "Cardiology", time: "11:45 AM" },
    { name: "Emma Davis", age: "28", type: "Dental", time: "2:15 PM" },
    { name: "James Wilson", age: "52", type: "Orthopedic", time: "3:30 PM" },
    { name: "Lisa Brown", age: "41", type: "Neurology", time: "4:45 PM" }
  ];

  return (
    <div className="relative h-[32rem] max-w-7xl mx-auto -mt-40 md:-mt-60 lg:-mt-80">
      {/* Message bubbles and cards */}
      {[0, 1, 2, 3, 4].map((index) => (
        <div key={index} className="absolute" style={{ left: `${index * 15}%`, top: `${index * 8}%` }}>
          {/* Message bubble */}
          <div className={`w-32 h-16 bg-gray-100 rounded-lg shadow-md animate-float-${index + 1} opacity-80`}>
            <div className="w-3/4 h-2 bg-gray-300 rounded-full m-4"></div>
            <div className="w-1/2 h-2 bg-gray-300 rounded-full mx-4"></div>
          </div>
          
          {/* Patient card */}
          <div 
            className={`absolute top-20 left-0 w-64 bg-white rounded-xl shadow-lg p-4 transition-all duration-1000
              ${showCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-semibold">{patientData[index].name[0]}</span>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800">{patientData[index].name}</h3>
                <p className="text-sm text-gray-500">Age: {patientData[index].age}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Appointment</span>
                <span className="text-gray-800">{patientData[index].type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Time</span>
                <span className="text-gray-800">{patientData[index].time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bouncing ball */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-blue-400 rounded-full animate-bounce-custom shadow-lg"></div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(-2deg); }
          50% { transform: translate(-20px, -30px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(2deg); }
          50% { transform: translate(30px, -20px) rotate(-2deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(-1deg); }
          50% { transform: translate(-25px, -25px) rotate(1deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(1deg); }
          50% { transform: translate(20px, -35px) rotate(-1deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0) rotate(-2deg); }
          50% { transform: translate(-15px, -25px) rotate(2deg); }
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        :global(.animate-float-1) { animation: float-1 6s ease-in-out infinite; }
        :global(.animate-float-2) { animation: float-2 7s ease-in-out infinite; }
        :global(.animate-float-3) { animation: float-3 8s ease-in-out infinite; }
        :global(.animate-float-4) { animation: float-4 7.5s ease-in-out infinite; }
        :global(.animate-float-5) { animation: float-5 6.5s ease-in-out infinite; }
        :global(.animate-bounce-custom) { 
          animation: bounce-custom 2s ease-in-out infinite;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }
      `}</style>
    </div>
  );
};

export default FloatingMessages;