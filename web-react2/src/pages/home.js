import React from "react";
import "./style.css";

function Home() {
    return (
        <div>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Raymond Huang
                        </h1>
                        <br></br>
                        <p class="text-small">
                        I am currently studying at California State University - Fullerton, pursuing a bachelor's degree in Computer Science. My hobbies include car restoration and modifications, 
                        pc building and troubleshooting, and tinkering with things. I want to pursue full-stack development or create games.

                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
            <img 
                src="linkedin looking ah ah.jpg" 
                alt="Right Middle Image" 
                className="box-main"
                />
            </div>


            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            That Random Fish In The Sea
                        </h1>
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




export default Home;