import React from 'react'
import Logo from '../assests/images/logo.jpg'
import style from './Header.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <div id='logo'>
      <img src={Logo} alt='logo' id={style.logoImage}/>
    </div>
    <Router>
    <nav>
    <ul>
        <Link></Link>
    </ul>
    </nav>
    <Routes>
        <Route/>
    </Routes>
    </Router>
    </>
  )
}

export default Header