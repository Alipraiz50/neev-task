import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abhinav Singh",
      role: "AI/ML Engineer",
      subtitle: "IIT Madras Alumnus",
    },
    {
      name: "Dr. Saurabh Bajpai",
      role: "Doctor",
      subtitle: "Leading Research",
    },
    {
      name: "Mayank Agarwal",
      role: "CA",
      subtitle: "SRCC Alumnus",
    },
    {
      name: "Prabesh Goyal",
      role: "Data Engineer",
      subtitle: "",
    },
    {
      name: "Ricky Bahrey",
      role: "Product Designer",
      subtitle: "",
    },
  ];

  // SVG for the arrow icon
  const ArrowIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      className="text-gray-400 group-hover:text-gray-600"
    >
      <path 
        d="M7 17L17 7M17 7H7M17 7V17" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  // SVG for the placeholder profile image
  const ProfilePlaceholder = () => (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="#E5E7EB" 
      className="rounded-full"
    >
      <rect width="64" height="64" rx="32" fill="currentColor"/>
      <path 
        d="M32 32C36.4183 32 40 28.4183 40 24C40 19.5817 36.4183 16 32 16C27.5817 16 24 19.5817 24 24C24 28.4183 27.5817 32 32 32ZM32 34C24.268 34 18 40.268 18 48H46C46 40.268 39.732 34 32 34Z"
        fill="#9CA3AF"
      />
    </svg>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-normal text-center mb-16">Meet Our Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-sm group hover:shadow-lg transition-shadow duration-200 relative border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <ProfilePlaceholder />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                {member.subtitle && (
                  <p className="text-gray-500 text-sm">{member.subtitle}</p>
                )}
              </div>
              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;