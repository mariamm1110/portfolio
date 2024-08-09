import { Card } from "./Card/Card"
import imgEia from '../../assets/eia.png'
import imgNest from '../../assets/nest.png'
import imgReact from '../../assets/react1.png'
import imgProg from '../../assets/programming.png'


import '../../../src/css/article/article.css';

export const Article: React.FC = () => {
  return (
    <>

    <div className="article-article-a">

    <div className="article-container-article-a">
      <h1 className="article-title-article-a ">Education and courses</h1>
      <div className="container-article-a ">
        <Card 
          title="EIA University" 
          image={imgEia}
          paragraph="3rd year software engineering student" 
        />
        <Card 
          title="NestJS course" 
          image={imgNest}
          paragraph="dev/talles profesional course" 
        />
        <Card 
          title="React course"  
          image={imgReact}
          paragraph="dev/talles profesional course" 
        />
        <Card 
          title="Competitive Programming" 
          image={imgProg}
          paragraph="extracurricular university Club" 
        />
        {/* Agrega más tarjetas aquí según sea necesario */}
      </div>
    </div>

    </div>

    
    </>
  )
}
