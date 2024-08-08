import '../../../../../css/portfolio/projects/project.css'
import styled from 'styled-components';
import React, {useEffect, useRef} from 'react';

interface ProjectProps {
    title:string;
    paragraph:string;
    subtitle1:string;
    subtitle2?:string;
    // subtitle3?:string;
    // subtitle4?:string;
    number1:number;
    number2?:number;
    background:string;
    color:string;
}

const BodyProject = styled.div<{ background: string }>`
  margin-top: 0;
  color: #fff;
  z-index: 2;
  width: 100%;
  background: ${({ background }) => background};
`;

const HeaderProject = styled.div<{ color: string }>`
  width: 100%;
  background: ${({ color }) => color};
   -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

interface CustomStyle extends React.CSSProperties {
  '--num'?: number;
}


export const Project:React.FC<ProjectProps> = ({title, paragraph,subtitle1,number1,background, color}) => {

  const projectRef=useRef<HTMLDivElement>(null);
  const style: CustomStyle = { '--num': number1 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <>
    <BodyProject background={background}>


    <div className="body-project">

        <div className="container-project">
            <div className="header-project">
            <HeaderProject color={color}>
              <h3>{title}</h3>
            </HeaderProject>
                
                
            </div>
            <div className="info-container-project">
              <div className="info-container-project-p">
              <p>{paragraph}</p>
              </div>
                
              <div className="grapich-container-project">

                <div className="box-project">
                    <div className="shadow-project"></div>
                    <div className="content-project">
                      <div className="percent-project" data-text={subtitle1} style={style}>
                        <div className="dot-project"></div>
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                      </div>
                      <div className="number-project">
                        <h2>{number1}<span>%</span></h2>
                      </div>
                    </div>
                </div>


               





            
              </div>
            </div>
        </div>

</div>
        
        
        
        </BodyProject>

    
       
    </>
  )
}
