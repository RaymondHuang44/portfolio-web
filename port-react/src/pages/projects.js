import React from "react";
import "./style.css";


const Projects = () => {
    return (
        <div>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Portfolio
                        </h1>
                        <br></br>
                        <a class="button_youtube" href="https://www.youtube.com/@raymond_huang" target="_blank">Automotive Project</a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a class="button_youtube" href="https://www.youtube.com/@theasianramen6709" target="_blank">PC hardware build and repairs</a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a class="button_instagram" href="https://www.instagram.com/2blandphotos/" target="_blank">Photography</a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a class="button_github" href="https://github.com/RaymondHuang44" target="_blank">GitHub</a>

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
};

export default Projects;