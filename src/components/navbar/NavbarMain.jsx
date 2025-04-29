import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center w-full max-w-[1300px] mx-auto px-4 py-4">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
        {/* Mobile Toggler */}
        <div className="lg:hidden absolute right-6 top-5">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
