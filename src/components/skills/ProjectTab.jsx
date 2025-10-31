import React, { useState, useEffect } from "react";
import CardProject from "./CardProject";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

const ProjectTab = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setVisibleProjects(6);
    }
  }, []);

  const handleSeeMore = () => {
    if (visibleProjects < projects.length) {
      setVisibleProjects(projects.length);
    } else {
      setVisibleProjects(window.innerWidth <= 640 ? 6 : 3);
    }
  };

  const handleViewDetails = (project) => setSelectedProject(project);
  const handleCloseDetails = () => setSelectedProject(null);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="py-4 px-6 sm:px-10 lg:px-20">
      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.slice(0, visibleProjects).map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <CardProject {...project} onViewDetails={() => handleViewDetails(project)} />
          </motion.div>
        ))}
      </motion.div>

      {/* See More / See Less Button */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSeeMore}
          className="px-6 py-2 rounded-md bg-white/10 hover:bg-white/20 
                     text-white/80 transition-all duration-300 text-sm sm:text-base"
        >
          {visibleProjects < projects.length ? "See More" : "See Less"}
        </motion.button>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#0f172a] border border-cyan-400/60 rounded-xl p-6 w-full max-w-lg sm:max-w-2xl text-center text-white relative shadow-xl">
            <button
              onClick={handleCloseDetails}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl leading-none"
            >
              ✕
            </button>
            <img
              src={selectedProject.Img}
              alt={selectedProject.Title}
              className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
              {selectedProject.Title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.Description}
            </p>
            <a
              href={selectedProject.ProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-cyan-400/20 border border-cyan-400/60 text-cyan-300 
                         rounded-md hover:bg-cyan-400/30 hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTab;
