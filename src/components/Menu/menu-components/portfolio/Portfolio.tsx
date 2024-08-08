import React, { useRef } from 'react';
import { CardContainer } from './portfolio-components/CardContainer';
import '../../../../css/portfolio/portfolio.css';
import { ProjectsContainer } from './portfolio-components/ProjectsContainer';

export const Portfolio: React.FC = () => {

  const targetRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

    
  return (
    <>
    <div className="body-portfolio-click" onClick={handleLike}>
      <CardContainer/>
    </div>
    

    <div className="separador-portfolio"></div>
    
    
    <div className="body-portfolio-target" ref={targetRef}>
    <ProjectsContainer/>
    </div>
    
    </>
    
    
  )
}
