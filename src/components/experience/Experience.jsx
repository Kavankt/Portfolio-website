import React from 'react';

const experiences = [
  {
    company: "CoE Digital Forensics Intelligence, Sahyadri Mangalore",
    role: "Intern",
    description: `Analyzed datasets with over 100,000 entries during a data science internship. 
Created visualizations to highlight key trends and implemented machine learning models 
that improved prediction accuracy by 15%.`,
    logo: "/assets/sahyadri-logo.png", // Update this path
    tech: ["Python", "Data Science", "Machine Learning", "Visualization"]
  },
  {
    company: "Ukshati Technologies Pvt Ltd, Mangalore",
    role: "Intern",
    description: `Developing and maintaining cross-platform mobile applications using React Native. 
Collaborating with cross-functional teams to design and implement application features, 
ensuring smooth user experiences. Enhancing app performance and resolving bugs to optimize functionality.`,
    logo: "/assets/ukshati-logo.png", // Update this path
    tech: ["React Native", "MySQL", "Node.js"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-10">
            <img src={exp.logo} alt={exp.company} className="w-32 h-32 object-contain" />
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold">
                {exp.role} – <span className="font-medium">{exp.company}</span>
              </h3>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <div className="flex flex-wrap mt-4 gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-900 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
