
import '../../../../css/skills/serviceCard.css';

interface ServiceCardProps {
    image: string;
    title:string;
    paragraph1: string;
    paragraph2: string;
    paragraph3?: string;
    paragraph4?: string;
    
}



export const ServiceCard: React.FC<ServiceCardProps> = ({image, title, paragraph1, paragraph2, paragraph3,paragraph4}) => {
  return (
    <>

    <div className="body-service-card">
        <div className="service-card-card">
            <div className="service-card-container">
                <img src={image} alt="image" />
                
                <div className="service-card-title">
                    <h3>{title}</h3>
                </div>
                <div className="service-card-paragraph-container">
                    <p className="colored-bullets">{paragraph1}</p>
                    <p className="colored-bullets">{paragraph2}</p>
                    <p className="colored-bullets">{paragraph3}</p>
                    <p className="colored-bullets">{paragraph4}</p>
                </div>
            </div>

        </div>
        

    </div>
    
    </>
  )
}
