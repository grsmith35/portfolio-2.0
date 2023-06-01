import React from 'react';
import adoptable from '../../assets/images/adoptable.jpeg';
import budget from '../../assets/images/budget.png';
import kitchen from '../../assets/images/kitchen.png';
import textme from '../../assets/images/text-me.jpg';
import resumebuilder from '../../assets/images/resumebuilder.JPG';
import taskmaster from '../../assets/images/taskmaster.png';
import './portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            "name": "Text-me-Today",
            "repository": "https://github.com/GarciaE89/text-me-today",
            "img": textme,
            "link": "https://garciae89.github.io/text-me-today/",
            "description": "Text-me-Today was a project I build with some classmates. This site was meant to help remind people of things they may have coming up. It could send a reminder, send a joke, or tell you what the weather will be like later that day. This project was built with HTML, CSS, and bootflat for styling and JavaScript."
        },
        {
            "name": "Riley's Kitchen",
            "repository": "https://github.com/jeshuasalgado/Project2",
            "img": kitchen,
            "link": "https://rileys-kitchen.herokuapp.com/login",
            "description": "Riley's Kitchen was a project I built with class mates during my coding bootcamp. It was built to be a source for restaurants to see what dishes they were offering to customers and what ingredients each required. The idea was to provide an inventory list to restaurants so they could later track what they had and make sure they had all needed ingredients. We used JavaScript and handlebars with bootstrap for the front-end. Then we used node.js for the backend, and SQL for the database."
        },
        {
            "name": "AdoptABLE",
            "repository": "https://github.com/austinxewell/adoptABLE",
            "img": adoptable,
            "link": "https://adoptable-dv.herokuapp.com/",
            "description": "AdobtABLE was the final project build with class mates for my coding bootcamp. It was built to be a help to victims of domestic violence. The site would provide victims with a place to request help. They could put in needs and other users could go in and see those needs to either provide goods or money. We also included a chat feature so donors could discuss with the victims for meet ups or additional help. We built the project using React.js for the front-end and bootstrap for the styling. We then used node.js for the back-end and mongodb for the database."
        },
        {
            "name": "Budget Tracker",
            "repository": "https://github.com/grsmith35/budget-tracker",
            "img": budget,
            "link": "https://budgettrakerrsmith.herokuapp.com/",
            "description": "This application is built for people who are always on the go, but also trying to stick to their budget. Sometimes you have service and sometimes you have a weak or no signal at all. This app allows users to keep track of their money even when there is no service. This project was built using HTML, JavaScript, and CSS."
        },
        {
            "name": "Resume Builder",
            "repository": "https://github.com/grsmith35/yesresume",
            "img": resumebuilder,
            "link": "",
            "description": "Resume Builder was a project I built for my last company, Your Employment Solutions. The company specializes in placing blue collar workers on jobs. Some of those jobs sometimes required a resume. This became a hurdle for many of the candidates and the company asked to have a tool that could help either the recruiter or the applicants speed up the resume building process. The applicants would fill out all the information and click create resume, it would then create a PDF format resume and download it right to the computer. The company wanted to keep track of the users that were using the application so it has a mongodb database to track applicants name, email, and date of use. The site was built using React.js and bootstrap for styling. Then is uses node.js for the back-end and mongodb for the database."
        },
        {
            "name": "Task Master Pro",
            "repository": "https://github.com/grsmith35/taskmaster-pro",
            "img": taskmaster,
            "link": "https://grsmith35.github.io/taskmaster-pro/",
            "description": "Task Master Pro is a simple task tracker that allows users to create tasks and track the status of each. Features the ability to drag and drop the tasks from one section to another to keep track of each status."
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
                            <div className='card-body'>
                            <p>{project.description}</p>

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