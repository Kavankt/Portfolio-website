import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import profilePic from "../../assets/profile photo.jpg"; 

const HeroMain = () => {
  return (
    <section className="w-full min-h-screen text-white flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 relative">
      {/* Left Section */}
      <div className="flex-1 text-center lg:text-left mt-16 lg:mt-0">
        <h1 className="text-5xl font-extrabold leading-tight">
          Full<span className="text-purple-500">Stack</span><br />
          <span className="text-purple-500">Developer</span>
        </h1>
        <p className="mt-4 text-xl font-medium">Computer Science (Data Science)</p>
        <p className="mt-2 text-sm text-gray-300 max-w-md">
          Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["JavaScript", "NextJS", "Python", "Flask", "Docker"].map((tech) => (
            <span key={tech} className="bg-zinc-800 px-4 py-2 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="bg-[#18181B] border border-purple-500 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-500 transition"
          >
            Projects <FiExternalLink />
          </a>
          <a
            href="#contact"
            className="bg-purple-600 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition"
          >
            Contact <MdEmail />
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-6 justify-center lg:justify-start">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Section - Profile Picture */}
      <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-[400px] h-auto rounded-2xl shadow-lg object-contain"
        />
      </div>
    </section>
  );
};

export default HeroMain;
