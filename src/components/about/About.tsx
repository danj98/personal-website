import React from "react";
import "./About.css";
import logo from "../../assets/aboutme.png";
import separator from "../../assets/gifs/swordy_md_clr.gif"
import torch from "../../assets/gifs/r_sword.gif"
import crystal from "../../assets/gifs/mysticalcrystal.gif"
import ad from "../../assets/gifs/space-network-1998.gif"
import wiz from "../../assets/gifs/dawizard.gif"

function About() {
    return (
        <main className="about">
            <table className="layout-table">
                <tr>
                    <td className="side-column">
                        <div className="image-container">
                            <img key={Date.now()} src={wiz} className="wiz" alt="wizard" />
                        </div>
                    </td>
                    <td className="middle-column">
                        <div className="header">
                            <img src={logo} className="aboutme-logo" alt="title" />
                            <div className="aboutme-links">
                                <a href="/">Home</a>
                                <a href="/about">About</a>
                                <a href="/resume">CV</a>
                                <a href="/projects">Projects</a>
                            </div>
                            <img src={separator} className="aboutme-separator" alt="separator" />
                        </div>
                    
                        <div className="section">
                            <div className="header-with-torches">
                                <img src={torch} className="torch-l" alt="torch" />
                                <h1>Who am I?</h1>
                                <img src={torch} className="torch-r" alt="torch" />
                            </div>
                            <p>
                                I am a 25 year old software developer from Norway. I am currently studying a master's degree in software engineering at the University of Bergen.
                                I have a bachelor's degree in cybersecurity from the same university. 
                                I am currently working as a software developer at <a href="https://www.sikt.no/" target="_blank">Sikt</a>.
                                I am also a volunteer at <a href="https://fribyte.no" target="_blank">friByte</a>, a student organization at UiB.
                                If you are interested in more details about my education and work experience, you can check out my <a href="/resume">CV</a>.
                                My contact info is also available there.
                            </p>
                        </div>

                        <div className="section">
                            <div className="header-with-torches">
                                <img src={torch} className="torch-l" alt="torch" />
                                <h1>What is this website?</h1>
                                <img src={torch} className="torch-r" alt="torch" />
                            </div>
                            <p>
                                What is this website? Why is every page a different style? Did I put those gifs there to induce a stroke?
                                All good questions. I made this website to 1. have a place to put my CV and projects,
                                and 2. to have a place to experiment and practice my web development skills.
                            </p>
                            <p>
                                I wanted to make each page different in order to show homage to some of the things I like.
                                All the pages are modelled after different styles of websites from the 90s and early 2000s.
                                Therefore, an obnoxious amount of gifs felt natural. The page is made using React,
                                and the source code is available on <a href="https://github.com/danj98/placeholder" target="_blank">GitHub</a>.
                                If you are interested in more details about the development, please do not ask me
                                because I have no clue what I am doing.
                            </p>
                        </div>

                        <div className="section">
                            <div className="header-with-torches">
                                <img src={torch} className="torch-l" alt="torch" />
                                <h1>Interests</h1>
                                <img src={torch} className="torch-r" alt="torch" />
                            </div>
                            <p>
                                Most of my time is probably spent on my computer. Either playing video games, programming, or watching/reading stuff.
                                I also like working with electronics and microcontrollers, and desinging and printing parts for it with my 3d-printer.
                                I am also practicing a little bit of music production, but I am pretty shit at it.
                            </p>
                            <p>
                                On the occasions that I get away from my computer, I like hiking, skiing, and generally being outdoors.
                                I also go to the gym regularly. Just so that I don't die.
                            </p>
                            <p>
                                I also like reading. Some of my favorite books include fantasy series like the Stormlight Archives,
                                or stoic philosophy like Marcus Aurelius and Seneca.

                            </p>
                        </div>
                        <div className="section">
                            <div className="header-with-torches">
                                <img src={torch} className="torch-l" alt="torch" />
                                <h1>What's next?</h1>
                                <img src={torch} className="torch-r" alt="torch" />
                            </div>
                            <p>
                                The future is uncertain. I have no idea what I will be doing in 5 years. I have no idea what I will be doing in 5 months.
                                I have no idea what I will be doing in 5 days. The only thing I know is that I will be doing something. And that something will be cool.
                                I am currently working on my master's thesis in software engineering. This will hopefully be done by june 2024.
                                After that, I will probably be looking for a job if I don't have one already. If you have any cool offers 
                                working in industrial automation, embedded systems, or IoT, please let me know!
                            </p>
                        </div>
                        <div className="section">
                            <div className="header-with-torches">
                                <img src={torch} className="torch-l" alt="torch" />
                                <h1>Volunteering</h1>
                                <img src={torch} className="torch-r" alt="torch" />
                            </div>
                            <p>
                                As mentioned, I am a volunteer at <a href="https://fribyte.no" target="_blank">friByte</a>, a student organization at UiB.
                                We are a group of students who work on various projects, mostly related to software development and system administration
                                for other students and student organizations. We also host events and workshops for students. If you are a student in Bergen
                                with an interest in IT, you should check us out!
                            </p>
                        </div>
                    </td>
                    <td className="side-column">
                        <div className="image-container">
                            <img key={Date.now()} src={crystal} className="crystal" alt="crystal" />
                        </div>
                    </td>
                </tr>
            </table>
            <footer className="aboutme-footer">
                <img src={ad} className="ad" alt="ad" style={{marginTop: '80px'}} />
                <br />
                <br />
                <span>© 2023 Dan Joar Heimvik. All rights reserved</span>
                <br />
                <br />
                <a href="mailto:danjoar@heimvik.me">danjoar@heimvik.me</a>
            </footer>
        </main>
    )
}

export default About;