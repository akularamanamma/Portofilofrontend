import React from 'react'
import pimg from './images/Screenshot 2025-02-07 142800.png'
import './css/Projects.css' 

let projectDetails=[
  {title:'Personal Portfolio',
    description:'Portfolio website developed with React.',
    link:'https://roaring-puffpuff-d95b07.netlify.app/',image:pimg}
]


function Projects() {
  return (
    <div id='project'> 
    <p className='head'>My Work</p>
    <label className='lable'>Projects</label>
    <div className='card-container'>
      {
        projectDetails.map((ele,i)=>{
          return <div key={i} className='project-card'>
            <a href={ele.link} target="_blank" rel="noopener noreferrer">
               <img src={ele.image} height={200} width={400} alt=''/></a>
               <div className='content'>
               <h2>{ele.title}</h2>
               <a href={ele.link} target="_blank" rel="noopener noreferrer">View Project</a>
               <p>{ele.description}</p>
               </div>
              
          </div>
        })
      }
    </div>
    </div>
  )
}

export default Projects
