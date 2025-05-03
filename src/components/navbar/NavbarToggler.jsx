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
      onClick={() => dispatch(toggleMenu())}
      className="p-2 bg-[#0f172a] text-white rounded-md shadow-md text-3xl hover:bg-[#1e293b] transition-colors"
      animate={{ rotate: menuOpen ? 180 : 0 }}
      initial={false}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
    </motion.button>
  );
};

export default NavbarToggler;
