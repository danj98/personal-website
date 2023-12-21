import React, { useState } from 'react';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import ProjectModal from './ProjectModal';
import Icon from './Icon';
import './Projects.css';
import { title } from 'process';


const icons = [
  {
    title: "Master Thesis",
    id: "project1",
  },
  {
    title: "Website",
    id: "project2",
  },
  {
    title: "Arduino tracker",
    id: "project3",
  },
  {
    title: "dotfiles",
    id: "project4",
  },
  {
    title: "school projects",
    id: "project5",
  }
];

export interface OpenProject {
  id: string;
  title: string;
}

function Projects() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState<OpenProject[]>([]);

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };


  const openProject = (project: OpenProject) => {
    if (!openProjects.find(p => p.id === project.id)) {
      setOpenProjects([...openProjects, project]);
    }
  };

  const closeProject = (projectId: string) => {
    setOpenProjects(openProjects.filter(p => p.id !== projectId));
  };

  return (
    <div className="desktop">
        <div className="icon-row">
          {icons.map((icon, index) => (
            <Icon
              key={icon.id}
              title={icon.title}
              style={{ top: 100 * (index), left: 20 }}
              onClick={() => openProject(icon)}
            />
          ))}
        </div>
      <Taskbar 
        startMenuOpen={startMenuOpen} 
        onToggleStartMenu={toggleStartMenu}
        openProjects={openProjects}
      />

      {startMenuOpen && <StartMenu />}

      {openProjects.map(projectId => (
        <ProjectModal
          key={projectId.id}
          projectId={projectId.id}
          onClose={() => closeProject(projectId.id)}
        />
      ))}
    </div>
  );
}

export default Projects;
