import React from "react";
import "./style.css";

const About = () => {
    return (
        <div>
            
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <br></br>
                        <h2>Background</h2>
                            <p>
                            My Name is Raymond Huang, and I am currently a student at CSUF pursuing in computer science. I was born in 2002.
                            </p>
                            <br></br>
                        <h2>Education</h2>
                            <table class="table">
                                <tr>
                                    <th>Institution</th>
                                    <th>Time</th>
                                </tr>
                                <tr>
                                    <td>Woodrow Wilson Senior High School</td>
                                    <td> August 2016 - May 2020</td>
                                </tr>
                                <tr>
                                    <td>California State University, Fullerton</td>
                                    <td>August 2020 - Present</td>
                                    </tr>
                            </table>
                            <br></br>
                        <h2>Skills</h2>
                        <ol type="1">
                            <li>Software Engineering and Programming: C++, Python, JavaScript</li>
                            <li>Automotive Technician: Bodywork, Painting, Mechanical, Engine, and transmission work</li>
                            <li>Hardware Build and Repair: Building custom PC’s and troubleshoot any problems</li>
                            <li>Photography </li>
                        </ol>
                        <br></br>
                        <a class="button_resume" href="resume.pdf" target="_blank">Resume</a>

                    </div>
                </div>
            </section>
            
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf"></div>
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

export default About;