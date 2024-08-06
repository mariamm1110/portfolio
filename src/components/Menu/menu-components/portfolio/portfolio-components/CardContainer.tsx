import React, { useRef } from "react"
import { PortfolioCard } from "./PortfolioCard";
import '../../../../../css/portfolio/cardContainer.css';
import imgReact from '../../../../../css/portfolio/images/reactazul.png';


export const CardContainer: React.FC = () => {

    const targetRef = useRef<HTMLDivElement>(null);

    const handleLike = () => {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    
  return (
    <>
        <div className="body-card-container">

        <div className="container-card-container">
            <h2>Mi titulo</h2>
            
            <div className="cards-container-card-container">
                

                <PortfolioCard 
                title={'Card 1'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                image={imgReact} 
                projectName="ProjectName1" />
                <PortfolioCard 
                title={'Card 1'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                image={'https://www.svgrepo.com/show/533573/arrow-circle-right.svg'} 
                projectName="ProjectName1" />
                <PortfolioCard 
                title={'Card 1'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                image={'https://www.svgrepo.com/show/533573/arrow-circle-right.svg'} 
                projectName="ProjectName1" />
                
            </div>
        </div>

        </div>
    
        
    

    </>
  )
}
