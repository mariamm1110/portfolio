import { Project } from "./Project"


export const ProjectsContainer = () => {
  return (
    <>
        <div className="container-project-container">
            <Project
                title="LifeLink app"
                paragraph="Developing a web application to enhance the coordination between hospitals and patients for non-viable organ transplants.
                Aiming to create a seamless user experience for managing and coordinating the transplant process."
                subtitle1="NEST"
                number1={70}
                background="linear-gradient(to bottom, #eed2ab, #97b5fd)"
                color="linear-gradient(to bottom, #db2265, #ff5969)"/>
            <Project
                title="so active web page"
                paragraph="Allows users to buy and interact with products, selecting them in detail by category, color or size. 
                This well-structured e-shop lets both client and owner save time and make their tasks easily, without depending on a direct contact."
                subtitle1="JS"
                number1={45}
                background="linear-gradient(to bottom, #97b5fd, #acdeab)"
                color="linear-gradient(to bottom, #ff5969, #ff8840)"/>
            <Project
                title="Furniture Card"
                paragraph="Designed and implemented a vissually appealing and responsive product card for a forniture e-commerce website usign HTML, CSS and JS.
                This cards will serve as a reusable component that can be integrated into various sections of the website."
                subtitle1="CSS"
                number1={87}
                background="linear-gradient(to bottom, #acdeab, #f8f6b9)"
                color="linear-gradient(to bottom, #ff8840 , #ffbb63)"/>
            <Project
                title="Webfolio"
                paragraph="Designed and built a personal webfolio wich will serve as an online portfolio showing skills, projects, experience and contact information.
                It is a professional, visually appealing, and fully responsive website that reflects personal brand"
                subtitle1="JSX"
                number1={39}
                background="linear-gradient(to bottom, #f8f6b9, #fab0d3)"
                color="linear-gradient(to bottom, #ffdb99, #db2265)"/>
                
        </div>
    </>
  )
}
