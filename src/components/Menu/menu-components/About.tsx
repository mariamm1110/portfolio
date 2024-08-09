import '../../../css/about.css';
import yo from '../../../assets/yo.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost, faHeart, faHippo, fas } from '@fortawesome/free-solid-svg-icons';  // Para todos los iconos sólidos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fas);

export const About = () => {
  return (
    <>  

   
    <div className="body">

    <div className="container-about">
            <div className="header-about">
                <h1>ABOUT ME</h1>
            </div>
            <div className="profile-about">
                <div className="profile-picture-about">
                    <img src={yo} alt="profile" />
                </div>
                <div className="profile-info-about">
                    <div className="title-info-about">
                    <h2>FULL NAME <FontAwesomeIcon icon={faHeart}  style={{ marginLeft: '10px' }}/></h2>
                    </div>
                    
                    <p>Maria Antonia Meneses</p>
                    <h2>E-MAIL <FontAwesomeIcon icon={faHippo} style={{ marginLeft: '10px' }} /></h2>
                    <p>mariamema@hotmail.com</p>
                    <h2>WEBFOLIO <FontAwesomeIcon icon={faGhost} style={{ marginLeft: '10px' }}/></h2>
                    <p><a href="link">link</a></p>
                </div>
            </div>
            
        <div className="bio-about">
            <p> Hi, I'm <strong>Maria Antonia</strong>. I'm a <em>Software engineer studen based in Medellin.
                I like my career because it makes me realize that I am capable to <strong>create</strong> whatever I propose.</em></p>
        </div>
    
        
        <div className="interests-about">
            <h2>MY INTERESTS</h2>
            <div className="interests-icons-about">
                <img src="https://www.svgrepo.com/show/529560/dumbbells-2.svg" alt="gym" />
                <img src="https://www.svgrepo.com/show/528888/cat.svg" alt="pets" />
                <img src="https://www.svgrepo.com/show/529870/sidebar-code.svg" alt="programming" />
                <img src="https://www.svgrepo.com/show/528886/chef-hat-heart.svg" alt="cooking" />
                <img src="https://www.svgrepo.com/show/529668/lightbulb-bolt.svg" alt="learning" />
            </div>
        </div>
        

        <div className="download-cv-about">
            
                <a href="#" className="button-about">DOWNLAOD CV</a>
            
            
        </div>

    </div>
        

    </div>

  

    
        
    

        
    
     </>

  )
}
