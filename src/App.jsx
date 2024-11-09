import { Routes, Route, useNavigate } from "react-router-dom";
import { scroller } from 'react-scroll';
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import "./App.scss";
import { routes } from "./routerConfig.jsx";

const App = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || '/');
  const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || 'profile');
  const [isSmallScreen,] = useState(window.innerWidth < 800);
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleScrollToSection = (page, section) => {
    setActiveLink(section);
    setActivePage(page);
    navigate(page);
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }, 200);
  };

  // Guarda la página y sección activas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
    localStorage.setItem('activeLink', activeLink);
  }, [activePage, activeLink]);

  const closeAll = () => {
    setMenuIsActive(false);
  }

  return (
    <div className="app" onClick={closeAll}>
        <Header
          activeLink={activeLink}
          isSmallScreen={isSmallScreen}
          menuIsActive={menuIsActive}
          setMenuIsActive={setMenuIsActive}
          activePage={activePage}
          handleScrollToSection={handleScrollToSection}
        />
        <Routes>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))
          }
        </Routes>
        <Footer
          activeLink={activeLink}
          isSmallScreen={isSmallScreen}
          activePage={activePage}
          handleScrollToSection={handleScrollToSection}
        />
    </div>
  );
}

export default App;