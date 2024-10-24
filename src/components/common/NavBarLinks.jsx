import "./navBarLinks.scss";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from 'react-scroll';

const NavBarLinks = () => {
    const navigate = useNavigate();

    const handleScrollToSection = (section) => {
        navigate('/');
        setTimeout(() => {
            scroller.scrollTo(section, {
                smooth: true,
                duration: 500,
            })
        }, 100)
    };

    return(
        <nav className="nav-bar">
            <div className="nav-bar-div">
                <Link className="section-link" to="/" onClick={() => handleScrollToSection('profile')}>
                    <p>Home</p>
                </Link>
                <Link className="section-link" to="/" onClick={() => handleScrollToSection('tech')}>
                    <p>Technologies</p>
                </Link>
                <Link className="section-link" to="/" onClick={() => handleScrollToSection('projects')}>
                    <p>Projects</p>
                </Link>
                <Link className="section-link" to='/about'>
                    <p>About</p>
                </Link>
                <Link className="section-link" to="contact">
                    <p>Contact</p>
                </Link>
            </div>
        </nav>
    );
}

export default NavBarLinks;