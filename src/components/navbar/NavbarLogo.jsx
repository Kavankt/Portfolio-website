import React from 'react';

const NavbarLogo = () => {
  return (
    <div>
      {/* Desktop View */}
      <h1 className="text-white font-body text-2xl pl-4 hidden lg:block transition duration-500 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff]">
        KAVAN K T
      </h1>

      {/* Mobile View */}
      <h1 className="text-white font-body font-extrabold text-3xl md:hidden sm:block transition duration-500 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff]">
        KT
      </h1>
    </div>
  );
};

export default NavbarLogo;
