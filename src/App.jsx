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
  const [activePage, setActivePage] = useState('/');
  const [activeLink, setActiveLink] = useState('profile');
  const [isSmallScreen,] = useState(window.innerWidth < 800);
  const [menuIsActive, setMenuIsActive] = useState(false);

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
    handleScrollToSection(activePage, activeLink);
  }, [])

  const closeAll = () => {
    setMenuIsActive(false);
  }

  return (
    <div className="app" onClick={closeAll}>
        <Header
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          isSmallScreen={isSmallScreen}
          menuIsActive={menuIsActive}
          setMenuIsActive={setMenuIsActive}
          activePage={activePage}
          setActivePage={setActivePage}
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
          setActiveLink={setActiveLink}
          isSmallScreen={isSmallScreen}
          activePage={activePage}
          setActivePage={setActivePage}
          handleScrollToSection={handleScrollToSection}
        />
    </div>
  );
}

export default App;