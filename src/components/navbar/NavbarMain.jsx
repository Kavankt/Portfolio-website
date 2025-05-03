import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Nav Background */}
      <div className="bg-[#0f172a] sm:bg-transparent shadow-md sm:shadow-none w-full">
        <div className="flex items-center justify-between w-full max-w-[1300px] mx-auto px-4 py-4">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <NavbarLinks />
          </div>

          {/* Resume + Toggler */}
          <div className="flex items-center gap-4">
            <NavbarBtn />
            <div className="lg:hidden">
              <NavbarToggler />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="block lg:hidden bg-[#0f172a] w-full px-4 pb-4">
            <NavbarLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
