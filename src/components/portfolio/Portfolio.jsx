import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sitio Web Hooks',
    github: 'https://github.com/Jandrocks/hook-app',
    demo: 'https://github.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sitio Web Hooks2',
    github: 'https://github.com/Jandrocks/hook-app',
    demo: 'https://github.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sitio Web Hooks3',
    github: 'https://github.com/Jandrocks/hook-app',
    demo: 'https://github.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Sitio Web Hooks4',
    github: 'https://github.com/Jandrocks/hook-app',
    demo: 'https://github.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sitio Web Hooks5',
    github: 'https://github.com/Jandrocks/hook-app',
    demo: 'https://github.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Sitio Web Hooks6',
    github: 'https://github.com/Jandrocks/hook-app',
    demo: 'https://github.com/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis Últimos Trabajos</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return(
              <article id={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>GitHub</a>
                <a href={demo} className='btn btn-primary'>Demo</a>
              </div>
            </article>            
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio