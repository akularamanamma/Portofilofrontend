import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark,faList} from '@fortawesome/free-solid-svg-icons'
import nav from './css/Navbar.module.css'
import About from './About'
import Skills from './Skills'
import List from './List'
import Education from './Education'
import Slide from './Slide'
import Contact from './Contact'
import Projects from './Projects' 



function Navbar() {
const[list,setList]=useState(true)
const[show,setShow]=useState(false)

const showIcon=()=>{
  if(window.innerWidth<=960){
    setList(true)
  }else{
    setList(false)
    setShow(true)
  }
}
useEffect(()=>{
  showIcon()
},[])

const showlist=()=>{
  if(window.innerWidth<=960){
    setShow(false)
  }
}

let showNav=()=>{
  showlist(!list)
}

window.addEventListener('resize',showIcon)
  return (
    <>
     <div className={nav.nv} id='/'>
    <nav className={nav.maindiv}>
 

    {list&&<FontAwesomeIcon icon={show?faXmark:faList} onClick={()=>{setShow(!show)}} className={nav.icon}/> }
    {show && <List/>}
    </nav>
    </div>
   
    
    <Slide showlist={showlist}/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default Navbar
