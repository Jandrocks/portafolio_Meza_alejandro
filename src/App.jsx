import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
     {/* No requiero este component 
      <Services /> 
     */}
      <Portfolio />
       {/*
       <Testimonials />
        */}
      <Contact />
      <Footer />
    
    </>
  )
}

export default app