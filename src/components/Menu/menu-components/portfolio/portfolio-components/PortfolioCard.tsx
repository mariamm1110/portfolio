import '../../../../../css/portfolio/portCard.css';
import React from 'react'

interface PortCardProps {
    title: string;
    paragraph: string;
    image: string;
    projectName: string;
}

export const PortfolioCard: React.FC<PortCardProps> = ({title, image, paragraph, projectName}) => {
  return (
    <>
        
        
        <div className="card-portfolio-card">
            <div className="card-image-portfolio-card">
                <img src={image} alt={title} />
            </div>
            
            <div className="card-content-portfolio-card">
                <p>{paragraph}</p>
                
                <div className="lowerpart-portfolio-card">
                    <h3>{projectName}</h3>
                    <div className="icon-portfolio-card">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                                stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                        </svg>
        
                    </div>

                </div>
                
            </div>
            
        </div>

       

       
    </>
  )
}
