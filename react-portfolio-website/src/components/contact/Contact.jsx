import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {GrLinkedinOption} from 'react-icons/gr'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8tqa7ad', 'template_noy3ppp', form.current, '8G9KF2m5x8_fiJU7f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nicolas.j.baran@gmail.com</h5>
            <a href="mailto:nicolas.j.baran@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <GrLinkedinOption  className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Nicolas baran</h5>
            <a href="https://www.linkedin.com/in/nicolas-baran/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp  className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+33679273471</h5>
            <a href="https://api.whatsapp.com/send?phone+33679273471" target="_blank">Send a message</a>
          </article>
        

        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="emqil" name="email" placeholder="Email Address" required />
          <textarea name="message" rows="10" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 