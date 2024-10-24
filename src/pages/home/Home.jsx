import Profile from "./components/Profile.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import { Element } from "react-scroll";
import "./home.scss";

const Home = () => {
    return(
        <div className="home">
            <Element name="profile">
                <Profile/>
            </Element>
            <Element name="tech">
                <Tech/>
            </Element>
            <Element name="projects">
                <Projects/>
            </Element>
        </div>
    );
}

export default Home;