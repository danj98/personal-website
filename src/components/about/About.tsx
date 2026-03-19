import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./About.css";
import logo from "../../assets/aboutme.png";
import separator from "../../assets/gifs/swordy_md_clr.gif";
import torch from "../../assets/gifs/r_sword.gif";
import crystal from "../../assets/gifs/mysticalcrystal.gif";
import ad from "../../assets/gifs/space-network-1998.gif";
import wiz from "../../assets/gifs/dawizard.gif";
import { useMarkdown } from "../../hooks/useMarkdown";
import { parseAboutMarkdown } from "../../utils/parseAboutMarkdown";

function About() {
    const { raw, status } = useMarkdown("/content/about.md");
    const sections = raw ? parseAboutMarkdown(raw) : [];

    return (
        <main className="about">
            <table className="layout-table">
                <tbody><tr>
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

                        {status === "loading" && <p style={{ color: "#993399" }}>Loading...</p>}
                        {status === "error" && <p style={{ color: "#993399" }}>Failed to load content.</p>}

                        {sections.map((section) => (
                            <div className="section" key={section.title}>
                                <div className="header-with-torches">
                                    <img src={torch} className="torch-l" alt="torch" />
                                    <h1>{section.title}</h1>
                                    <img src={torch} className="torch-r" alt="torch" />
                                </div>
                                <div className="section-body">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {section.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}
                    </td>
                    <td className="side-column">
                        <div className="image-container">
                            <img key={Date.now()} src={crystal} className="crystal" alt="crystal" />
                        </div>
                    </td>
                </tr></tbody>
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
    );
}

export default About;
