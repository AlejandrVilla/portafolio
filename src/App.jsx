import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import "./App.scss";
import { routes } from "./routerConfig.jsx";

const App = () => {
  const [activeLink, setActiveLink] = useState(null); 
  
  return (
    <div className="app">
      <Router>
        <Header
          activeLink={activeLink}
          setActiveLink={setActiveLink} />
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
        />
      </Router>
    </div>
  );
}

export default App;