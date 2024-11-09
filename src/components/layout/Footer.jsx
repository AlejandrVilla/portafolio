import IconLink from "../common/IconLink.jsx";
import NavBarLinks from "../common/NavBarLinks.jsx";
import { personalInfo } from "../../utils/info.jsx";
import "./footer.scss";

const Footer = ({
    activeLink,
    isSmallScreen,
    activePage,
    handleScrollToSection
}) => {
    return (
        <footer className="footer">
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
                {
                    !isSmallScreen &&
                    <NavBarLinks
                        activeLink={activeLink}
                        activePage={activePage}
                        handleScrollToSection={handleScrollToSection}
                    />
                }
                <p>Designed by: me :D</p>
            </div>
        </footer>
    );
}

export default Footer;