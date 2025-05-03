import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../assets/profile photo.jpg";
import { FiDownload } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 flex items-center justify-center scroll-mt-20"
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="max-w-6xl w-full">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                Hello, I'm Kavan,
              </span>
            </h3>

            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 px-1 sm:px-0">
              As a Computer Science & Engineering (Data Science) student, I’m deeply passionate about Web Development. I specialize in crafting dynamic, responsive, and user-oriented websites that not only look great but work seamlessly. From initial ideas to final execution, I dedicate myself to blending creativity and innovation to bring every project to life with purpose and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/cv.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FiDownload /> Download CV
              </a>
              <a
                href="#projects"
                className="border border-blue-500 text-blue-400 px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition"
              >
                <FaEye /> View Projects
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center w-full">
            <div className="w-64 h-80 sm:w-72 sm:h-96 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-500 p-1 rounded-[50px] shadow-lg">
              <img
                src={profilePic}
                alt="Kavan"
                className="w-full h-full object-cover rounded-[45px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
