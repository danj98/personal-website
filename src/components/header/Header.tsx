import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <nav className="navlink">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/resume">CV</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </nav>
        </div>    
    )
}

export default Header;