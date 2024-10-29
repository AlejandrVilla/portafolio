import "./navBarLinks.scss";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from 'react-scroll';

const NavBarLinks = ({ activeLink, setActiveLink }) => {
    const navigate = useNavigate();

    const handleScrollToSection = (page, section) => {
        setActiveLink(section);
        navigate(page);
        setTimeout(() => {
            scroller.scrollTo(section, {
                smooth: true,
                duration: 500,
            });
        }, 100);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="nav-bar">
            <div className="nav-bar-div">
                <Link
                    className={`section-link ${activeLink === 'profile' ? 'active' : ''}`}
                    to="/"
                    onClick={() => {
                        handleScrollToSection('/', 'profile');
                        handleLinkClick('profile');
                    }}
                >
                    <p>Home</p>
                </Link>
                <Link
                    className={`section-link ${activeLink === 'tech' ? 'active' : ''}`}
                    to="/"
                    onClick={() => {
                        handleScrollToSection('/', 'tech');
                        handleLinkClick('tech');
                    }}
                >
                    <p>Technologies</p>
                </Link>
                <Link
                    className={`section-link ${activeLink === 'projects' ? 'active' : ''}`}
                    to="/"
                    onClick={() => {
                        handleScrollToSection('/', 'projects');
                        handleLinkClick('projects');
                    }}
                >
                    <p>Projects</p>
                </Link>
                <Link
                    className={`section-link ${activeLink === 'about' ? 'active' : ''}`}
                    to="/about"
                    onClick={() => { 
                        handleScrollToSection('/about', 'about');
                        handleLinkClick('about') 
                    }}
                >
                    <p>About</p>
                </Link>
                <Link
                    className={`section-link ${activeLink === 'contact' ? 'active' : ''}`}
                    to="/contact"
                    onClick={() => { 
                        handleScrollToSection('/contact', 'contact');
                        handleLinkClick('contact') 
                    }}
                >
                    <p>Contact</p>
                </Link>
            </div>
        </nav>
    );
}

export default NavBarLinks;