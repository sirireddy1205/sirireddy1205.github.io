import React from "react";
import { projects } from "../projects";
import Body from "../components/Body";
import { useParams } from "react-router-dom";
import KBarCommand from "../components/KBarCommand";

function ProjectInfo() {
  const projectId = useParams().projectId;
  const project = projects[projectId];
  return (
    <KBarCommand>
      <Body
        title={
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            {project.name}
          </a>
        }
      />
      <div className="project-wrapper">
        <span className="project-desc">{project.description}</span>
        <div className={"project-main"}>
          <img
            className="project-ss"
            src={project.screenshotMain}
            alt={project.name}
          />
          <div className="motivation-wrapper">
            <div className="motivation-title">Motivation</div>
            <p>{project.motivation}</p>
          </div>
        </div>
        <p className="project-tools">
          Tools used:
          {project.tools.map((item) => (
            <kbd>{item}</kbd>
          ))}
        </p>
        <img
          className="project-ss-sec"
          src={project.screenshotSecondary}
          alt=""
        />
      </div>
    </KBarCommand>
  );
}

export default ProjectInfo;
