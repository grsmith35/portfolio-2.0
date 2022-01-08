import React from 'react';
import portrait from '../../assets/images/portrait.jpg';
import './about.css';

function About() {
    return (
        <div className="container columns">
            <div className="column is-6 aboutme">
                <h3>A bit about Me!</h3>
                <div>I am a hard working, dedicated, and motivated person! I am always pushing to become better in what ever it is i am doing. I never want to settle for mediocrity!</div>
                <div>I have worked in IT for the last 6 years at a staffing agency. While working there I would see people waste time on repetitive tasks and i looked for ways to automate those tasks. This started my journey with coding. I started writing python scripts for people to use to help convert spreadsheets, send text messages, and create job templates. All the other tasks in my job became boring and I was always looking for new coding projects. I found the U of U full stack boot camp in May of 2021 and decided to make the change into my new career.</div>
                <div>I love being with people I care about. What ever that includes I'm game for. From sitting around the table playing games or just chatting to going camping or mountain biking, I'm in if it's with someone important in my life.</div>
                
            </div>
            <div className="column is-6">
                <img src={portrait} alt="portrait of Riley" className="portrait"/>
            </div>        
        </div>
        
    );
}

export default About