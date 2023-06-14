import React from 'react'
import CV from '../../assets/cv-alejandro-meza.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descarga CV</a>
        <a href="#contact" className='btn btn-primary'>Contactame</a>
    </div>
  )
}

export default CTA