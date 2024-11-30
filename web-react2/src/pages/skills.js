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

export default Skills;