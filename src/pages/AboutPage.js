import React from "react";
import Body from "../components/Body";
import headshot from "./../imgs/headshot.jpg";
import KBarCommand from "../components/KBarCommand";

function AboutPage(props) {
  return (
    <KBarCommand>
      <Body title={props.title} />
      <div className="about-wrapper">
        {props.content}
        <div className="image-container">
          <img className="about-image" src={headshot} alt="headshot" />
        </div>
      </div>
    </KBarCommand>
  );
}
export default AboutPage;
