import React from "react";
import "./About.css";
import logo from "../../assets/aboutme.png";
import separator from "../../assets/gifs/swordy_md_clr.gif"
import torch from "../../assets/gifs/torch3.gif"
import crystal from "../../assets/gifs/mysticalcrystal.gif"
import ad from "../../assets/gifs/space-network-1998.gif"

function About() {
  return (
    <body className="about">
      <div>
        <img src={logo} className="aboutme-logo" />
        <div className="aboutme-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
        </div>
        <img src={separator} className="aboutme-separator" />
        <br />
        <br />
        <div className="aboutme-section">
          <img style={{verticalAlign: "sub", marginRight: "5px"}} src={torch} className="torch-left" />
          <h1>Who am I?</h1>
          <p>
            I am a 25 year old software developer from Norway. I am currently studying a master's degree in software engineering at the University of Bergen.
            I have a bachelor's degree in cybersecurity from the same university.
          </p>
        </div>
        <div className="aboutme-section">
          <img style={{verticalAlign: "sub", marginRight: "5px"}} src={torch} className="torch-icon" />
          <h1>What do I do?</h1>
          <p>
            I am currently working as a software developer at <a href="https://www.sikt.no/" target="_blank">Sikt</a>.
            I am also a volunteer at <a href="https://fribyte.no" target="_blank">friByte</a>, a student organization at UiB.
          </p>
        </div>
        <div className="sourcerer">
          <img src={crystal} className="crystal" />
          <h1>Sourcerer</h1>
          <p>
            I am a sourcerer. I enjoy creating things, and I am always looking for new things to learn.
            I have experience with a wide range of technologies, and I am always looking to expand my knowledge.
          </p>
        </div>
      </div>
      <footer>
        <img src={ad} className="ad" />
        <br />
        <br />
        <p>
          <a href="">hoho</a>
        </p>
      </footer>
    </body>
  )
}

export default About;