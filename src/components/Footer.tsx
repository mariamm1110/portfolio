import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faPalette, fas } from '@fortawesome/free-solid-svg-icons';  // Para todos los iconos sólidos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import { Portfolio } from './Menu/menu-components/portfolio/Portfolio';
import '../css/footer.css';
import imgLogo from '../assets/logo.png'


library.add(fas);

export const Footer = () => {
  return (
   <>
     <div className="footer-body">
        <footer className="footer-footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={imgLogo} alt={'logo'} />
                    <h2>
                        <FontAwesomeIcon icon={faPalette} />
                        <span>WEBFOLIO</span>
                        
                    </h2>
                </div>

                <nav className="footer-footer-nav">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Skills</a>
                    <a href="#">Contact</a>
                    {/* <Link to="/">Home</Link> 
                    
                    <Link to="/card1">About</Link> 
                    <Link to="/card2">Portfolio</Link> 
                    <Link to="/card3">Skills</Link> 
                    <Link to="/card4">Contact</Link>  */}
                </nav>
                <div className="footer-footer-social">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                </div>
            </div>
            <div className="footer-footer-bottom">
                <p>&copy; 2024 MAM. All rights reserved</p>
            </div>
        </footer>
     </div>
   </>
  )
}
