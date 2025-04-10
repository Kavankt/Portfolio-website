import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-4 left-[50%] -translate-x-[50%] z-50 w-[95%] max-w-[1300px] px-4">
      <div
        className="w-full flex justify-between items-center px-6 py-4
        bg-transparent
        backdrop-blur-xl
        rounded-tl-[3rem] rounded-br-[3rem]
        border border-cyan-500/30
        shadow-[0_0_30px_rgba(0,255,255,0.3)]
        transition-all duration-500"
      >
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>

      {/* Mobile Toggler */}
      <div className="lg:hidden absolute right-6 top-[18px] z-10">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
