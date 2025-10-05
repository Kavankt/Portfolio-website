import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // ✅ Import Link
import profilePic from "../../assets/profile photo.jpg";
import { FiDownload } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 flex items-center justify-center scroll-mt-20 text-white"
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="max-w-6xl w-full">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                Hello, I'm Kavan,
              </span>
            </h3>

            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 px-1 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
             Computer Science & Engineering (Data Science) professional passionate about Web Development, specializing in creating dynamic, responsive, and high-performance web applications. Leveraging modern frameworks like React and Next.js, I combine creativity, technical precision, and a data-driven approach to design solutions that are both visually engaging and functionally robust. My work focuses on building user-centric, scalable, and maintainable applications that transform complex problems into seamless digital experiences, delivering real value to users.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {/* Download CV Button */}
              <motion.a
                href="/cv.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(114, 94, 255, 0.4)" }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 font-medium text-sm sm:text-base transition-all duration-300"
              >
                <FiDownload /> Download CV
              </motion.a>

              {/* Smooth Scroll to Skills/Projects Section */}
              <Link
                to="skills"      // ✅ ID of your Skills/Projects section
                smooth={true}    // smooth scroll
                duration={700}   // duration in ms
                offset={-80}     // adjust for header height
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(114, 94, 255, 0.3)" }}
                  className="border border-purple-500 text-purple-400 px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm sm:text-base font-medium"
                >
                  <FaEye /> View Projects
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: 4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-64 h-80 sm:w-72 sm:h-96 rounded-[45px] shadow-2xl overflow-hidden"
            >
              <img
                src={profilePic}
                alt="Kavan"
                className="w-full h-full object-cover rounded-[45px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
