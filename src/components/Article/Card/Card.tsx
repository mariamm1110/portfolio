
import '../../../css/article/card.css';

interface CardProps {
    title: string;
    paragraph: string;
    image: string;
}

export const Card: React.FC<CardProps> = ({title, paragraph, image}) => {
  return (
    <div className="card-article">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{paragraph}</p>
    </div>
  )
}
