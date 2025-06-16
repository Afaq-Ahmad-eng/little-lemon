import React, { useState } from 'react';
import Logo from '../assests/images/logo.jpg';
import style from './Navbar.module.css';
import About from './About';
import Contact from './Contact';
import Reservation from './Reservation';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import CallToAction from './CallToAction';
import Specials from './Specials';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Router>
        <nav className={style.navbar}>
          <div className={style.logoContainer}>
            <img src={Logo} alt='logo' className={style.logoImage} />
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`${style.hamburger} ${isMenuOpen ? style.active : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </button>
          
          <ul className={`${style.navigation} ${isMenuOpen ? style.active : ''}`}>
            <li><Link className={style.links} to='/about' onClick={closeMenu}>About</Link></li>
            <li><Link className={style.links} to='/contact' onClick={closeMenu}>Contact</Link></li>
            <li><Link className={style.links} to='/Reservation' onClick={closeMenu}>Reservation</Link></li>
            <li><Link className={style.links} to='/Chicago' onClick={closeMenu}>Chicago</Link></li>
            <li><Link className={style.links} to='/CustomersSay' onClick={closeMenu}>Customer Say</Link></li>
            <li><Link className={style.links} to='/CallToAction' onClick={closeMenu}>Call To Action</Link></li>
            <li><Link className={style.links} to='/Specials' onClick={closeMenu}>Specials</Link></li>
            
            <div className={style.authButtons}>
              <button className={style.SignUpAndSigninButtons}>Sign Up</button>
              <button className={style.SignUpAndSigninButtons}>Sign In</button>
            </div>
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

export default Navbar;