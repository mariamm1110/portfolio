import { ServiceCard } from "./ServiceCard"
import '../../../../css/skills/services.css';
import imgReact from '../../../../assets/react.png'
import imgBack from '../../../../assets/back.png'
import imgProject from '../../../../assets/project.png'

export const Services = () => {
  return (
    <>
        <div className="body-services">

            <div className="container-services">

                <div className="header-services">
                    <h1 className="my-services">My</h1><h1 className="services-services">Services</h1>
                </div>
                <div className="card-services-container">
                    <ServiceCard
                    image={imgBack}
                    title="Backend"
                    paragraph1="API creation and integration for seamless data exchange."
                    paragraph2="Development of scalable server-side apps."
                    paragraph3="Database management with SQL  NoSQL."
                    paragraph4="Server performance and security optimization."

                    />
                    <ServiceCard
                    image={imgReact}
                    title="Fronted"
                    paragraph1="Creation of responsive websites."
                    paragraph2="HTML, CSS, JavaScript and JSX."
                    paragraph3="Website performance and accessibility optimization."
                    paragraph4="Server performance and security optimization."

                    />
                   
                    <ServiceCard
                    image={imgProject}
                    title="Project management"
                    paragraph1="Efficient planning and resource allocation."
                    paragraph2="Risk management and mitigation strategies."
                    paragraph3="Effective team collaboration and communication."
                    paragraph4="Timely delivery and project evaluation."

                    />
                </div>

            </div>
            
        </div>
    </>
  )
}
