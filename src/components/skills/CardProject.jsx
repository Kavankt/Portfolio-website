import React, { useState } from "react";
import CardProject from "./CardProject";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

const ProjectTab = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleSeeMore = () => setVisibleProjects((prev) => prev + 3);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, x: -20 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.slice(0, visibleProjects).map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover="hover"
          >
            <CardProject
              id={project.id}
              Title={project.Title}
              Description={project.Description}
              Img={project.Img}
              ProjectLink={project.ProjectLink}
            />
          </motion.div>
        ))}
      </motion.div>

      {visibleProjects < projects.length && (
        <motion.div
          className="flex justify-center mt-10"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSeeMore}
            className="flex items-center gap-2 px-6 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white/80 transition-all duration-300"
          >
            See More
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectTab;
