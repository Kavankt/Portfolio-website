// src/components/navbar/NavbarToggler.jsx

import React from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <motion.button
      type="button"
      onClick={() => dispatch(toggleMenu())}
      // Rotate 0° ↔️ 180° when menuOpen toggles
      animate={{ rotate: menuOpen ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      // Optional tap scale effect
      whileTap={{ scale: 0.9 }}
      className="
        p-2
        bg-[#0f172a]       /* solid on mobile */
        text-white
        rounded-md
        shadow-md
        text-3xl
        hover:bg-[#1e293b]
        transition-colors
        lg:bg-transparent /* transparent on desktop */
      "
    >
      {/* Swap icon based on state */}
      {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
    </motion.button>
  );
};

export default NavbarToggler;
