import "./iconLink.scss";

const IconLink = ( { iconUrl, url } ) => {
    return(
        <a 
            className="icon-url pointer"
            href={url} 
            target="_blank"
        >
            <img 
                className="icon-img pointer"
                src={iconUrl} 
                alt="icon"
            />
        </a>
    );
}

export default IconLink;