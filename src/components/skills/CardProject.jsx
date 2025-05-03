import React from "react";
import { useNavigate } from "react-router-dom";

const CardProject = ({ id, Title, Description, Img, ProjectLink }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (id) {
      navigate(`/projects/${id}`);
    } else {
      alert("Project details not available");
    }
  };

  return (
    <div className="w-full sm:w-auto bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-md p-4 flex flex-col">
      {/* Project Image - full width on mobile, normal on larger screens */}
      <div className="h-40 sm:h-40 overflow-hidden rounded-xl mb-3">
        <img
          src={Img}
          alt={Title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-white mb-2">
        {Title}
      </h3>

      {/* Project Description - full width text on mobile */}
      <p className="text-gray-300 flex-grow text-sm sm:text-sm w-full">
        {Description.slice(0, 80)}...
      </p>

      {/* Details Button - aligned to end */}
      <div className="flex justify-end mt-3">
        <button
          onClick={handleDetailsClick}
          className="px-3 py-1.5 text-sm rounded-md bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CardProject;