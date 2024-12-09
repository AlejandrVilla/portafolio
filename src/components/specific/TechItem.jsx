const TechItem = ( props ) => {
    return(
        <div className="icon-div">
            <img 
                style={{width:'100px', height:'100px', objectFit:"contain"}} 
                src={props.path} 
                alt={props.alt} />
        </div>
    );
}

export default TechItem;