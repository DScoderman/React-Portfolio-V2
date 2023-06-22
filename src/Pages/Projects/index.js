import ProjectCardComponent from "./Component/Card"
import { projectData } from "./data"
const ProjectPage = () => {
    return (
        <>
            <h1>I"m the project Page</h1>
            <div style={{display:'flex', flexWrap: 'wrap'}}>
            {projectData.map(project=> <ProjectCardComponent project={project}/>)}

            </div>
        </>
    )
}

export default ProjectPage