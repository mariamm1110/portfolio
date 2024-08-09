import React  from "react"
import { PortfolioCard } from "./PortfolioCard";
import '../../../../../css/portfolio/cardContainer.css';
import imgReact from '../../../../../css/portfolio/images/reactmorado.png';
import imgNest from '../../../../../css/portfolio/images/nest.png';
import imgCss from '../../../../../css/portfolio/images/css.png';

export const CardContainer: React.FC = () => {

    

   
    
  return (
    <>
        <div className="body-card-container">

        <div className="container-card-container">
            <div className="header-card-container">
            <h2>Proyectos</h2>
            <svg className="icon-header-card-container" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g><g id="SVGRepo_iconCarrier"> <path d="M12.5497 3.43948C12.118 2.50904 11.9022 2.04382 11.5213 2.00452C11.1405 1.96522 10.8468 2.37786 10.2595 3.20314L10.1075 3.41665C9.9406 3.65117 9.85715 3.76843 9.73698 3.83908C9.61681 3.90973 9.47352 3.92577 9.18695 3.95785L8.92606 3.98706C7.91761 4.09997 7.41339 4.15643 7.26346 4.50779C7.11353 4.85916 7.41719 5.27274 8.0245 6.0999L8.18162 6.31389C8.3542 6.54895 8.44049 6.66647 8.4718 6.80408C8.5031 6.94169 8.47588 7.08381 8.42143 7.36804L8.37186 7.62681C8.18025 8.62703 8.08445 9.12714 8.37265 9.3836C8.66086 9.64006 9.1422 9.48302 10.1049 9.16895L10.3539 9.0877C10.6275 8.99845 10.7643 8.95383 10.9038 8.96823C11.0433 8.98262 11.1698 9.05441 11.4227 9.19799L11.653 9.32871C12.543 9.83397 12.988 10.0866 13.316 9.89374C13.6441 9.70087 13.6379 9.19024 13.6256 8.16897L13.6224 7.90476C13.6189 7.61455 13.6171 7.46944 13.672 7.34073C13.727 7.21202 13.8323 7.11427 14.0431 6.91878L14.235 6.7408C14.9767 6.05285 15.3475 5.70887 15.262 5.33322C15.1766 4.95756 14.6914 4.79901 13.7211 4.4819L13.4701 4.39986C13.1943 4.30975 13.0565 4.26469 12.9509 4.17074C12.8453 4.0768 12.784 3.9446 12.6613 3.6802L12.5497 3.43948Z" stroke="#ffffff" stroke-width="1.5">
                        </path> <path d="M10.9998 22C10.6665 19.8333 10.1998 14.8 10.9998 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round">
                            </path> <path d="M14.5 22C14.5 20.8748 14.6709 19.4838 15.1281 18M22 9.5C19.8009 10.7828 18.2063 12.3567 17.0685 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round">
                                </path> <path d="M5.00012 13.2676C5.00012 13.2676 5.64973 14.0154 6.2227 14.1689C6.79567 14.3225 7.73217 13.9996 7.73217 13.9996C7.73217 13.9996 6.98434 14.6492 6.83081 15.2222C6.67729 15.7952 7.00012 16.7317 7.00012 16.7317C7.00012 16.7317 6.3505 15.9839 5.77753 15.8303C5.20457 15.6768 4.26807 15.9996 4.26807 15.9996C4.26807 15.9996 5.01589 15.35 5.16942 14.777C5.32295 14.2041 5.00012 13.2676 5.00012 13.2676Z" stroke="#ffffff" stroke-linejoin="round">
                                    </path> </g></svg>

            </div>
            
            
            <div className="cards-container-card-container">
                

                <PortfolioCard 
                title={'Card 1'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                image={imgReact} 
                projectName="ProjectName1" />
                <PortfolioCard 
                title={'Card 1'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                image={imgNest} 
                projectName="ProjectName1" />
                <PortfolioCard 
                title={'Card 1'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                image={imgCss} 
                projectName="ProjectName1" />
                
            </div>
        </div>

        </div>
    
        
    

    </>
  )
}
