import React from "react";
import "./ProjectModal.css";

interface ProjectModalProps {
    projectId: string;
    onClose: () => void;
}

interface ProjectDetails {
    title: string;
    image?: string;
    description: string | JSX.Element;
}

const projectData: { [key: string]: ProjectDetails } = {
    project1: {
        title: "Master Thesis",
        description: (
            <>
                <p>
                    I am currently working on my master thesis in software engineering.
                    The topic is about adaptive plannign for multi-robot systems.
                    The code for the project can be found on my <a href="https://github.com/danj98/adaptiveMRS">github page</a>.
                </p>
            </>
        )
    },
    project2: {
        title: "Website",
        description: (
            <>
                <p>
                    This is my current website. It is built using React and Typescript.
                    The code for this project can be found on my <a href="https://github.com/danj98/personal-website">github page</a>.
                    Feel free to explore more of it.
                </p>
            </>
        ),
        image: "https://github.com/danj98/ArduinoFaceTracker/raw/master/resources/prototype.jpg"
    },
    project3: {
        title: "Arduino tracker",
        description: (
            <>
                <p>
                    This is a fun little project I did to see if I could make a 
                    targeting system for a laser pointer using an Arduino and a 
                    webcam. It consists of an arduino connected to a pc via USB, 
                    a webcam and a laser pointer. I use a python script running 
                    <a href="https://opencv.org/" target="_blank" rel="noreferrer"> OpenCV </a>
                     to track faces with the webcam. This is then fed to the arduino which then 
                     moves the laser pointer to the center of the face by controlling the servos.
                     I wanted to use a OV7670 camera module, but the one I got was broken. 
                     The rig for the prototype is custom modeled and 3d printed by me.
                </p>
                <p>
                    The code for this project can be found on my <a href="https://github.com/danj98/ArduinoFaceTracker">github page</a>.
                </p>
            </>
        )       
    },
    project4: {
        title: "Dotfiles",
        description: (
            <>
                <p>
                    This is my dotfiles for my linux setup. I am currently using
                    EndeavourOS with AwesomeWM as my window manager. There are also
                    some files for zsh, alacritty, neowim, rofi and zathura.
                </p>
                <p>
                    The files can be found <a href="https://github.com/danj98/dotfiles">here</a>.
                </p>
            </>
        )
    },
    project5: {
        title: "School projects",
        description: (
            <>
                <p>
                    This is a collection of some of the projects I have been part of during my studies. Not all of them have code available.
                </p>
                <p>DAT250 - poll app:</p>
                <p>This is a group project for the course DAT250 - Advanced Software Technologies. The goal of the project was to create a web application with a backend and a frontend. The backend was implemented using C# and ASP.NET Core and the frontend was implemented using React.</p>
                <p>DAT251 - rideshare app:</p>
                <p>This is a group project for the course DAT251 - Modern Software Development Methods. In this course we created a phone application for people to share rides with each other. The course itself was about agile software development where we used methodologies from Scrum and XP to develop the application. The application was developed using React Native for the phone client and Spring Boot for the backend.</p>
                <p>Other cool/fun/traumatic courses</p>
                <ul>
                    <li>INF273 - Metaheuristics</li>
                    <li>INF240A - Basic Tools for Coding theory and Cryptography</li>
                    <li>INF226 - Software Security</li>
                    <li>INF140 - Introduction to Cybersecurity</li>
                    <li>INF143A - Applied Cryptography</li>
                    <li>INF264 - Introduction to Machine Learning</li>
                    <li>INF234 - Algorithms</li>
                </ul>
                
            </>
        )
    }
}

const ProjectModal = (props: ProjectModalProps) => {
    const project = projectData[props.projectId];

    if (!project) {
        return null;
    }

    return (
        <div className="project-modal">
            <div className="project-modal-titlebar">
                <p>{project.title}</p>
                <button onClick={props.onClose}>X</button>
            </div>
            <div className="project-modal-header">
                <h2>{project.title}</h2>
            </div>
            <div className="project-modal-body">
                {project.image && <img src={project.image} alt={project.title} />}
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectModal;