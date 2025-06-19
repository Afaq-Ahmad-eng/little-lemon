import React, { useState } from 'react';
import Logo from '../assests/images/logo.jpg';
import style from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <>
        <nav className={style.navbar}>
          <div className={style.logoContainer}>
            <img src={Logo} alt='logo' className={style.logoImage} />
          </div>
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
            <div className={style.authButtons}>
              <button className={style.SignUpAndSigninButtons}>Sign Up</button>
              <button className={style.SignUpAndSigninButtons}>Sign In</button>
            </div>
          </ul>
        </nav>
    </>
  )
}

export default Navbar;