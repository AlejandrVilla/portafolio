import NavBarLinks from "../common/NavBarLinks";
import "./sidebar.scss";

const Sidebar = ({
    activeLink,
    menuIsActive,
    setMenuIsActive,
    activePage,
    handleScrollToSection
}) => {
    return (
        <div className="sidebar">
            <img
                onClick={(e) => {
                    e.stopPropagation();
                    setMenuIsActive(!menuIsActive);
                }}
                className="menu-icon"
                src="/icons/menu.svg"
                alt="menu"
            />
            <div
                className={`sidebar-nav-div ${menuIsActive ? 'active' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <NavBarLinks
                    activeLink={activeLink}
                    activePage={activePage}
                    handleScrollToSection={handleScrollToSection}
                />
            </div>
        </div>
    );
};

export default Sidebar;
