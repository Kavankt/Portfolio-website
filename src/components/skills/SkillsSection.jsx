import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import Tabs from './Tabs';
import ProjectTab from './ProjectTab';
import CertificatesTab from '../skills/certificates/CertificatesTab';
import TechStackTab from './TechStackTab';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <Element name="skills">
      <section className="w-full bg-transparent py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          {/* Title animation */}
          <motion.h2
            className="text-4xl font-bold mb-4 text-center text-white"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-center text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore my journey through projects, certifications, and technical expertise...
          </motion.p>

          {/* Tabs */}
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Tab Content */}
          <div className="mt-10">
            {activeTab === 'projects' && <ProjectTab />}
            {activeTab === 'certificates' && <CertificatesTab />}
            {activeTab === 'techstacks' && <TechStackTab />}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default SkillsSection;
