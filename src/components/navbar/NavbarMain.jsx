import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for optional shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar motion variants
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? "shadow-md" : ""}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* Navbar container */}
      <div className="w-full bg-transparent transition-all duration-500">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavbarLinks />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <NavbarBtn />
            <div className="lg:hidden">
              <NavbarToggler />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden bg-[#111827] rounded-b-xl px-4 pb-4 shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <NavbarLinks />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavbarMain;
