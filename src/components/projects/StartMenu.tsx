import React from "react";
import "./StartMenu.css";

const StartMenu = () => {
    return (
        <div className="start-menu">
            <a href="/" className="menu-item">Home</a>
            <a href="/about" className="menu-item">About</a>
            <a href="/resume" className="menu-item">CV</a>
            <a href="/projects" className="menu-item">Projects</a>
        </div>
    )
}

export default StartMenu;