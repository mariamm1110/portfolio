import '../../../portafolio/src/css/header.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPalette, fas } from '@fortawesome/free-solid-svg-icons';  // Para todos los iconos sólidos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgLogo from '../assets/logo.png'


library.add(fas);

interface HeaderProps {
    logo: string;
    mainBody: string;
    toolbarBody: string;
}



export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
    <header className="header-header">
        <div className="header-header-content">

            <div className="header-logo-header">
                <img src={imgLogo} alt={'logo'} />
            </div>

            <div className="header-title">
                <h2>
                    <FontAwesomeIcon icon={faPalette} />
                    <span>WEBFOLIO</span>
                </h2>
            </div>

            <div className="header-social-media">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            </div>
            
        </div>


    </header>
    
    
    </>
    
  )
}
