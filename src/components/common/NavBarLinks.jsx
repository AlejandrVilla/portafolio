import { Link, useNavigate } from "react-router-dom";
import { scroller } from 'react-scroll';
import "./navBarLinks.scss";
import { useEffect } from "react";

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
        }, 200);
    };

    useEffect(() => {
        handleScrollToSection('/', activeLink);
    }, [])

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="nav-bar-div">
            <Link
                className={`pointer section-link ${activeLink === 'profile' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'profile');
                    handleLinkClick('profile');
                }}
            >
                <p>Home</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'tech' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'tech');
                    handleLinkClick('tech');
                }}
            >
                <p>Technologies</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'projects' ? 'active' : ''}`}
                to="/"
                onClick={() => {
                    handleScrollToSection('/', 'projects');
                    handleLinkClick('projects');
                }}
            >
                <p>Projects</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'about' ? 'active' : ''}`}
                to="/about"
                onClick={() => { 
                    handleScrollToSection('/about', 'about');
                    handleLinkClick('about') 
                }}
            >
                <p>About</p>
            </Link>
            <Link
                className={`pointer section-link ${activeLink === 'contact' ? 'active' : ''}`}
                to="/contact"
                onClick={() => { 
                    handleScrollToSection('/contact', 'contact');
                    handleLinkClick('contact') 
                }}
            >
                <p>Contact</p>
            </Link>
        </nav>
    );
}

export default NavBarLinks;