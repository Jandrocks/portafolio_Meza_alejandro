import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Alejandro Meza',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum aut animi, laudantium voluptate aperiam odit ea! Amet eveniet, molestias autem magni quisquam velit beatae officiis libero, dolorem neque aliquid!'    
  },
  {
    avatar: AVTR2,
    name: 'Alejandro Meza1',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum aut animi, laudantium voluptate aperiam odit ea! Amet eveniet, molestias autem magni quisquam velit beatae officiis libero, dolorem neque aliquid!'    
  },
  {
    avatar: AVTR3,
    name: 'Alejandro Meza2',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum aut animi, laudantium voluptate aperiam odit ea! Amet eveniet, molestias autem magni quisquam velit beatae officiis libero, dolorem neque aliquid!'    
  },
  {
    avatar: AVTR4,
    name: 'Alejandro Meza3',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum aut animi, laudantium voluptate aperiam odit ea! Amet eveniet, molestias autem magni quisquam velit beatae officiis libero, dolorem neque aliquid!'    
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Clientes</h5>
      <h2>Testimonios</h2>
      <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide id={index} className='testimonial'>
            <div className="client_avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials