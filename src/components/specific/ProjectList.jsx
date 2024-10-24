import "./projectList.scss";

const ProjectList = ( { children } ) => {
    return(
        <div className="project-list">
            {children}
        </div>
    )
}

export default ProjectList;