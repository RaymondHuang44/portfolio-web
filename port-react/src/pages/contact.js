import React from "react";
import "./style.css";

const Contact = () => {
    return (

        <div>
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Personal Email: raymondhuang44@gmail.com
                            <br></br>
                            Campus Email: rhuang44@csu.fullerton.edu
                        </h1>  
                        <br></br>          
                        <a class="button_linkedin" href="https://www.linkedin.com/in/raymond-huang-5b05a1308/" target="_blank">LinkedIn</a>
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

export default Contact;