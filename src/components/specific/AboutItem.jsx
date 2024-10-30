import "./aboutItem.scss";

const AboutItem = (props) => {
    return (
        <div className="about-item">
            <div className="item">
                <div className="item-info">
                    {
                        props.item.url ? (
                            <a
                                className="item-link item-title pointer"
                                href={props.item.url}
                                target="_blank"
                            >
                                {props.item.title}
                            </a>
                        ) : (
                            <p className="item-title">{props.item.title}</p>
                        )
                    }
                    <p className="item-description">{props.item.description}</p>
                </div>
                <p className="item-date">{props.item.date}</p>
            </div>
            <hr />
        </div>
    );
}

export default AboutItem;