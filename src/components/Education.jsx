import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward} from '@fortawesome/free-solid-svg-icons'
import './css/Education.css'

let education=[
  {
    yop:'2020-2023',
    degree:"Graduation at Sri Ramakrisha Degree College",
    clg:"I have graduated with a Bachelor's degree in Science (BSC), majoring in Computer Science.",
    cgpa:"85%"
  },{
    yop:"2018-2020",
    degree:'Higher Education',
    clg:'I have completed my higher education from Vijayawada Nalanda Junior college.',
    cgpa:'7.2%'
  },
  {
    yop:"2013-2018",
    degree:"Education",
    clg:"I have completed my education from ZPHSChool",
    cgpa:'8.0%',
  }
]

function Education() {
  
  return (
    <div className='education'>
      <p className='head'>My Journey</p>
      <label className='lableEdu'>Education</label>
      {
        education.map((ele,i)=>{
          return <section key={i} className='edu-sec'>
           <div className='edu'>
           <FontAwesomeIcon icon={faAward} style={{height:'25px', color:' #030615'}}/>
           <h4>{ele.degree}</h4>
           <p>{ele.clg}</p>
           </div>
           <div className='year'><h5>{ele.yop}</h5></div>
          </section>
        })
      }

    </div>
  )
}

export default Education
