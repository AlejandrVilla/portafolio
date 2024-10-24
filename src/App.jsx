import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import "./App.scss";
import { routes } from "./routerConfig.jsx";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))
          }
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;