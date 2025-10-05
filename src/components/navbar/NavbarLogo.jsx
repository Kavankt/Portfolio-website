import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const NavbarLogo = () => {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {/* User Icon */}
      <FaUserCircle className="text-xl sm:text-2xl text-purple-500" />

      {/* Desktop Name */}
      <h1 className="hidden lg:block text-white font-extrabold text-lg md:text-xl tracking-wide font-sans">
        KAVAN K T
      </h1>

      {/* Tablet Name */}
      <h1 className="hidden md:block lg:hidden text-white font-extrabold text-base sm:text-lg tracking-wide font-sans">
        KAVAN K T
      </h1>

      {/* Mobile Name */}
      <h1 className="block md:hidden text-white font-extrabold text-base tracking-wide font-sans">
        KAVAN K T
      </h1>
    </motion.div>
  );
};

export default NavbarLogo;
