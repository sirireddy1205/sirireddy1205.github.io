import React from "react";
import { FaPaperPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div>
        <a
          href="mailto:sirignyareddy@gmail.com"
          className="sm-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPaperPlane size={28} className="social-media" />
        </a>
        <a
          href="https://github.com/sirireddy1205"
          className="sm-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={28} className="social-media" />
        </a>
        <a
          href="https://www.linkedin.com/in/sirignya-reddy/"
          className="sm-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={28} className="social-media" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
