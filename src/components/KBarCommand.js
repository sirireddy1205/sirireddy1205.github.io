import React, { useEffect } from "react";
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  KBarProvider,
} from "kbar";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLaptopCode,
  FaLinkedin,
  FaUser,
  FaFileAlt,
} from "react-icons/fa";

const KBarCommand = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "r") {
        e.preventDefault();
        window.open("SirignyaReddy_Resume.pdf", "_blank");
      }
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/sirignya-reddy/", "_blank");
      }
      if (e.ctrlKey && e.key === "g") {
        e.preventDefault();
        window.open("https://github.com/sirireddy1205", "_blank");
      }
      if (e.ctrlKey && e.key === "m") {
        e.preventDefault();
        window.open("mailto:sirignyareddy@gmail.com");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home",
      subtitle: "go to home",
      section: "NAVIGATION",
      icon: <FaHome />,
      perform: () => navigate("/"),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      section: "NAVIGATION",
      keywords: "project",
      subtitle: "take a look at my projects",
      icon: <FaLaptopCode />,
      perform: () => navigate("/projects"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      section: "NAVIGATION",
      keywords: "about",
      subtitle: "find out more about me",
      icon: <FaUser />,
      perform: () => navigate("/about"),
    },
    {
      id: "email",
      name: "Email",
      shortcut: ["m"],
      section: "CONTACT",
      keywords: "mail",
      subtitle: "sirignyareddy@gmail.com",
      icon: <FaEnvelope />,
      perform: () => window.open("mailto:sirignyareddy@gmail.com"),
    },
    {
      id: "resume",
      name: "Resume",
      shortcut: ["r"],
      section: "CONTACT",
      keywords: "resume cv",
      subtitle: "View PDF",
      icon: <FaFileAlt />,
      perform: () => window.open("SirignyaReddy_Resume.pdf", "_blank"),
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["g"],
      section: "CONTACT",
      keywords: "github",
      subtitle: "SirignyaReddy",
      icon: <FaGithub />,
      perform: () => window.open("https://github.com/sirireddy1205", "_blank"),
    },
    {
      id: "linkedin",
      name: "Linkedin",
      shortcut: ["l"],
      section: "CONTACT",
      keywords: "linkedin",
      subtitle: "SirignyaReddy",
      icon: <FaLinkedin />,
      perform: () =>
        window.open("https://www.linkedin.com/in/sirignya-reddy/", "_blank"),
    },
  ];

  return (
    <KBarProvider
      actions={actions}
      options={{
        enableHistory: true,
        
      }}
    >
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
};

export default KBarCommand;

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <div className="kbar-result">
            <div className="kbar-first">
              {item.icon}
              <div className="kbar-name-group">
                <div>{item.name}</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  {item.subtitle}
                </div>
              </div>
            </div>
            <div>
              <kbd>{item.shortcut}</kbd>
            </div>
          </div>
        )
      }
    />
  );
}

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  background: "rgb(252 252 252)",
  color: "rgb(28 28 29)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "rgb(252 252 252)",
  color: "rgb(28 28 29)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 6px 20px rgb(0 0 0 / 20%)",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  opacity: 0.5,
};
