import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Mobile: Solid bg | Desktop: Transparent */}
      <div className="w-full bg-[#0f172a] sm:bg-transparent sm:backdrop-blur-none sm:shadow-none shadow-md">
        <div className="flex items-center justify-between max-w-[1300px] mx-auto px-4 py-4">
          <NavbarLogo />
          <div className="hidden lg:block">
            <NavbarLinks />
          </div>
          <div className="flex items-center gap-4">
            <NavbarBtn />
            <div className="lg:hidden">
              <NavbarToggler />
            </div>
          </div>
        </div>

        {/* Mobile menu (when open) */}
        {menuOpen && (
          <div className="block lg:hidden bg-[#0f172a] px-4 pb-4">
            <NavbarLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
