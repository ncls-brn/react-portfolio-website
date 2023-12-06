import React from "react";
import "./footer.css";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projets">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/ncls-brn">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-baran/">
          <SiLinkedin />
        </a>
        <a href="https://twitter.com/Nclsjbrn">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{currentYear} Nicolas Baran. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
