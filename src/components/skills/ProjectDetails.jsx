import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

const ProjectDetails = () => {
  const { id } = useParams(); // get id from URL

  // Find the project that matches the id
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: "20px" }}>



    
      <h1>{project.Title}</h1>
      <img
        src={project.Img}
        alt={project.Title}
        style={{ width: "400px", height: "auto", marginBottom: "20px" }}
      />
      <p style={{ fontSize: "18px",color:'white' }}>{project.Description}</p>
      {project.ProjectLink && (
        <a
          href={project.ProjectLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "white",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;