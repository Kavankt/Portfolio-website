// import React from 'react'
// import { MdCloudDownload } from "react-icons/md";
// import { Link } from "react-scroll";


// const NavbarBtn = () => {
//   return (
//   <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
//     <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
//      Resume
//      </Link>
//      <div className="sm:hidden md:block">
//     <MdCloudDownload/>
//     </div>
//     </button>
//   );
// };

// export default NavbarBtn;


import React from 'react';
import { MdCloudDownload } from "react-icons/md";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      offset={-120}
    >
      <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        Resume
        <div className="sm:hidden md:block">
          <MdCloudDownload />
        </div>
      </button>
    </Link>
  );
};

export default NavbarBtn;
