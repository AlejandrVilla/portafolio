import NavBarLinks from "../common/NavBarLinks.jsx";
import { personalInfo } from "../../utils/info.jsx";
import IconLink from "../common/IconLink.jsx"
import "./header.scss";
import Sidebar from "../specific/Sidebar.jsx";

const Header = ({
    activeLink,
    setActiveLink,
    isSmallScreen,
    menuIsActive,
    setMenuIsActive,
    activePage,
    setActivePage,
    handleScrollToSection
}) => {
    return (
        <header className="header">
            <div className="header-div">
                {isSmallScreen ?
                    (
                        <Sidebar
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            menuIsActive={menuIsActive}
                            setMenuIsActive={setMenuIsActive}
                            activePage={activePage}
                            setActivePage={setActivePage}
                            handleScrollToSection={handleScrollToSection}
                        />
                    ) : (
                        <NavBarLinks
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            activePage={activePage}
                            setActivePage={setActivePage}
                            handleScrollToSection={handleScrollToSection}
                        />
                    )
                }
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
        </header>
    );
}

export default Header;