import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <Link to={"/"}>
        <div className="nav-home-link">Sirignya Reddy</div>
      </Link>
      <div className="nav-paths">
        <Link to={"/projects"}>
          <div>Projects</div>
        </Link>
        <Link to={"/about"}>
          <div>About</div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
