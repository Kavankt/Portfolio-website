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
      animate={{ rotate: menuOpen ? 180 : 0 }} // Rotate on toggle
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      whileTap={{ scale: 0.95 }} // Slight scale down on tap
      className="
        p-2
        bg-transparent
        text-white
        text-3xl
        hover:scale-110
        hover:text-purple-500
        transition-all
        duration-300
        relative
        animate-glow
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
