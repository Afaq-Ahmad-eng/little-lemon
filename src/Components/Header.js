import React from 'react'
import Logo from '../assests/images/logo.jpg'
import style from './Header.module.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <BrowserRouter>
    <header>
        <meta name="description" content="your text goes here"/>
        <meta name="og:title" content="little lemon restaurant"/>
        <meta name="og:description" content="We provide best food to you"/>
    </header>
    <nav>
    <img src={Logo} alt='logo' id={style.logoImage}/>
    <ul>
        <Link></Link>
    </ul>
    </nav>
    <Routes>
        <Route/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Header