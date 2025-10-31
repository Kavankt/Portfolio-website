import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import profilePic from "../../assets/bgimg2.png";

const HeroMain = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["FullStack", "Frontend", "Backend"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenWords = 1500;

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentWord.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentWordIndex]);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 md:px-10 lg:px-20 pt-20 pb-10 text-white relative overflow-hidden"
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 w-full text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-white font-sans">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
          <br />
          <motion.span
            className="relative inline-block mt-4 text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(139,92,246,0.7)]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Developer
          </motion.span>
        </h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl font-medium text-gray-300 max-w-lg mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Computer Science & Data Science graduate specializing in creating scalable, innovative web applications that prioritize performance and user experience.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[ "HTML", "CSS","ReactJS", "Javascript", "MySQL"].map((tech) => (
            <motion.div
              key={tech}
              className="border border-white px-3 py-1 rounded-md text-sm sm:text-base font-semibold hover:bg-purple-600/30 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link
            to="skills"
            smooth={true}
            duration={800}
            offset={-80}
            className="bg-purple-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer text-sm sm:text-base"
          >
            Projects <FiExternalLink />
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            className="bg-purple-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer text-sm sm:text-base"
          >
            Contact <MdEmail />
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="mt-6 flex gap-6 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a
            href="https://github.com/Kavankt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kavan-k-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/kavannn._"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section - Profile Picture */}
      <motion.div
        className="flex-1 w-full flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px] h-auto rounded-lg object-contain"
        />
      </motion.div>
    </section>
  );
};

export default HeroMain;