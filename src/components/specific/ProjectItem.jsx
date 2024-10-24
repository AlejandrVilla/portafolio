import "./projectItem.scss";

const ProjectItem = ( props ) => {
    const imgPath = new URL(props.img, import.meta.url).href;

    return(
        <div className="project-item">
            <div className="project-img-div">
                <img className="project-img" src={imgPath} alt={props.alt}/>
            </div>
            <div className="project-info">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-description">{props.description}</p>
                <p className="project-tech">Tech stack: {props.tech.join(', ')}</p>
                <div className="project-links">
                    {props.liveSite 
                    && (
                        <div className="div-link">
                            <img 
                                style={{width:"24px", height:"24px"}}
                                src="/live.svg"
                                alt="live site"
                            />
                            <a className="project-link" href={props.liveSite} target="_blank">Live site</a>
                        </div>
                    )
                    }
                    <div className="div-link">
                        <img 
                            style={{width:"24px", height:"24px"}}
                            src="/github.svg"
                            alt="github"
                        />
                        <a className="project-link" href={props.github} target="_blank">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;