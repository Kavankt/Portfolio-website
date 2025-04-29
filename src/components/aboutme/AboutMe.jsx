import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../assets/profile photo.jpg";

import { FiDownload } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full text-white px-6 lg:px-20 py-20 bg-transparent relative flex flex-col items-center justify-center gap-12"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block group">
              <span className="absolute inset-0 rounded-md bg-purple-400 opacity-30 blur-2xl group-hover:opacity-50 transition duration-300"></span>
              <span className="relative 
                               bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 
                               text-transparent bg-clip-text 
                               drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] 
                               group-hover:drop-shadow-[0_0_40px_rgba(168,85,247,0.9)] 
                               transition duration-300">
                Hello, I’m Kavan,
              </span>
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
            As a Computer Science & Engineering (Data Science) student, I’m deeply
            passionate about Web Development. I specialize in crafting dynamic,
            responsive, and user-oriented websites that not only look great but
            work seamlessly. From the initial to final execution, I
            dedicate myself to blending creativity and innovation to bring every
            project to life with purpose and precision.
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
              alt="Kavan"
              className="w-full h-full object-cover rounded-[70px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
