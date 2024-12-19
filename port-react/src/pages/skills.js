import React from "react";
import "./style.css";

function Skills() {
    return (
        <div>
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
                          Skills
                        </h1>
                        <ol type="1">
                            <li>Software Engineering and Programming: C++, Python, JavaScript</li>
                            <li>Automotive Technician: Bodywork, Painting, Mechanical, Engine, and transmission work</li>
                            <li>Hardware Build and Repair: Building custom PC’s and troubleshoot any problems</li>
                            <li>Photography </li>
                        </ol>
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

export default Skills;