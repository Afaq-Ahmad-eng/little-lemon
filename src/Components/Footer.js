import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import styles from './Footer.module.css';
import Logo from '../assests/images/Logo-3.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <img src={Logo} alt="Little Lemon Restaurant" className={styles.logo} />
          <p className={styles.tagline}>Mediterranean cuisine with a modern twist</p>
        </div>
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <address className={styles.contactInfo}>
            <p>19/20 Royal Hibernian Way</p>
            <p>Duke Lane Upper, Dublin 2</p>
            <p><a href="tel:+019058777" className={styles.link}>01-905 8777</a></p>
            <p><a href="mailto:hello@littlelemon.ie" className={styles.link}>hello@littlelemon.ie</a></p>
          </address>
        </div>
        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/LittleLemonRHW/"
              aria-label="Facebook"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className={styles.socialIcon} />
            </a>
            <a
              href="https://x.com/LittleLemonRHW/"
              aria-label="Twitter"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className={styles.socialIcon} />
            </a>
            <a
              href="https://www.instagram.com/LittleLemonRHW/"
              aria-label="Instagram"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p>© 2025 Little Lemon, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
