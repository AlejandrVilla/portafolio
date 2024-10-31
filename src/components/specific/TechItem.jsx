const TechItem = ( props ) => {
    return(
        <div className="icon-div">
            <img 
                style={{width:'100px', height:'100px'}} 
                src={props.path} 
                alt={props.alt} />
        </div>
    );
}

export default TechItem;