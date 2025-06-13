import React from 'react'
import Logo from '../assests/images/logo.jpg'
import style from './Navbar.module.css'
import About from './About'
import Contact from './Contact'
import Reservation from './Reservation'
import Chicago from './Chicago'
import CustomersSay from './CustomersSay'
import CallToAction from './CallToAction'
import Specials from './Specials'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div id={style.logo}>
      <img src={Logo} alt='logo' id={style.logoImage}/>
    </div>
     <Router>
    <nav className={style.navbar}>
    <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/Reservation'>Reservation</Link></li>
        <li><Link to='/Chicago'>Chicago</Link></li>
        <li><Link to='/CustomersSay'>Customer Say</Link></li>
        <li><Link to='/CallToAction'>Call To Action</Link></li>
        <li><Link to='/Specials'>Specials</Link></li>
    </ul>
    </nav>
    <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/Chicago' element={<Chicago/>}/>
        <Route path='/CustomersSay' element={<CustomersSay/>}/>
        <Route path='/CallToAction' element={<CallToAction/>}/>
        <Route path='/CallToAction' element={<CallToAction/>}/>
        <Route path='/Specials' element={<Specials/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default Navbar