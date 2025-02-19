import React from 'react'
import './css/About.css'
import img from './images/WhatsApp Image 2025-02-03 at 12.19.41 PM.jpg'
function About() {
  return (
    <>
    <div className='about'>
    <div className='img'>
    <img src='/static/media/WhatsApp Image 2025-02-03 at 12.19.41 PM.a4e49b0fd06a32d94d74.jpg' alt=''/>
    </div>
    <div className='about-head'>
      {/* <h2>{img}</h2> */}
      <h1 className='head-sec'>About Me</h1>
      <p>Hello! I'm RAMA A, a recent graduate deeply enthusiastic about evolving into a Full-Stack Developer. 
        Ready to dive into a realm of perpetual learning, I'm thrilled by the ever-changing landscape of web development.
         My passion extends to exploring cutting-edge technologies, and as a dedicated practitioner, I consistently track the latest trends.
        My commitment is to ensure that every line of code I produce is not only functional but also 
        characterized by readability, accessibility, and modularity.</p>
    </div>
    </div>
  </>
  )
}

export default About






