import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BiUser} from 'react-icons/bi'
import {IoBookOutline} from 'react-icons/io5'
import {RiComputerLine} from 'react-icons/ri'
import {HiOutlineChatBubbleOvalLeftEllipsis} from 'react-icons/hi2'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><IoBookOutline/></a>
      <a href="#projets" onClick={() => setActiveNav('#projets')}className={activeNav === '#projets' ? 'active' : ''}><RiComputerLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><HiOutlineChatBubbleOvalLeftEllipsis/></a>
    </nav>
  )
}

export default Nav