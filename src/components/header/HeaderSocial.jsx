import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alejandro-meza-chac%C3%B3n-071445145"><BsLinkedin /></a>
        <a href="https://github.com/Jandrocks"><BsGithub /></a>
        <a href="https://web.whatsapp.com/"><BsWhatsapp /></a>


    </div>
  )
}

export default HeaderSocial