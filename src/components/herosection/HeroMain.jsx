import React, { useState, useEffect } from "react";
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
      className="
        w-full
        min-h-screen
        pt-20              /* offset below fixed navbar (≈80px) */
        flex flex-col-reverse lg:flex-row
        items-center justify-center
        px-4 md:px-10 lg:px-20
        pb-10             /* bottom padding */
        gap-10 text-white relative
      "
    >
      {/* Left Section */}
      <div className="flex-1 w-full text-center lg:text-left">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          <span className="text-white font-sans">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
          <br />
          {/* Glowing Developer Text */}
          <span className="relative inline-block mt-4 group">
            <span className="absolute inset-0 rounded-md bg-blue-400 opacity-30 blur-2xl group-hover:opacity-50 transition duration-300"></span>
            <span className="relative text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text drop-shadow-[0_0_25px_#60a5fa] group-hover:drop-shadow-[0_0_40px_#60a5fa] transition duration-300">
              Developer
            </span>
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl font-medium text-gray-300">
          Computer Science & Engineering (Data Science)
        </p>
        <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-md mx-auto lg:mx-0">
          As a full-stack developer and data enthusiast, I'm constantly exploring new tools to build smarter, modern web solutions.
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
          {["ReactJS", "NextJS", "Python", "MySQL", "Jest"].map((tech) => (
            <div key={tech} className="relative group">
              <div className="bg-transparent text-white px-4 py-2 rounded-md whitespace-nowrap transition-all duration-300 relative hover:bg-blue-600/30 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(59,130,246,0.5)] font-semibold border-2 border-white">
                {tech}
                <div className="absolute inset-0 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-400/20 via-blue-400/10 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="bg-purple-600 px-4 py-1 rounded-sm flex items-center gap-2 hover:bg-purple-700 hover:shadow-[0_0_10px_2px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Projects <FiExternalLink />
          </a>
          <a
            href="#contact"
            className="bg-purple-600 px-4 py-1 rounded-sm flex items-center gap-2 hover:bg-purple-700 hover:shadow-[0_0_10px_2px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Contact <MdEmail />
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-6 justify-center lg:justify-start">
          <a
            href="https://github.com/Kavankt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kavan-k-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/kavannn._"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Section - Profile Picture */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <img
          src={profilePic}
          alt="Profile"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px] h-auto rounded-sm shadow-lg object-contain"
        />
      </div>
    </section>
  );
};

export default HeroMain;
