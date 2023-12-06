import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nicolas-baran/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ncls-brn" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/Nclsjbrn" target="_blank">
        <RiTwitterXFill />
      </a>
    </div>
  );
};

export default HeaderSocials;
