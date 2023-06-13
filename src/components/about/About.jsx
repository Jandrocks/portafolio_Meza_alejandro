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
          Como entusiasta de la programación, estoy emocionado por iniciar mi primer empleo formal en este campo. Aunque soy nuevo en la programación, ya tengo experiencia en el área de tecnologías de la información (TI). He adquirido sólidos conocimientos en la gestión y análisis de sistemas, así como habilidades técnicas en varios lenguajes de programación. Mi pasión por la tecnología y el desarrollo de software me motiva a aprender y crecer constantemente en este emocionante ámbito.
          </p>

            <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About