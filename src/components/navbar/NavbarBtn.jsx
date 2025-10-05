import React from "react";
import { MdCloudDownload } from "react-icons/md";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      offset={-120}
    >
      <button className="
        relative flex items-center gap-2 px-4 py-1.5
        rounded-xl text-white font-sans font-medium text-sm md:text-base
        bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600
        shadow-md shadow-cyan-500/40
        border-2 border-transparent hover:border-cyan-400
        hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]
        transition-all duration-300 ease-in-out
        overflow-hidden group
      ">
        {/* Subtle hover glow effect */}
        <span className="
          absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
          opacity-10 group-hover:opacity-30 blur-lg transition-all duration-500
        "></span>

        {/* Button Text */}
        <span className="z-10">Resume</span>

        {/* Icon */}
        <span className="z-10 hidden md:inline-flex text-lg">
          <MdCloudDownload />
        </span>
      </button>
    </Link>
  );
};

export default NavbarBtn;
