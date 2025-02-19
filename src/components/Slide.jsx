import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {Link as DomLink} from 'react-router-dom'
import {Link} from 'react-scroll'
import './css/Slide.css'
import Icons from './Icons'
function Slide({showlist}) {
  return (
   <>
   <section className='background-div'>
   <div className='name-sec'>
   <p>Hello! It's Me</p>
      <h1>Rama A</h1>
      <h2>And I`m a </h2>
      <TypeAnimation
      sequence={[ 
        ' Frontend Developer',
        1000, 
        ' Backend Developer',
        1000,
        ' Fullstack Developer',
        1000,
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2.2rem',fontWeight:'bold', display:'inline-block',color:'white',padding: '16px 3px'}}
      repeat={Infinity}
    />
    </div>
    <div className='button-sec'>
      <DomLink to='https://drive.google.com/file/d/1lZhAUap3ZZx075Ijj3WvWDjx_TcqeUjN/view?usp=drivesdk' className='link'>Resume</DomLink>
      <Link to='contact' className='link'>Contact</Link>
    </div>
    <div className='icon'>
    <Icons/>
    </div>
   </section>
   </> 
   
  )
}

export default Slide