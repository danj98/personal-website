import React, { useState, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Resume.css";
import LoadingScreen from "./LoadingScreen";
import Persona from "./Persona";

interface Command {
  command: string;
  result: string[];
}

const commands: Command[] = [
  {
    command: "cd Documents/",
    result: [""],
  },
  {
    command: "ls -l",
    result: [
      "total 1",
      ".rw-r--r--  949 djh 19 Dec 22:41 resume.txt"
    ],
  },
  {
    command: "head -n 2 resume.txt",
    result: [
      "Dan Joar Heimvik",
      "Software Developer",
    ],
  },
  {
    command: "tail -n 2 resume.txt",
    result: [
      "Email: danjoar@heimvik.me",
    ],
  },
  {
    command: "cat resume.txt | grep 'Education' -A 7",
    result: [
      "--== Education ==--",
      "Master's degree in computer science, Software Engineering",
      "University of Bergen / Western Norway University of Applied Sciences",
      "2022 - 2024",
      "...",
      "Bachelor's degree in computer science, Cybersecurity",
      "University of Bergen",
      "2019 - 2022"
    ]
  },
  {
    command: "cat resume.txt | grep 'Work experience' -A 4",
    result: [
      "--== Work experience ==--",
      "Software developer (summer intern/part-time) - Sikt",
      "Jun 2023 - Dec 2023",
      "Process operator (summer intern/on-call employee) - Hydro Husnes",
      "Apr 2017 - Aug 2023",
    ]
  },
  {
    command: "cat resume.txt | grep 'Skills' -A 14",
    result: [
      "--== Skills ==--",
      "-- Programming languages --",
      "- Most experience:",
      "Java, Kotlin, Python, C++, TypeScript, Bash, SQL, HTML, CSS",
      "- Some experience:",
      "C, C++, PHP, Assembly, Haskell, Rust",
      "...",
      "-- Frameworks --",
      "Most experience:",
      "Spring Boot, Vue, .NET, React",
      "Some experience:",
      "Flask, Django, AngularJS, React Native",
      "...",
      "-- Other --",
      "GNU/Linux, *nix, Git, Docker, CI/CD, Scrum, Azure, and a lot of other stuff"
    ]
  },
  {
    command: "cat resume.txt | grep 'Interests' -A 1",
    result: [
      "--== Interests ==--",
      "Programming, electronics, gaming, music production, reading, hiking, skiing",
    ]
  },
  {
    command: "cat resume.txt | grep 'Languages' -A 3",
    result: [
      "--== Languages ==--",
      "Norwegian: Native",
      "English: Fluent",
    ]
  },
];

const Resume = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const endRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    if (endRef.current) {
      // @ts-ignore
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [output]);

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      setIsTyping(true);

      const typingDuration = (commands[currentCommandIndex].command.length * 50) + 2000;
      setTimeout(() => {
        setIsTyping(false);
        const nextCommand = commands[currentCommandIndex];
        const resultElements = nextCommand.result.map((line, index) => (
          <p key={index}>{line}</p>
        ));
        setOutput((prevOutput) => [
          ...prevOutput,
          <p key={"command-" + currentCommandIndex}>{"> " + nextCommand.command}</p>,
          ...resultElements
        ]);
        setCurrentCommandIndex(currentCommandIndex + 1);
      }, typingDuration);
    }
  }, [currentCommandIndex]);

  return (
    <div>
      {isLoading && <LoadingScreen onLoaded={handleLoaded} />}
      {!isLoading && (
        <div className="resume">
          <div className="outer">
            <div className="left-menu">
              <div className="navigation">
                <a href="/" className="nav-button">Home</a>
                <a href="/about" className="nav-button">About</a>
                <a href="/cv" className="nav-button">CV</a>
                <a href="/projects" className="nav-button">Projects</a>
              </div>
            </div>

            <div className="terminal-container">
              <div className="terminal">
                {output}
                {isTyping && (
                  <ReactTypingEffect 
                    text={"> " + commands[currentCommandIndex].command} 
                    speed={50} 
                    eraseSpeed={50} 
                    eraseDelay={2000} 
                    typingDelay={2000}
                  />
                )}
              </div>
            </div>
            <div className="persona">
                <Persona />
            </div>
          </div>
        </div>
      )}
      <div className="scanlines"></div>
    </div>
  );
};


export default Resume;