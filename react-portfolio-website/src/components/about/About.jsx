import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'
import {FiAward} from 'react-icons/fi'
import {CgUser} from 'react-icons/cg'
import {BsFiles} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
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
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Student at Ada Tech School<br></br></small>
              <small>looking for an apprenticeship starting march 2023</small>
            </article>

            <article className='about__card'>
              <CgUser className='about__icon'/>
              <h5>my daily life</h5>
              <small>I was able to experience through practice many tools and daily gestures of developer (versioning, tests, project management tools) but also several modes of operation (code reviews, peer-programming, retrospectives, etc.).</small>
            </article>

            <article className='about__card'>
              <BsFiles className='about__icon'/>
              <h5>Projects</h5>
              <small>I take part in projects in different domains, teams and languages (Javascript, Python, Git) giving me great adaptability.</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, corporis, earum, consectetur quis inventore sit fuga ipsa dolorem quo mollitia dolores. Natus, perspiciatis impedit consequuntur architecto quis mollitia minima. Minima.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>


        </div>
    </section>

  )
}

export default About