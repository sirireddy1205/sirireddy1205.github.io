import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import ProjectInfo from "../pages/ProjectInfo";
import { info } from "../info";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            title={info.home.title}
            subTitle={info.home.subTitle}
            text={info.home.text}
            typewriter={info.home.typewriter}
          />
        }
      />
      <Route
        path="projects/"
        element={<ProjectsPage title={info.projects.title} />}
      />
      <Route path="projects/:projectId" element={<ProjectInfo />} />
      <Route
        path="about"
        element={
          <AboutPage title={info.about.title} content={info.about.content} />
        }
      />
    </Routes>
  );
};

export default AppRouter;
