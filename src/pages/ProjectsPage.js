import React from "react";
import { Link } from "react-router-dom";
import Body from "../components/Body";
import { projects } from "../projects";
import KBarCommand from "../components/KBarCommand";

function ProjectsPage(props) {
  return (
    <KBarCommand>
      <div className="projects-wrapper">
        <Body title={props.title} />
        <div className={"grid-container"}>
          {Object.entries(projects).map((entry) => {
            const [id, project] = entry;
            return (
              <div className="ith-wrapper grid-item">
                <div className="ith-img-wrapper">
                  <Link to={id}>
                    <img className="ith-image" src={project.img} alt={id} />
                  </Link>
                </div>
                <div className="ith-info">
                  <div className="ith-name">{project.name}</div>
                  <p>{project.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </KBarCommand>
  );
}

export default ProjectsPage;
