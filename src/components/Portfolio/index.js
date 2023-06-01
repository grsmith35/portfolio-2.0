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
            "description": "Text-me-Today was a collaborative project I worked on with classmates, aimed at providing helpful reminders to individuals for upcoming events. This innovative website had the capability to send reminders, share amusing jokes, and provide weather forecasts for the day. Leveraging HTML, CSS, and bootflat for stylish design elements, along with JavaScript for functionality, we successfully developed a user-friendly solution to keep users informed and entertained."
        },
        {
            "name": "Riley's Kitchen",
            "repository": "https://github.com/jeshuasalgado/Project2",
            "img": kitchen,
            "link": "https://rileys-kitchen.herokuapp.com/login",
            "description": "During my coding boot camp, I collaborated with classmates to develop Riley's Kitchen, a platform for restaurants to showcase their menu items and track required ingredients. Using JavaScript, handlebars, and Bootstrap for the front end, along with node.js and SQL for the backend and database respectively, we created an efficient solution for inventory management."
        },
        {
            "name": "AdoptABLE",
            "repository": "https://github.com/austinxewell/adoptABLE",
            "img": adoptable,
            "link": "https://adoptable-dv.herokuapp.com/",
            "description": "AdobtABLE, my final project during the coding bootcamp, was a collaborative effort with classmates to support victims of domestic violence. This website provided a platform for victims to request help, allowing users to fulfill their needs through donations of goods or money. With React.js for the front-end, Bootstrap for styling, node.js for the back-end, and MongoDB as the database, AdobtABLE offered a comprehensive solution to aid and empower those affected by domestic violence."
        },
        {
            "name": "Budget Tracker",
            "repository": "https://github.com/grsmith35/budget-tracker",
            "img": budget,
            "link": "https://budgettrakerrsmith.herokuapp.com/",
            "description": "This application caters to individuals who lead busy lifestyles and prioritize budget management. It addresses the challenge of fluctuating network connectivity by enabling users to track their finances even in the absence of a strong signal. Built with HTML, JavaScript, and CSS, this project offers a user-friendly solution for monitoring and managing money on the go."
        },
        {
            "name": "Resume Builder",
            "repository": "https://github.com/grsmith35/yesresume",
            "img": resumebuilder,
            "link": "",
            "description": 'Resume Builder was a project developed for Your Employment Solutions, a company specializing in blue-collar job placements. As some of these jobs required resumes, it posed a hurdle for many candidates. In response, I built a tool to expedite the resume building process for either recruiters or applicants. Users could input their information, click "create resume," and the application would generate a downloadable PDF format resume. To track user activity, the application utilized a MongoDB database to store applicant names, emails, and usage dates. The site was constructed using React.js and Bootstrap for stylish design elements. Node.js served as the back-end technology, seamlessly integrating with MongoDB to provide a comprehensive solution for resume generation and user data management.'
        },
        {
            "name": "Task Master Pro",
            "repository": "https://github.com/grsmith35/taskmaster-pro",
            "img": taskmaster,
            "link": "https://grsmith35.github.io/taskmaster-pro/",
            "description": "Task Master Pro is a streamlined task tracker designed to empower users in creating and monitoring their tasks effectively. This intuitive application allows users to easily create tasks and track their status. With the ability to drag and drop tasks between different sections, users can effortlessly keep tabs on the progress of each task. Task Master Pro simplifies task management and offers a seamless experience for organizing and monitoring tasks with ease. This was built with HTML, JavaScript, and CSS."
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