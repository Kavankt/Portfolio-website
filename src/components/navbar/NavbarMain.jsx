import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none shadow-md sm:shadow-none">
      <div className="flex items-center justify-between w-full max-w-[1300px] mx-auto px-4 py-4">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Menu Links */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        {/* Right section: Resume button + toggler */}
        <div className="flex items-center gap-4">
          <NavbarBtn />

          {/* Mobile Toggler - visible only on mobile, styled separately */}
          <div className="lg:hidden">
            <NavbarToggler />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
