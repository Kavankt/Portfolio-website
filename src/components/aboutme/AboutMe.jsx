import React from "react";
import profilePic from "../../assets/profile photo.jpg";

import { FiDownload } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full text-white px-6 lg:px-20 py-20 bg-transparent relative flex flex-col lg:flex-row items-center justify-center gap-12"
    >
      {/* Left content */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, my name’s <span className="text-purple-400">Kavan</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
          I'm a Computer Science (Data Science) student passionate about Web Development. I specialize in building dynamic, responsive, and user-focused websites. From idea to execution, I strive to bring innovation and creativity to every project.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="/cv.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <FiDownload /> Download CV
          </a>
          <a
            href="#projects"
            className="bg-transparent border border-blue-500 text-blue-400 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-500 hover:text-white transition"
          >
            <FaEye /> View Projects
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center relative">
        <div className="w-[280px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-500 p-1 rounded-[100px] shadow-lg">
          <img
            src={profilePic}
            alt="Jaideep N"
            className="w-full h-full object-cover rounded-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
