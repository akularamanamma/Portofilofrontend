// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Skills from './components/Skills'
import Project from './components/Projects'

function App() {
  return (
<BrowserRouter>
 <Routes>
 <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
 </Routes>
  </BrowserRouter>
  );
}

export default App;
