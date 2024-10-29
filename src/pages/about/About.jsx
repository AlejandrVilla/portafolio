import { Element } from "react-scroll";
import { achievements, education, work } from "../../utils/info";
import AboutList from "../../components/specific/AboutList";
import AboutItem from "../../components/specific/AboutItem";
import "./About.scss";

const About = () => {
    return(
        <Element className="about" name="about">
            <div className="education-section">
                <h2 className="title">Education, Licensing and Certifications</h2>
                <AboutList>
                    {
                        education.map((item, index) => (
                            <AboutItem
                                key={index}
                                item={item}
                            />
                        ))
                    }
                </AboutList>
            </div>
            <div className="achievements-section">
                <h2 className="title">Achievements</h2>
                <AboutList>
                    {
                        achievements.map((item, index) => (
                            <AboutItem
                                key={index}
                                item={item}
                            />
                        ))
                    }
                </AboutList>
            </div>
            <div className="work-section">
                <h2 className="title">Professional experience</h2>
                <AboutList>
                    {
                        work.map((item, index) => (
                            <AboutItem
                                key={index}
                                item={item}
                            />
                        ))
                    }
                </AboutList>
            </div>
        </Element>
    );
}

export default About;