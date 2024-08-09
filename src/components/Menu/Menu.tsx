import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faBriefcase, faCode, faEnvelopeOpenText, fas } from '@fortawesome/free-solid-svg-icons';  // Para todos los iconos sólidos


library.add(fas);

export const Menu = () => {
    return (
        <>
            <nav className='menu'>
                <ul>
                    <li>
                        <Link to="/" className='dios'>Home</Link> 
                        <FontAwesomeIcon icon={['fas', 'house']}  />
                        
                    </li>
                    <li>
                        <Link to="/card1" className='dios'>About</Link>
                        <FontAwesomeIcon icon={faAddressCard}  />
                    </li>
                    <li>
                        <Link to="/card2" className='dios'> Portfolio</Link>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </li>
                    <li> 
                        <Link to="/card3" className='dios'>Skills</Link>
                        <FontAwesomeIcon icon={faCode} />
                    </li>
                    <li>
                        <Link to="/card4" className='dios'>Contact</Link> 
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    </li>
                   
                </ul>
            </nav>
        </>
    )
}