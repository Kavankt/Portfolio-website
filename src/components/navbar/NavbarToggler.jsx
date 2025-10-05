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
      animate={{ rotate: menuOpen ? 90 : 0 }} // subtle rotation
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.9 }} // Slight scale down on tap
      className="
        p-1.5
        text-white
        text-2xl
        hover:text-purple-400
        transition-colors duration-300
        flex items-center justify-center
      "
    >
      {menuOpen ? (
        <IoMdClose className="relative z-10" />
      ) : (
        <GiHamburgerMenu className="relative z-10" />
      )}
    </motion.button>
  );
};

export default NavbarToggler;
