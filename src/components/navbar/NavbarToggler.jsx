import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      onClick={setToggleMenu}
      className="text-white text-3xl p-2 rounded-md bg-[#1e293b] sm:bg-[#0f172a] hover:bg-[#334155] transition duration-300"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
