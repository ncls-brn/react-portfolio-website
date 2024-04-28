import React from "react";
import "./about.css";
import ME from "../../assets/me7.png";
import { FiAward } from "react-icons/fi";
import { CgUser } from "react-icons/cg";
import { BsFiles } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About__Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                - Student at Ada Tech School 2022 - 2024<br></br>
              </small>
              <small>
                - Apprentice at Withings since 2023 - 2024<br></br>
              </small>
              <small>
                - Student at Ecole Hexagone 2024 - today<br></br>
              </small>
            </article>

            <article className="about__card">
              <CgUser className="about__icon" />
              <h5>my daily life</h5>
              <small>
                I was able to experience through practice many tools and daily
                gestures of developer but also several modes of operation.
              </small>
            </article>

            <article className="about__card">
              <BsFiles className="about__icon" />
              <h5>Projects</h5>
              <small>
                I take part in projects in different domains, teams and
                languages, giving me great adaptability.
              </small>
            </article>
          </div>

          <p>
            After 10 years as an Staff Sergeant officer in the French Army, I
            decided to move into the digital sector. Having obtained a degree in
            web development, I now wish to specialize in cybersecurity, a field
            that echoes my background and my appetite for risk management. As
            part of this process, I'm looking for a work-study program with 3
            days in the company and 2 days at school starting in September 2024,
            and hope to have the opportunity to deepen my cybersecurity skills
            within a company that combines innovation and ethics. Autonomous,
            curious and a team player, I'm ready to put what I've learned to
            work for a team and ambitious projects. Finally, my military career
            has forged in me rigor, resilience and adaptability, qualities that
            I fully intend to put to good use in the field of IT security. I'd
            like to think that my experience and personality will make me a
            valuable asset to your team.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
