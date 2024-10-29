import ProjectItem from "../../../components/specific/ProjectItem";
import ProjectList from "../../../components/specific/ProjectList";
import { projects } from "../../../utils/info";
import "./projects.scss";

const Projects = () => {
    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <h4 className="projects-text">Things I have developed so far</h4>
            <ProjectList>
                {
                    projects.map( (project, index) => (
                        <ProjectItem
                            key={index}
                            project={project}
                        />
                    ))
                }
            </ProjectList>
        </div>
    )
}

export default Projects;