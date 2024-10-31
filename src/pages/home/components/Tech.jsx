import TechItem from "../../../components/specific/TechItem.jsx";
import TechList from "../../../components/specific/TechList.jsx";
import { icons } from "../../../utils/info.jsx";
import "./tech.scss";

const Tech = () => {
    return(
        <div className="tech">
            <h2 className="tech-title">Tech stack</h2>
            <h4 className="tech-text">Technologies I've been working with recently</h4>

            <TechList>
                {
                    icons.map( (icon, index) => {
                        // const iconPath = new URL(icon.path, import.meta.url).href;
                        return <TechItem
                            key={index}
                            path={icon.path}
                            alt={icon.alt}
                        />;
                    })

                }
            </TechList>
        </div>
    );
}

export default Tech;