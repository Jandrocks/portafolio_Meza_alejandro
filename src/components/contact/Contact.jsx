import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi';
import {FaDiscord} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w7gvftr', 'template_c78xih7', form.current, 'U8nM4O2i-ubRkEFjt') 
    
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Ponte en Contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>alejandro.meza.chacon@gmail.com</h5>
            <a href="mailto:alejandro.meza.chacon@gmail.com">Enviar Mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+569 79158827</h5>
            <a href="https://api.whatsapp.com/send?phone+56979158827">Enviar Mensaje</a>
          </article>

          <article className='contact__option'>
            <FaDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>Jandrocks#7732</h5>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Nombre Completo' required />
            <input type="email" name='email' placeholder='Email' required />
            <textarea name="message" rows="7" placeholder='Mensaje' required></textarea>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact