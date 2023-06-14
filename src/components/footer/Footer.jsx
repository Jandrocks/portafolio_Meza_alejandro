import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="# " className='footer__logo'>ALEJANDRO</a>

        <ul className="parmalinks">
          <li><a href="# ">Home</a></li>
          <li><a href="#about">Sobre Mi</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

    <div className="footer__socials">
        <a href="https://www.linkedin.com/in/alejandro-meza-chac%C3%B3n-071445145"><BsLinkedin /></a>
        <a href="https://github.com/Jandrocks"><BsGithub /></a>
        <a href="https://api.whatsapp.com/send/?phone=56979158827&text=Hola+Alejandro+Meza&type=phone_number&app_absent=0"><BsWhatsapp /></a>
    </div>

    <div className="footer__copyright">
        <small>&copy; Todos los derechos reservados Alejandro Meza </small>
    </div>

    </footer>
)
}

export default Footer