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
import Skills from "./pages/skills";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact"element={<Contact />} />
                <Route path="/about"element={<About />} />
                <Route path="/skills" element={<Skills />} />

            </Routes>
        </Router>
    );
}

export default App;