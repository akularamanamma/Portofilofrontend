import React from 'react'
import {  faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icons from './css/Icons.module.css'

function Icons() {
  return (
    <div className={icons.icon_Container}>
        {/* <Link to='https://www.linkedin.com/in/akularama' > */}
        <a href="https://www.linkedin.com/in/akularama" target="_blank" rel="noopener noreferrer" className={icons.link}>
        <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href='mailto:akulalakshmi1100@gmail.com' target="_blank" rel="noopener noreferrer" className={icons.link}>
        <FontAwesomeIcon icon={faEnvelope}/>
        </a>
        <a href='https://www.github.com/akularamanamma' target="_blank" rel="noopener noreferrer" className={icons.link}>
        <FontAwesomeIcon icon={faGithub}/>
        </a>
        
        </div>
        
  )
}

export default Icons
