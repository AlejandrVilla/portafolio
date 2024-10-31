import { useState } from "react";
import NavBarLinks from "../common/NavBarLinks";
import "./sidebar.scss";

const Sidebar = ({ activeLink, setActiveLink, menuIsActive, setMenuIsActive }) => {
    return (
        <div className="sidebar">
            <img
                onClick={ e => {
                    e.stopPropagation();
                    setMenuIsActive(!menuIsActive);
                }} 
                className="menu-icon" 
                src="/icons/menu.svg" 
                alt="menu"
            />
            {menuIsActive && 
                <div className="sidebar-nav-div" onClick={e => e.stopPropagation()}>
                    <NavBarLinks
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    />
                </div>
            }
        </div>
    );
}

export default Sidebar;