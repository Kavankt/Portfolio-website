import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-6 text-white font-sans font-semibold text-center lg:text-md sm:text-lg sm:w-full py-4">
      {links.map(({ link, section }, idx) => (
        <li key={idx} className="relative pb-1">
          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="group inline-block"
          >
            <Link
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80} // adjust based on navbar height
              className="cursor-pointer text-white transition-colors duration-300 ease-out font-sans font-semibold"
            >
              {link}
            </Link>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan group-hover:w-full transition-all duration-500 ease-out"></span>
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
