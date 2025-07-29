import React from "react";
import Body from "../components/Body";
import KBarCommand from "../components/KBarCommand";

function HomePage(props) {
  return (
    <KBarCommand>
      <div className="home-wrapper">
        <Body
          title={props.title}
          name={props.name}
          subTitle={props.subTitle}
          typewriter={props.typewriter}
          text={props.text}
        />
      </div>
    </KBarCommand>
  );
}
export default HomePage;
