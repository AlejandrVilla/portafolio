import { Link } from "react-router-dom";
import "./navBarLinks.scss";

const NavBarLinks = ({
    activeLink,
    setActiveLink,
    activePage,
    setActivePage,
    handleScrollToSection
}) => {
    const handleLinkClick = (page, link) => {
        setActiveLink(link);
        setActivePage(page);
    };
    console.log(`page ${activePage}`);

    return (
        <nav className="nav-bar-div">
            <Link
                className={`pointer section-link ${activeLink === 'profile' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'profile');
                    handleLinkClick('/', 'profile');
                }}
            >
                <p>Home</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'tech' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'tech');
                    handleLinkClick('/', 'tech');
                }}
            >
                <p>Technologies</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'projects' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'projects');
                    handleLinkClick('/', 'projects');
                }}
            >
                <p>Projects</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'about' ? 'active' : ''}`}
                to="/about"
                onClick={() => {
                    handleScrollToSection('/about', 'about');
                    handleLinkClick('/about', 'about')
                }}
            >
                <p>About</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'contact' ? 'active' : ''}`}
                to="/contact"
                onClick={() => {
                    handleScrollToSection('/contact', 'contact');
                    handleLinkClick('/contact', 'contact')
                }}
            >
                <p>Contact</p>
            </Link>
        </nav>
    );
}

export default NavBarLinks;