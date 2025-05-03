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
      animate={{ rotate: menuOpen ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      whileTap={{ scale: 0.9 }}
      className="
        p-2
        bg-transparent          /* fully transparent */
        text-white
        text-3xl
        animate-glow            /* continuous glow animation */
        hover:scale-110         /* subtle pop on hover */
        transition-transform
        duration-300
      "
    >
      {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
    </motion.button>
  );
};

export default NavbarToggler;
