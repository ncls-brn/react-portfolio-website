import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {BiGitCompare} from 'react-icons/bi'
import {FaPython} from 'react-icons/fa'
import {SiGoland} from 'react-icons/si'
import {GrNode} from 'react-icons/gr'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <GrReactjs className='experience__details-icon' />
              <div>
              <h4>React</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BiGitCompare className='experience__details-icon' />
              <div>
              <h4>Git</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiGoland className='experience__details-icon' />
              <div>
              <h4>Golang</h4>
              </div>
            </article>

            <article className='experience__details'>
              <GrNode className='experience__details-icon' />
              <div>
              <h4>Node JS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
              <h4>Express</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
              <h4>Mongodb</h4>
              </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience