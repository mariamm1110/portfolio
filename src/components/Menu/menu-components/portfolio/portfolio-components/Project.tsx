import '../../../../../css/portfolio/projects/project.css'
import styled from 'styled-components';

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
}

const BodyProject = styled.div<{ background: string }>`
  margin-top: 0;
  color: #fff;
  z-index: 2;
  width: 100%;
  background: ${({ background }) => background};
`;

export const Project:React.FC<ProjectProps> = ({title, paragraph,subtitle1,number1,background}) => {
  return (
    <>
    <BodyProject background={background}>


    <div className="body-project">

        <div className="container-project">
            <div className="header-project">
                <h3>{title}</h3>
            </div>
            <div className="info-container-project">
                <p>{paragraph}</p>
                <div className="grapich-container-projec">
                    <div className="bar-container-project">
                        <h3 className="number-bar-project">{number1}</h3>
                        <div className="bar-project">
                            <h2 className="bar-subtitle-project">{subtitle1}</h2>
                            <div className="bar-bar-project">
        
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
