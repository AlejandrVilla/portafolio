import IconLink from "../common/IconLink.jsx";
import NavBarLinks from "../common/NavBarLinks.jsx";
import { personalInfo } from "../../utils/info.jsx";
import "./footer.scss";

const Footer = ({ activeLink, setActiveLink }) => {
    return (
        <div className="footer">
            <div className="footer-contact">
                <div className="footer-personal">
                    <p>{personalInfo.phone}</p>
                    <p>{personalInfo.email}</p>
                </div>
                <div className="footer-links">
                    <IconLink
                        iconUrl={personalInfo.github}
                        url={personalInfo.githubUrl}
                    />
                    <IconLink
                        iconUrl={personalInfo.linkedin}
                        url={personalInfo.linkedinUrl}
                    />
                </div>
            </div>
            <hr />
            <div className="footer-footer">
                <NavBarLinks
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                />
                <p>Designed by: {personalInfo.name}</p>
            </div>
        </div>
    );
}

export default Footer;