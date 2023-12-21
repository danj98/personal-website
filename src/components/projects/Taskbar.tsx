import React, { useState, useEffect } from "react";
import "./Taskbar.css";
import start from "../../assets/windows98-icons/png/windows-0.png";
import { OpenProject } from "./Projects";

interface TaskBarProps {
    startMenuOpen: boolean;
    onToggleStartMenu: () => void;
    openProjects: OpenProject[];
}

const Taskbar = (props: TaskBarProps) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });

    return (
        <div className="taskbar">
            <button className="s-button" onClick={props.onToggleStartMenu}>
                <img src={start} alt="start" />
                Start
            </button>
            <div className="taskbar-windows">
                {props.openProjects.map((project) => (
                    <div key={project.id} className="taskbar-window">
                        {project.title}
                    </div>
                ))}
            </div>
            <div className="taskbar-clock">
                {currentTime.toLocaleTimeString()}
            </div>
        </div>
    )
}

export default Taskbar;