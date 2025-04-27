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
    <div className="relative bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-md p-5 flex flex-col">
      {/* Project Image */}
      <div className="h-48 overflow-hidden rounded-xl mb-4">
        <img
          src={Img}
          alt={Title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{Title}</h3>

      {/* Project Description */}
      <p className="text-gray-300 flex-grow">{Description.slice(0, 100)}...</p>

      {/* Details Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleDetailsClick}
          className="px-4 py-2 text-sm rounded-md bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CardProject;
