import React from 'react';

const SkillsHeader = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        My Skills
      </h1>
      
      {/* Subtitle */}
      <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
        Explore my journey through projects, certifications, and technical expertise...
      </p>
      
      {/* Divider */}
      <div className="border-b border-gray-600 mb-8 w-full max-w-xs mx-auto"></div>
      
      {/* Tabs Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Projects Tab */}
        <div className="bg-white/10 rounded-lg p-4 text-center min-w-[180px] backdrop-blur-md border border-white/20">
          <h2 className="text-xl font-bold text-white">PROJECTS</h2>
        </div>
        
        {/* Certificate Tab */}
        <div className="bg-white/10 rounded-lg p-4 text-center min-w-[180px] backdrop-blur-md border border-white/20">
          <h2 className="text-xl font-bold text-white">CERTIFICATE</h2>
        </div>
        
        {/* Tech Stack Tab */}
        <div className="bg-white/10 rounded-lg p-4 text-center min-w-[180px] backdrop-blur-md border border-white/20">
          <h2 className="text-xl font-bold text-white">TECH STACK</h2>
          <p className="text-sm text-gray-300 mt-1">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsHeader;