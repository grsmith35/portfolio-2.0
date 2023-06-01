import React from 'react';
import resume from '../../assets/images/resume.pdf'
import resumeimg from '../../assets/images/resume.JPG'
import './resume.css'

export default function Resume() {

    return (
        <div className="container">
            <div className="columns">
                <div className="column is-6 iscenter">
                    <h3>Resume</h3>
                    <img className="resumeimg" src={resumeimg} />
                    <div className="iscenter">
                        <a href={resume} download='resume.pdf'>
                            <button className="button is-dark downloadbutton">Download Resume</button>
                        </a>
                        
                    </div>
                </div>
                <div className="column is-6">
                    <h3>Proficiencies</h3>
                    <div className="columns proficiencies">
                        <div className="column is-6">
                            <h4>Front End</h4>
                            <ul className="skillboxes mirrorskillbox">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Bootstrap/BootFlat</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>NPM</li>
                            </ul>
                        </div>
                        <div className="column is-6">
                            <h4>Back End</h4>
                            <ul className="skillboxes">
                                <li>API's</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>MVC</li>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>PWA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}