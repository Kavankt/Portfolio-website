import React from 'react';
import { motion } from 'framer-motion';
import InternshipLogo from '../../assets/Internship.png';
import UkshatiLogo from '../../assets/logowithleaf.png';

const experiences = [
  {
    company: "CoE Digital Forensics Intelligence, Sahyadri Mangalore",
    role: "Intern",
    description: `Contributed to a research-driven internship under the Innoventure initiative, focusing on the topic "A Machine Learning Approach for Malware Detection". Explored advanced data science methodologies, built and tested classification models, and studied real-world malware datasets to uncover malicious behavior patterns. Worked under expert mentorship from the CoE in Digital Forensics and Cyber Security.`,
    logo: InternshipLogo,
    tech: ["Python", "Data Science", "Machine Learning", "Cyber Security"]
  },
  {
    company: "Ukshati Technologies Pvt Ltd, Mangalore",
    role: "Intern",
    description: `Developed and maintained cross-platform mobile applications using React Native. Collaborated with cross-functional teams to implement features and enhance app performance, ensuring smooth user experience.`,
    logo: UkshatiLogo,
    tech: ["React Native", "MySQL", "Node.js"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="text-white py-12 px-4 md:px-16">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-8 md:gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 md:p-6 rounded-xl border border-gray-700 bg-gray-900/70 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-24 h-24 md:w-28 md:h-28 object-contain flex-shrink-0"
            />
            
            {/* Info */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold">
                {exp.role} – <span className="text-purple-400 font-medium">{exp.company}</span>
              </h3>
              <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap mt-3 gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-800/80 text-purple-200 px-2 py-1 rounded-full text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
