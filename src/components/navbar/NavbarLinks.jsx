import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body text-center lg:text-md sm:text-xl sm:w-full py-4">
      {links.map(({ link, section }, idx) => (
        <li key={idx} className="group relative pb-1 will-change-transform">
          <Link
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}   // adjust if your navbar overlay height
            className="cursor-pointer text-white transition duration-300 ease-out transform hover:text-cyan hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"
          >
            {link}
          </Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan group-hover:w-full transition-all duration-500 ease-out"></span>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
