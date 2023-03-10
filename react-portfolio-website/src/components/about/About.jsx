import React from "react"
import "./about.css"
import ME from "../../assets/me3.png"
import {FiAward} from "react-icons/fi"
import {CgUser} from "react-icons/cg"
import {BsFiles} from "react-icons/bs"


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Student at Ada Tech School<br></br></small>
              <small> Withings since 2023</small>
            </article>

            <article className="about__card">
              <CgUser className="about__icon"/>
              <h5>my daily life</h5>
              <small>I was able to experience through practice many tools and daily gestures of developer  but also several modes of operation.</small>
            </article>

            <article className="about__card">
              <BsFiles className="about__icon"/>
              <h5>Projects</h5>
              <small>I take part in projects in different domains, teams and languages, giving me great adaptability.</small>
            </article>
          </div>

          <p>
          After working 10 years as an  Staff Sergeant in the  French Army, I am now doing a reconversion in web development, an area where I discovered the richness of the trades (creativity, teamwork, problem solving, etc.) and the major impact on both companies and society at large. 
Autonomous, curious, attentive and team-oriented, I am looking to integrate an alternating company for the month of March 2023 to develop and deepen my knowledge while putting my skills at the service of the collective for the success of your projects.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>


        </div>
    </section>

  )
}

export default About