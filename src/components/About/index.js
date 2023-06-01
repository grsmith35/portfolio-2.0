import React from 'react';
import portrait from '../../assets/images/portrait.jpg';
import './about.css';

function About() {
    return (
        <div className="container columns m-3">
            <div className="column is-5 aboutme">
                <h3>A bit about Me!</h3>
                <div>I am a hard working, dedicated, and motivated person! I am always pushing to become better in whatever it is I am doing. I never want to settle for mediocrity!</div>
                <div>For the last year and a half I have been a front-end developer for a company that has a reservation booking/tracking software used all over the world. Before that I worked in IT for 6 years at a staffing agency. While working there I saw people waste time on repetitive tasks and looked for ways to automate those tasks. This started my journey with coding. I started writing python scripts for co-workers to use to help convert spreadsheets, send text messages, and create job templates. All the other tasks in my job became boring and I was always looking for new coding projects. I found the University of Utah Full Stack Bootcamp in May of 2021 and decided to shift my career in this new direction.</div>
                <div>I love being with people I care about, whatever that includes; from playing board games, to getting outdoors for something adventurous.</div>
                
            </div>
            <div className="column is-5">
                <img src={portrait} alt="portrait of Riley" className="portrait"/>
            </div>        
        </div>
        
    );
}

export default About