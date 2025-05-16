import React from 'react';

const NavbarLogo = () => {
  return (
    <div>
      {/* Desktop View */}
      <h1 className="navbar-logo hidden lg:block">KAVAN K T</h1>

      {/* Mobile View */}
      <h1 className="navbar-logo text-3xl md:hidden sm:block">KAVAN K T</h1>
    </div>
  );
};

export default NavbarLogo;
