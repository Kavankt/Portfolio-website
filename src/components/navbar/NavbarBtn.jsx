import React from 'react';
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
      <button className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl text-white font-semibold
        border border-cyan-400 bg-[#0b0f1a]/80 backdrop-blur-md
        shadow-[0_0_12px_rgba(0,255,255,0.3)]
        hover:shadow-[0_0_25px_rgba(0,255,255,0.8)]
        transition-all duration-300 ease-in-out overflow-hidden group">

        {/* Glowing gradient effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-orange-500/10 blur-md opacity-60 group-hover:opacity-90 transition-all duration-300"></span>

        {/* Button label */}
        <span className="z-10">Resume</span>

        {/* Icon on medium+ screens */}
        <span className="z-10 hidden md:inline-block">
          <MdCloudDownload />
        </span>
      </button>
    </Link>
  );
};

export default NavbarBtn;
