import { personalInfo } from "../../utils/info";
import { Element } from "react-scroll";
import "./contact.scss";

const Contact = () => {
    return(
        <Element className="contact" name="contact">
            <div className="info">
                <h2 className="info-title">Contact</h2>
                <div className="info-info">
                    <h3 className="info-email">{personalInfo.email}</h3>
                    <h3 className="info-phone">{personalInfo.phone}</h3>
                </div>
            </div>
            <div className="social">
                <h2 className="social-title">My social network</h2>
                <div className="social-info">
                    <a className="social-link pointer" href={personalInfo.linkedinUrl} target="_blank">Linkedin</a>
                    <a className="social-link pointer" href={personalInfo.githubUrl} target="_blank">Github</a>
                    <a className="social-link pointer" href={personalInfo.frontendMentorUrl} target="_blank">Frontend Mentor</a>
                </div>
            </div>
        </Element>
    );
}

export default Contact;