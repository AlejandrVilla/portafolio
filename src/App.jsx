import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import "./App.scss";
import { routes } from "./routerConfig.jsx";

const App = () => {
  const [activeLink, setActiveLink] = useState('profile');
  const [isSmallScreen,] = useState(window.innerWidth < 800);
  const [menuIsActive, setMenuIsActive] = useState(false);

  const closeAll = () => {
    setMenuIsActive(false);
  }

  return (
    <div className="app" onClick={closeAll}>
      <Router>
        <Header
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          isSmallScreen={isSmallScreen}
          menuIsActive={menuIsActive}
          setMenuIsActive={setMenuIsActive}
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
        />
      </Router>
    </div>
  );
}

export default App;