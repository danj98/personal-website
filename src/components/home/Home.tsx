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
                    You can read more about me <a href="/about">here</a>!
                  </p>
                  <span>Some quick facts:<br /></span>
                  <ul style={{marginBlockStart: "5px"}}>
                    <li>I am 25 years old.</li>
                    <li>I currently live in Bergen, Norway.</li>
                    <li>I am studing a master's degree in software engineering at the University of Bergen.</li>
                    <li>I have a bachelor's in cybersecurity from UiB.</li>
                    <li>I am a volunteer at <a href="https://fribyte.no" target="_blank">friByte</a>.</li>
                  </ul>
                </div>
                <div className="marquee" style={{ marginTop: "10px", overflow: "hidden", maxWidth: "675px" }}>
                  <p>
                    i have absolutely no idea what i am doing.
                     is frontend development just glueing stuff together until it looks presentable? thats at least what i have been doing so far.
                  </p>
                </div>
                <div className="box" id="blog">
                  <img style={{verticalAlign: "sub", marginRight: "5px"}} src={moon} className="moon-icon" />
                  <h2 style={{ display: "inline" }}>Blog</h2>
                  <br />
                  <p>
                    I have a blog where I write about various topics. You can find it <a href="https://blog.heimvik.me" target="_blank">here</a>.
                  </p>
                </div>
                <div className="box" id="projects">
                  <img style={{verticalAlign: "sub", marginRight: "5px"}} src={moon} className="moon-icon" />
                  <h2 style={{ display: "inline" }}>Projects</h2>
                  <br />
                  <br />
                  <p>
                    Here are some of the projects I have been working on recently.
                    You can find more of my projects on the <a href="/projects">projects page</a>.
                  </p>
                  <a target="_blank" rel="noreferrer" href="https://github.com/danj98/placeholder">
                    <h3>☾ Placeholder 1</h3>
                  </a>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas minus ut eligendi consectetur odio.
                  <a target="_blank" rel="noreferrer" href="https://github.com/danj98/placeholder">
                    <h3>☾ Placeholder 2</h3>
                  </a>
                  <br />
                  Esse numquam repudiandae a non corporis dolor laboriosam totam. Accusamus, illum modi, quis fugit dolor repellat porro ex a, sit distinctio corrupti.
                  <a target="_blank" rel="noreferrer" href="https://github.com/danj98/placeholder">
                    <h3>☾ Placeholder 3</h3>
                  </a>
                  <br />
                  Lorem ipsum dolor sit amet, c ...
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
                  <a className="navlink" href="https://github.com/danj98" target="_blank">✧ Github</a>
                  <br />
                  <a className="navlink" href="https://www.linkedin.com/in/dan-joar-heimvik-9b637a202/" target="_blank">✧ LinkedIn</a>
                  <br />
                  <a className="navlink" href="mailto:danjoar@heimvik.me" target="_blank">✧ Email</a>
                </div>
                <div className="box">
                  <h2 style={{ display: "inline" }}>Links</h2>
                  <br />
                  <a href="https://archlinux.org" target="_blank">✧ Arch Linux</a>
                  <br />
                  <a href="https://www.reddit.com/r/unixporn/" target="_blank">✧ r/unixporn</a>
                  <br />
                  <a href="https://www.reddit.com/r/vim/" target="_blank">✧ r/vim</a>
                  <br />
                  <a href="https://www.reddit.com/r/linux/" target="_blank">✧ r/linux</a>
                </div>
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