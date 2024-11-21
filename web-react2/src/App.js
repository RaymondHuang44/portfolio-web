// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import About from "./pages/about";
import { useEffect } from "react";


const RedirectToGithub = () => {
    useEffect(() => {
      window.open("https://github.com/RaymondHuang44", "_blank", "noopener,noreferrer");
    }, []);
  
    return null;
  };

  const RedirectTolinkedin = () => {
    useEffect(() => {
      window.open("https://www.linkedin.com/in/raymond-huang-5b05a1308/", "_blank", "noopener,noreferrer");
    }, []);
  
    return null;
  };

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact"element={<Contact />} />
                <Route path="/about"element={<About />} />
                <Route path="/linkedin" element={<RedirectTolinkedin />} />
                <Route path="/github" element={<RedirectToGithub />} />

            </Routes>
        </Router>
    );
}

export default App;