import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoceme</h5>
      <h2>Acerca de Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="AboutImage" />  
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small> +6 Años Tarbajando </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small> +10 clientes en Chile </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small> +10 proyecto finalizados </small>
            </article>

          </div>

          <p>
          Ingeniero Informático enfocado en el análisis e implementación de software,  entusiasta de la tecnología y la programación, experiencia trabajado con  HTML, CSS, JavaScript, React, Linux, Oracle DB, PostgreSQL, Control-M, Git, metodologías ágiles. Muy motivado y con ganas de aprender.
            </p>

            <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About