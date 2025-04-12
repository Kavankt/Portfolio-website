import React, { useState } from 'react';
import Tabs from './Tabs';
import ProjectTab from './ProjectTab';
import CertificatesTab from './CertificatesTab';
import TechStackTab from './TechStackTab';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section className="text-white py-12 px-4">
      <h2 className="text-center text-4xl font-bold mb-4 text-purple-400">My Skills</h2>
      <p className="text-center text-gray-300 mb-8">
        Explore my journey through projects, certifications, and technical expertise...
      </p>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="px-4">
        {activeTab === 'projects' && <ProjectTab />}
        {activeTab === 'techstack' && <TechStackTab />}
        {activeTab === 'certificates' && <CertificatesTab />}
      </div>
    </section>
  );
};

export default SkillsSection;
