import { Card } from "./Card/Card"


import '../../../src/css/article/article.css';

export const Article: React.FC = () => {
  return (
    <>

    <div className="article-article-a">

    <div className="article-container-article-a">
      <h1 className="article-title-article-a ">Article</h1>
      <div className="container-article-a ">
        <Card 
          title="CSS" 
          image="https://via.placeholder.com/150" 
          paragraph="I love CSS" 
        />
        <Card 
          title="Nest" 
          image="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" 
          paragraph="I love Nest" 
        />
        <Card 
          title="Nest" 
          image="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" 
          paragraph="I love Nest" 
        />
        <Card 
          title="Nest" 
          image="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" 
          paragraph="I love Nest" 
        />
        {/* Agrega más tarjetas aquí según sea necesario */}
      </div>
    </div>

    </div>

    
    </>
  )
}
