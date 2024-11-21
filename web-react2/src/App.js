import React from "react";
import "./App.css";

function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                      
                    </div>
                    <li class = "leftnav" >
                        <a href="#home">Home</a>
                    </li>
                    <li class = "leftnav">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class = "rightnav">           
                        <a href="https://www.linkedin.com/in/raymond-huang-5b05a1308/">LinkedIn</a>
                    </li>
                    <li class = "rightnav">
                        <a href="https://github.com/RaymondHuang44">GitHub</a>
                    </li>
                </ul>

            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Raymond Huang
                        </h1>
                        <br></br>
                        <p class="text-small">
                            California State University - Fullerton Senior
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Languages
                        </h1>
                        <p class="text-small">
                            C++, Python, JavaScript
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                          {/* add something */}
                        </h1>
                        <p class="text-small">
                            {/* sample text */}
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Created in 2024
                    <br></br>
                    Project for CPSC 349
                </p>
            </footer>
        </div>
    );
}

export default App;