import NavBarLinks from "../common/NavBarLinks.jsx";
import { personalInfo } from "../../utils/info.jsx";
import IconLink from "../common/IconLink.jsx"
import "./header.scss";

const Header = ({ activeLink, setActiveLink }) => {
    return (
        <div className="header">
            <div className="header-div">
                <NavBarLinks
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                />
                <div className="header-links">
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
        </div>
    );
}

export default Header;