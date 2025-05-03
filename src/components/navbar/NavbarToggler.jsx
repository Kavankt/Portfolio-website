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
      className="p-2 bg-[#0f172a] text-white rounded-md text-3xl hover:bg-[#1e293b] transition"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
