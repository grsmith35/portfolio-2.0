import React from 'react';
import portrait from '../../assets/images/portrait.jpg';
import './about.css';

function About() {
    return (
        <div className="container columns m-3">
            <div className="column is-5 aboutme">
                <h3>A bit about Me!</h3>
                <div>
I am driven by an unwavering work ethic, unyielding dedication, and an insatiable drive for personal growth. I continuously strive to surpass my own limits and excel in any endeavor I undertake, refusing to settle for anything less than excellence.</div>
                <div>
                &nbsp;

                    <p>
                    For the past year and a half, I have had the incredible opportunity to serve as a front-end developer for a globally utilized reservation booking and tracking software within a prominent company. Prior to this role, I amassed 6 years of experience in IT at a staffing agency. During my tenure there, I observed colleagues investing valuable time in repetitive tasks, igniting my passion for seeking automation solutions. This marked the inception of my coding journey.
                    </p>
                    &nbsp;
                    <p>
                    Driven by a desire to optimize efficiency, I began crafting Python scripts to assist my co-workers in converting spreadsheets, dispatching text messages, and generating job templates. As I delved deeper into coding, the other responsibilities in my job grew monotonous, leaving me constantly yearning for fresh coding projects. It was during this period that I fortuitously discovered the University of Utah Full Stack Bootcamp in May of 2021, prompting me to redirect my career path towards this exciting new direction.
                    </p>
                </div>
                &nbsp;

                <div>My passions are my people and my code!</div>
                
            </div>
            <div className="column is-5">
                <img src={portrait} alt="portrait of Riley" className="portrait"/>
            </div>        
        </div>
        
    );
}

export default About