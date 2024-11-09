import { Link } from "react-router-dom";
import "./navBarLinks.scss";

const NavBarLinks = ({
    activeLink,
    activePage,
    handleScrollToSection
}) => {
    console.log(`page: ${activePage}`);
    console.log(`link: ${activeLink}`);
    console.log(window.location.pathname);
    console.log(window.location.hash);
    console.log(window.location.search);

    return (
        <nav className="nav-bar-div">
            <Link
                className={`pointer section-link ${activeLink === 'profile' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'profile');
                }}
            >
                <p>Home</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'tech' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'tech');
                }}
            >
                <p>Technologies</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'projects' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'projects');
                }}
            >
                <p>Projects</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'about' ? 'active' : ''}`}
                to="/about"
                onClick={() => {
                    handleScrollToSection('/about', 'about');
                }}
            >
                <p>About</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'contact' ? 'active' : ''}`}
                to="/contact"
                onClick={() => {
                    handleScrollToSection('/contact', 'contact');
                }}
            >
                <p>Contact</p>
            </Link>
        </nav>
    );
}

export default NavBarLinks;