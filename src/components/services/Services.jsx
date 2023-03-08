import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Que Ofrezco</h5>
      <h2>Mis Servicios</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>UX/UI Desingn</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
            </ul>
        </article>

        <article className='services'>
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
            </ul>
        </article>

        <article className='services'>
          <div className="service__head">
            <h3>Creación de Contenido</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit, amet consect.</p>
              </li>
            </ul>
        </article>

      </div>
    </section>
  )
}


export default Services