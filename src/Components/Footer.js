import style from './Footer.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../assests/images/Logo-3.png'
import About from './About';
import Contact from './Contact';
import Reservation from './Reservation';
import Specials from './Specials';
import Chicago from './Chicago';
function Footer() {
  return (
    <div id={style.footer}>
       <div id={style.logoContainer}>
        <h2>Logo</h2>
        <img id={style.logoForFooter} src={Logo} alt='Logo_for_footer'/>
       </div>
       <div id={style.socialMediaLinksContainer}>
        <h2>Links To Pages</h2>
        <Router>
        <nav id={style.footerLinks}>
          <Link className={style.links} to='/about'>About</Link>
          <Link className={style.links} to='/contact'>Contact</Link>
          <Link className={style.links} to='/Reservation'>Reservation</Link>
          <Link className={style.links} to='/specials'>Specials</Link>
          <Link className={style.links} to='/Chicago'>Main Branch</Link>
        </nav>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/Specials' element={<Specials/>}/>
          <Route path='/chicago' element={<Chicago/>}/>
        </Routes>
        </Router>
       </div>
    </div>
  )
}

export default Footer