import React, { useState, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Resume.css";
import LoadingScreen from "./LoadingScreen";
import Persona from "./Persona";
import { useMarkdown } from "../../hooks/useMarkdown";
import { parseResumeMarkdown } from "../../utils/parseResumeMarkdown";

interface CommandShell {
  command: string;
  sectionKey: string;
}

// The shell commands (what gets typed out) stay here — they are part of the visual design.
// To update the *output* of each command, edit public/content/resume.md.
const COMMAND_SHELLS: CommandShell[] = [
  { command: "cd Documents/",                              sectionKey: "cd" },
  { command: "ls -l",                                      sectionKey: "ls" },
  { command: "head -n 2 resume.txt",                       sectionKey: "head" },
  { command: "tail -n 2 resume.txt",                       sectionKey: "tail" },
  { command: "cat resume.txt | grep 'Education' -A 7",     sectionKey: "education" },
  { command: "cat resume.txt | grep 'Work experience' -A 4", sectionKey: "work" },
  { command: "cat resume.txt | grep 'Skills' -A 14",       sectionKey: "skills" },
  { command: "cat resume.txt | grep 'Interests' -A 1",     sectionKey: "interests" },
  { command: "cat resume.txt | grep 'Languages' -A 3",     sectionKey: "languages" },
];

const Resume = () => {
  const { raw, status } = useMarkdown("/content/resume.md");
  const sections = raw ? parseResumeMarkdown(raw) : null;

  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => setIsLoading(false);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Gate: don't start until both the loading screen is done and markdown is fetched.
  useEffect(() => {
    if (isLoading || !sections) return;
    if (currentCommandIndex >= COMMAND_SHELLS.length) return;

    setIsTyping(true);
    const shell = COMMAND_SHELLS[currentCommandIndex];
    const typingDuration = shell.command.length * 50 + 2000;

    const timer = setTimeout(() => {
      setIsTyping(false);
      const result = sections[shell.sectionKey] ?? [""];
      const resultElements = result.map((line, index) => (
        <p key={index}>{line}</p>
      ));
      setOutput((prev) => [
        ...prev,
        <p key={"command-" + currentCommandIndex}>{"> " + shell.command}</p>,
        ...resultElements,
      ]);
      setCurrentCommandIndex((i) => i + 1);
    }, typingDuration);

    return () => clearTimeout(timer);
  }, [currentCommandIndex, sections, isLoading]);

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
                <a href="/resume" className="nav-button">CV</a>
                <a href="/projects" className="nav-button">Projects</a>
              </div>
            </div>
            <div className="terminal-container">
              <div className="terminal" ref={terminalRef}>
                {output}
                {isTyping && sections && (
                  <ReactTypingEffect
                    text={"> " + COMMAND_SHELLS[currentCommandIndex].command}
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
