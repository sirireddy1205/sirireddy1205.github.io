import React from "react";

export const info = {
  home: {
    title: (
      <span style={{ fontSize: "3rem" }}>
        Hi, I'm <span className="header-name">Sirignya</span>
      </span>
    ),
    subTitle: (
      <div className="header-subtitle">
        I'm an <strong> IT </strong>
        student at &nbsp;
        <b>Bhoj Reddy Engineering for Women</b>
        <br />
      </div>
    ),
    typewriter: true,
    text: true,
  },
  projects: {
    title: <div className="projects-h1">Projects I have worked on</div>,
  },
  about: {
    title: <div className="about-h1">More about me</div>,
    content: (
      <div className="about-content">
        <p>
          I didn’t start out planning to become a <span>developer</span>. I just loved
          figuring things out — fixing broken things, trying out ideas, and learning
          by building. That curiosity naturally grew into a habit of picking up
          <span> new skills</span> and using them to create.
          <br />
          <br />
          One of my early projects was a <span>Hospital Management System</span>, built using 
          <span>PHP</span> and <span>MySQL</span> to handle <span>appointments</span>, 
          <span>patient data</span>, and <span>staff coordination</span>. I then created a 
          <span>face recognition-based attendance system</span> that marks attendance 
          using <span>real-time webcam input</span> and <span>facial encodings</span>, 
          helping prevent <span>proxy attendance</span>.
          <br />
          <br />
          Later, I built <span>AVA</span>, a desktop assistant that automates daily tasks 
          like <span>sending messages</span>, <span>launching apps</span>, and even 
          <span>object detection</span> — combining <span>AI</span>, <span>voice interaction</span>, 
          and <span>automation</span>. I also explored <span>hardware</span> through a 
          <span>touchless sanitizer dispenser</span> using <span>Arduino</span> and 
          <span>sensors</span> during the COVID period.
          <br />
          <br />
          These projects helped me explore <span>AI</span>, <span>IoT</span>, 
          <span>web development</span>, and <span>automation</span>. They’ve shown me how to turn 
          simple ideas into <span>real-world tools</span> with practical impact.
        </p>

        <p>
          <div className="content-section">🛠️ Why I Create</div>
        </p>

        
        <li className="list-item">
          To <span>learn and explore tech</span> through real projects
        </li>
        <li className="list-item">
          To <span>connect different layers</span> — from <span>frontend</span> to 
          <span>hardware</span> to <span>cloud</span>
        </li>
        <li className="list-item">
          To <span>build things</span> that are useful and inspiring
        </li>

        <p>
          Above all, I enjoy <span>experimenting</span>, <span>failing</span>, <span>fixing</span>, and 
          <span>growing</span>. 
        </p>
      </div>

    ),
  },
};
