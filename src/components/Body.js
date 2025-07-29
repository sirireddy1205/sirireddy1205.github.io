import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Body(props) {
  return (
    <div className="header-wrapper">
      {props.title && <div className="header">{props.title}</div>}

      {props.typewriter && (
        <div className="header-typewriter">
          <Typewriter
            words={["a developer", "a tech enthusiast", "a creator", "a fast-learner"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={50}
            delaySpeed={1700}
          />
        </div>
      )}

      {props.subTitle && <div className="display">{props.subTitle}</div>}
      {props.text && (
        <div className="header-hint">
          press &nbsp;<kbd className="code">cmd</kbd>&nbsp;+ &nbsp;
          <kbd className="code">k</kbd>
          &nbsp;&nbsp;/ &nbsp;
          <kbd className="code">ctrl</kbd> &nbsp;+ &nbsp;
          <kbd className="code">k</kbd>&nbsp;to learn more about me
        </div>
      )}
    </div>
  );
}

export default Body;
