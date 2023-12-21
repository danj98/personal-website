import React from "react";
import "./Home.css";
import moon from "../../assets/moon.png"
import linux from "../../assets/gifs/nclinux.gif"
import cyber from "../../assets/gifs/cyberrealmrefer.gif"

function Home() {
  return (
    <body className="main">
      <div id="container">
        <div id="logo">
          <h1>HEIMVIK.ME</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <td id="main-td">
                <div className="box" id="mainbox">
                  <img style={{verticalAlign: "sub", marginRight: "5px"}} src={moon} className="moon-icon" />
                  <h2 style={{ display: "inline" }}>Welcome to HEIMVIK.ME!</h2>
                  <br />
                  <p>This is the personal website of me: Dan Joar Heimvik. It serves as a place for me to introduce myself and post my projects.</p>
                  <p>
                    I am a software developer currently studying a master's degree in software engineering at UiB in Bergen, Norway.
                    You can read more about me or this website <a href="/about">here</a>!
                  </p>
                  <span>Some quick facts:<br /></span>
                  <ul style={{marginBlockStart: "5px"}}>
                    <li>I am 25 years old.</li>
                    <li>I currently live in Bergen, Norway.</li>
                    <li>I am studing a master's degree in software engineering at the University of Bergen.</li>
                    <li>I have a bachelor's in cybersecurity from UiB.</li>
                    <li>I am a volunteer at <a href="https://fribyte.no" target="_blank" rel="noreferrer">friByte</a>.</li>
                  </ul>
                </div>
                <div className="marquee" style={{ marginTop: "10px", overflow: "hidden", maxWidth: "675px" }}>
                  <p>
                    Every good website needs a marquee. I had to make my own. You are welcome to read it all. Or you can just ignore it.
                    The rest is just placeholder text. I might put something interesting here later. Or I might not. Who knows?
                    Here we go: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis perspiciatis esse sequi eaque ea blanditiis doloribus modi ab error incidunt aperiam, debitis porro iusto repudiandae commodi facere fuga voluptates!
                    Are you still reading?
                  </p>
                </div>
                <div className="box" id="blog">
                  <img style={{verticalAlign: "sub", marginRight: "5px"}} src={moon} className="moon-icon" />
                  <h2 style={{ display: "inline" }}>Blog</h2>
                  <br />
                  <p>
                    I DO NOT have a blog where I write about various topics. You can't find it <a href="https://blog.heimvik.me" target="_blank" rel="noreferrer">here</a> (yet).
                  </p>
                </div>
                <div className="box" id="projects">
                  <img style={{verticalAlign: "sub", marginRight: "5px"}} src={moon} className="moon-icon" />
                  <h2 style={{ display: "inline" }}>Projects</h2>
                  <br />
                  <p>
                    Here are some of the projects I have been working on recently.
                    You can find more of my projects on the <a href="/projects">projects page</a>.
                  </p>
                  <a target="_blank" rel="noreferrer" href="https://github.com/danj98/adaptiveMRS">
                    <h3>☾ My master's project</h3>
                  </a>
                  This is what I am currently working on for my master's thesis in software engineering.
                  It has a focus on adaptive planning for multi-agent robotic systems.
                  <br />
                  <a target="_blank" rel="noreferrer" href="https://github.com/danj98/personal-website">
                    <h3>☾ This website</h3>
                  </a>
                  This website is built using React and TypeScript. It serves as a portfolio, practice, and a creative outlet for me.
                  <br />
                  <a target="_blank" rel="noreferrer" href="https://github.com/danj98/ArduinoFaceTracker">
                    <h3>☾ Targeting system</h3>
                  </a>
                  This project is an example of some of my work with electronics and microcontrollers.
                  It combines an Arduino, a camera, and a laser to create a targeting system using computer vision.
                </div>
              </td>
              <td id="menutd" style={{maxWidth: "225px"}}>
                <div className="box" id="menu">
                  <h2 style={{ display: "inline" }}>Menu</h2>
                  <br />
                  <a className="navlink" href="/">✧ Home</a>
                  <br />
                  <a className="navlink" href="/about">✧ About</a>
                  <br />
                  <a className="navlink" href="/resume">✧ CV</a>
                  <br />
                  <a className="navlink" href="/projects">✧ Projects</a>
                  <br />
                  <br />
                  <a className="navlink" href="https://djh.123guestbook.com/">✧ Sign my guestbook!</a>
                  <br />
                  <br />
                  <a className="navlink" href="https://github.com/danj98" target="_blank" rel="noreferrer">✧ Github</a>
                  <br />
                  <a className="navlink" href="https://www.linkedin.com/in/dan-joar-heimvik-9b637a202/" target="_blank" rel="noreferrer">✧ LinkedIn</a>
                  <br />
                  <a className="navlink" href="mailto:danjoar@heimvik.me" target="_blank" rel="noreferrer">✧ Email</a>
                </div>
                <div className="box">
                  <h2 style={{ display: "inline" }}>Links</h2>
                  <br />
                  <a href="https://archlinux.org" target="_blank" rel="noreferrer">✧ Arch Linux</a>
                  <br />
                  <a href="https://www.fribyte.no" target="_blank" rel="noreferrer">✧ friByte</a>
                  <br />
                  <a href="https://www.reddit.com/r/unixporn/" target="_blank" rel="noreferrer">✧ r/unixporn</a>
                  <br />
                  <a href="https://github.com/codecrafters-io/build-your-own-x" target="_blank" rel="noreferrer">✧ Build your own X</a>
                  <br />
                  <a href="https://forum.marianabay.com/" target="_blank" rel="noreferrer">✧ Mariana Bay</a>
                </div>
                <a href="https://forum.marianabay.com"><img alt="Mariana Bay" src="https://forum.marianabay.com/media/mariana-bay-webring-gif.866/full" style={{width: '90%', marginLeft: '10px'}} /></a>
                <div className="box">
                  <a href='https://www.free-website-hit-counter.com'>
                    <img src='https://www.free-website-hit-counter.com/c.php?d=5&id=158977&s=45' alt='Free Website Hit Counter' />
                  </a>
                  <br />
                  <small>
                    <a href='https://www.free-website-hit-counter.com' title="Free Website Hit Counter">Free website hit counter</a>
                  </small>
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <img src={cyber} style={{ maxWidth: "200px" }} />
                </div>
                <div className="box" id="contact">
                  <h2 style={{ display: "inline" }}>Contact</h2>
                  <br />
                  <p>
                    You can contact me through any of the links above, or by using the contact form below!
                  </p>
                  <form action="https://formspree.io/f/mvojnvaa" method="POST">
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="text" id="email" name="email" />
                    <br />
                    <label htmlFor="message">Message:</label>
                    <br />
                    <textarea id="message" name="message" />
                    <br />
                    <input type="submit" value="Submit" />
                  </form>
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <img src={linux} style={{ maxWidth: "200px" }} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <footer id="footer">
          <br />
          <br />
          <span>(c) 2023 Dan Joar Heimvik. All rights reserved</span>
          <br />
          <br />
          <a href="mailto:danjoar@heimvik.me">danjoar@heimvik.me</a>
        </footer>
      </div>
    </body>
  )
}

export default Home;
