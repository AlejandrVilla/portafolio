import "./projectItem.scss";

const ProjectItem = (props) => {
    const imgPath = new URL(props.project.img, import.meta.url).href;

    return (
        <div className="project-item">
            <div className="project-img-div">
                <img className="project-img" src={imgPath} alt={props.project.alt} />
            </div>
            <div className="project-info">
                <h3 className="project-title">{props.project.title}</h3>
                <p className="project-description">{props.project.description}</p>
                <p className="project-tech">Tech stack: {props.project.tech.join(', ')}</p>
                <div className="project-links">
                    {props.project.liveSite
                        && (
                            <a className="div-link pointer" href={props.project.liveSite} target="_blank">
                                <img
                                    style={{ width: "24px", height: "24px" }}
                                    src="/live.svg"
                                    alt="live site"
                                />
                                <p className="project-link" >Live site</p>
                            </a>
                        )
                    }
                    <a className="div-link pointer" href={props.project.github} target="_blank">
                        <img
                            style={{ width: "24px", height: "24px" }}
                            src="/github.svg"
                            alt="github"
                        />
                        <p className="project-link">View Code</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;