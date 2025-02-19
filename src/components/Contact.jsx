import React, { useState } from 'react'
import Icons from './Icons'
import './css/Contact.css'
import NavIcon from './NavIcon'
import PopupMsg from './PopupMsg'
import axios from 'axios'

function Contact() {
  let[details,setDetails]=useState({name:" ",email:" ",message:" "})
  let[errormsg,setErrormsg]=useState(" ")
  const [isOpen, setIsOpen] = useState(false);
const handlechange=(e)=>{
  const{name,value}=e.target
  setDetails({...details,[name]:value})
}

const openPopup=()=>setIsOpen(true);
const closePopup=()=>setIsOpen(false);



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handlesubmit=async(e)=>{
  e.preventDefault();
  if(!details.name || !details.email || !details.message){
    setErrormsg("Fill all the details!")
    openPopup()
    return;
  }
  if(!emailRegex.test(details.email)){
    setErrormsg("Invalid email")
    openPopup()
    return;
  }



try {
  await axios.post("http://localhost:5000/submit-form", details)
    setDetails({name:' ',email:" ",message:" "})
    setErrormsg("Submitted sucessfully");
    openPopup();
  }
  catch(err){
    setErrormsg("Error submitting form:", err)
   
  }
} 



  return (
    <>
    <div className='contact-sec'>
      <PopupMsg isOpen={isOpen} closePopup={closePopup} msg={errormsg} style={errormsg!=="Submit Sucessfully"?"alert":"popup"}/>
      <section className='contact-del'>
        <h1 className='heading'>Contact Me</h1>
        <Icons/>
      </section>
      <form onSubmit={handlesubmit}>
        <input type="text" name='name' placeholder='Your Name' value={details.name} onChange={handlechange} />
        <input type="email" name='email' placeholder='Your Email' value={details.email} onChange={handlechange} />
        <textarea name="message" placeholder='Your Message' value={details.message} onChange={handlechange} ></textarea>
        <button type='submit'>SEND</button>
      </form>
      <NavIcon/>
    </div>
    </>
  )
}

export default Contact



