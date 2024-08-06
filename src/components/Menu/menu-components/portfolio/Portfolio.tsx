import React, { useRef } from 'react';
import { CardContainer } from './portfolio-components/CardContainer';
import '../../../../css/portfolio/portfolio.css';
import { ProjectsContainer } from './portfolio-components/ProjectsContainer';

export const Portfolio: React.FC = () => {

    
  return (
    <>
    <CardContainer/>
    <div className="separador-portfolio"></div>
    <ProjectsContainer/>
    
    </>
    
    
  )
}
