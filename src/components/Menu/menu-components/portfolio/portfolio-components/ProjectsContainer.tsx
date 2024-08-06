import { Project } from "./Project"


export const ProjectsContainer = () => {
  return (
    <>
        <div className="container-project-container">
            <Project
                title="titulo"
                paragraph="paragraph"
                subtitle1="subtitle"
                number1={1}
                background="linear-gradient(to bottom, #eed2ab, #97b5fd)"/>
            <Project
                title="titulo2"
                paragraph="paragraph2"
                subtitle1="subtitle2"
                number1={2}
                background="linear-gradient(to bottom, #97b5fd, #acdeab)"/>
            <Project
                title="titulo3"
                paragraph="paragraph3"
                subtitle1="subtitle3"
                number1={3}
                background="linear-gradient(to bottom, #acdeab, #f8f6b9)"/>
            <Project
                title="titulo3"
                paragraph="paragraph3"
                subtitle1="subtitle3"
                number1={3}
                background="linear-gradient(to bottom, #f8f6b9, #fab0d3)"/>
        </div>
    </>
  )
}
