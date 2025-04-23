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
    description: `Developing and maintaining cross-platform mobile applications using React Native. Collaborating with cross-functional teams to design and implement application features, ensuring smooth user experiences. Enhancing app performance and resolving bugs to optimize functionality.`,
    logo: UkshatiLogo,
    tech: ["React Native", "MySQL", "Node.js"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="text-white py-16 px-6 md:px-20">
      {/* Title with motion from top */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-10 bg-[#111827] p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.5)] border border-purple-900"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-36 h-36 object-contain"
            />
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold">
                {exp.role} – <span className="font-medium text-purple-400">{exp.company}</span>
              </h3>
              <p className="mt-2 text-gray-300 whitespace-pre-line">{exp.description}</p>
              <div className="flex flex-wrap mt-4 gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-900 px-3 py-1 rounded-full text-sm">
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
