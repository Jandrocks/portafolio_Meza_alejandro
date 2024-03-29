import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

    const [activeNav, setActivateNav] = useState('#')

  return (
    <nav>

      <a href="# " 
        onClick={ () => setActivateNav ('#') }
        className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>

      <a href="#about" 
        onClick={ () => setActivateNav ('#about') }
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
        
      <a href="#experience"
        onClick={ () => setActivateNav ('#experience') }
        className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>

      <a href="#portfolio"
        onClick={ () => setActivateNav ('#portfolio') }
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <RiServiceLine />
      </a>

      <a href="#contact"
      onClick={ () => setActivateNav ('#contact') }
      className={activeNav === '#contact' ? 'active' : ''}>
      <RiContactsLine /></a>
      
    </nav>
  )
}

export default Nav