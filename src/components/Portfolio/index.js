import React from 'react';
import adoptable from '../../assets/images/adoptable.jpeg';
import budget from '../../assets/images/budget.png';
import kitchen from '../../assets/images/kitchen.png';
import textme from '../../assets/images/text-me.jpg';
import runbuddy from '../../assets/images/runbuddy.png';
import taskmaster from '../../assets/images/taskmaster.png';
import './portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            "name": "Text-me-Today",
            "repository": "https://github.com/GarciaE89/text-me-today",
            "img": textme,
            "link": "https://garciae89.github.io/text-me-today/"
        },
        {
            "name": "Riley's Kitchen",
            "repository": "https://github.com/jeshuasalgado/Project2",
            "img": kitchen,
            "link": "https://garciae89.github.io/text-me-today/"
        },
        {
            "name": "AdoptABLE",
            "repository": "https://github.com/austinxewell/adoptABLE",
            "img": adoptable,
            "link": "https://adoptable-dv.herokuapp.com/"
        },
        {
            "name": "Budget Tracker",
            "repository": "https://github.com/grsmith35/budget-tracker",
            "img": budget,
            "link": "https://budgettrakerrsmith.herokuapp.com/"
        },
        {
            "name": "Run Buddy",
            "repository": "https://github.com/grsmith35/run-buddy",
            "img": runbuddy,
            "link": "hhttps://grsmith35.github.io/run-buddy/"
        },
        {
            "name": "Task Master Pro",
            "repository": "https://github.com/grsmith35/taskmaster-pro",
            "img": taskmaster,
            "link": "https://grsmith35.github.io/taskmaster-pro/"
        }
    ]


    return (
        <div className="container columns is-flex-wrap-wrap">
            {projects.map((project) => (
                <div className="column is-4 cardholder">
                    <a href={project.link} key={project.name} target="_blank">
                        <div className="card">
                            <div className="card-header-title">{project.name}</div>
                            <div className="card-image">
                                <img src={project.img} alt={`${project.name} project image.`}/>
                            </div>
                            <div className="card-footer">
                                <a href={project.repository} target="_blank">Project repository</a>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
            
        </div>
    )
}