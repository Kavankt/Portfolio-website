import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { HiCheckCircle, HiOutlineExternalLink } from "react-icons/hi";
import { FaTools, FaGithub, FaUserTie } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="text-2xl">Project not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 sm:px-10 py-12 text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
          <SiOpenproject className="inline-block mr-2 text-pink-400" />
          {project.Title}
        </h1>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-xl mb-8 border-4 border-white/10 hover:scale-105 transition-transform duration-300">
          <img
            src={project.Img}
            alt={project.Title}
            className="w-full h-[250px] sm:h-[400px] object-cover rounded-2xl"
          />
        </div>

        {/* Overview Stats */}
        {project.Overview && (
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="glass-card">
              <p className="text-3xl font-bold text-pink-400 animate-pulse">
                {project.Overview.TotalFeatures}
              </p>
              <p className="text-sm text-gray-300">Features</p>
            </div>
            <div className="glass-card">
              <p className="text-3xl font-bold text-blue-400 animate-pulse">
                {project.Overview.TotalTechStacks}
              </p>
              <p className="text-sm text-gray-300">Technologies</p>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mb-12">
          <h2 className="section-title">🌐 Overview</h2>
          <p className="text-gray-300 leading-relaxed">{project.Description}</p>
        </div>

        {/* Key Features */}
        {project.KeyFeatures && (
          <div className="mb-12">
            <h2 className="section-title">
              <FaTools className="text-green-400" /> Key Features
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.KeyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <HiCheckCircle className="text-green-400 w-6 h-6 mt-1 group-hover:scale-110 transition" />
                  <span className="text-gray-200 group-hover:text-white transition">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {project.TechStack && (
          <div className="mb-12">
            <h2 className="section-title">
              <HiCheckCircle className="text-blue-400" /> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.TechStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500 text-white bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-500 shadow-md hover:shadow-pink-400/50 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Internship Info */}
        {project.Internship && (
          <div className="mb-12">
            <h2 className="section-title">
              <FaUserTie className="text-yellow-400" /> Internship Highlights
            </h2>
            <blockquote className="italic text-gray-400 border-l-4 pl-4 border-yellow-500 mb-4">
              “{project.Internship.Highlight}”
            </blockquote>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-white">Role:</p>
                <p className="text-gray-300">{project.Internship.Role}</p>
              </div>
              <div>
                <p className="font-medium text-white">Responsibilities:</p>
                <ul className="list-disc list-inside text-gray-300 mt-1 space-y-1">
                  {Object.entries(project.Internship.Responsibilities).map(([area, desc], idx) => (
                    <li key={idx}>
                      <span className="font-semibold text-white">{area}:</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* GitHub Link */}
        {project.ProjectLink && (
          <div className="text-center mt-10">
            <a
              href={project.ProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/50 transition transform hover:scale-105"
            >
              <FaGithub className="text-xl" />
              View on GitHub
              <HiOutlineExternalLink className="text-xl" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
