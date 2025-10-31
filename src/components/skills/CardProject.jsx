import React from "react";
import { motion } from "framer-motion";

const CardProject = ({ id, Title, Description, Img, ProjectLink, onViewDetails }) => {
  return (
    <motion.div
      key={id}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="w-[320px] sm:w-[330px] md:w-[340px] h-[360px] flex flex-col justify-between
                 rounded-2xl overflow-hidden backdrop-blur-md border border-white/10 
                 cursor-pointer hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                 transition-all duration-500 group bg-transparent"
    >
      {/* Project Image */}
      <div className="relative h-[170px] overflow-hidden rounded-t-2xl">
        <img
          src={Img}
          alt={Title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Text Content */}
      <div className="p-5 flex flex-col justify-between flex-grow text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-wide">
          {Title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-3">
          {Description}
        </p>

        {/* View Details Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            if (onViewDetails) onViewDetails(id);
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(34,211,238,0.15)",
            borderColor: "rgba(34,211,238,0.6)",
            color: "#fff",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-auto mx-auto px-5 py-1.5 text-sm font-medium 
                     text-cyan-300 border border-cyan-300/60 rounded-md 
                     bg-white/10 hover:bg-cyan-400/20 transition-all duration-300"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardProject;
