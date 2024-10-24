import "./iconLink.scss";

const IconLink = ( { iconUrl, url } ) => {
    return(
        <a 
            className="icon-url"
            href={url} 
            target="_blank"
        >
            <img 
                className="icon-img"
                src={iconUrl} 
                alt="icon"
            />
        </a>
    );
}

export default IconLink;