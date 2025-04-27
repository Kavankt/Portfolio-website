import React, { useState } from "react";
import CardProject from "../CardProject";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleSeeMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            Title={project.Title}
            Description={project.Description}
            Img={project.Img}
            ProjectLink={project.ProjectLink}
          />
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="flex items-center gap-2 px-6 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white/80 transition-all duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
