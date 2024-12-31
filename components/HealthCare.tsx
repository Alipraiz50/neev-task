import React from 'react';

const HealthcareFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Medically Fine-Tuned Models",
      description: "Our transcription and summarization models ensure accurate capture of clinical terms, diagnoses, and treatment details."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "RAG Architecture",
      description: "Our Retrieval Augmented Graph (RAG) powered systems enhance accuracy in real-time transcriptions and summaries."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure, Grade-A Data Privacy",
      description: "We prioritize patient confidentiality with robust, Grade-A data encryption and storage, safeguarding sensitive information at every step."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 flex items-center justify-center">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-500">AI</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Precision AI for <span className="text-blue-500">Modern Healthcare</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Custom-built intelligence to simplify, secure, and redefine patient care.
            </p>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareFeatures;