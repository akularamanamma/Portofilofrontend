import React from 'react'
import {  faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icons from './css/Icons.module.css'

function Icons() {
  return (
    <div className={icons.icon_Container}>
        <Link to='https://www.linkedin.com/in/akularama/' className={icons.link}>
        <FontAwesomeIcon icon={faLinkedin}/>
        </Link>
        <Link to='mailto:akulalakshmi1100@gmail.com' className={icons.link}>
        <FontAwesomeIcon icon={faEnvelope}/>
        </Link>
        <Link to='https://www.github.com/akularamanamma' className={icons.link}>
        <FontAwesomeIcon icon={faGithub}/>
        </Link>
        
        </div>
        
  )
}

export default Icons