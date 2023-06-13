import React from 'react'
import './experience.css';
import {FaCheckCircle} from 'react-icons/fa';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Habilidades que poseo</h5>
      <h2>Mi experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollador FrontEnd</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
        <h3>Desarrollador BackEnd</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Oracle</h4>
              <small className='text-light'>Intermedio</small>  
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience