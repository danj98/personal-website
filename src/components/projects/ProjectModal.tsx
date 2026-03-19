import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./ProjectModal.css";
import { useMarkdown } from "../../hooks/useMarkdown";

interface ProjectModalProps {
    projectId: string;
    onClose: () => void;
}

// Titles stay here — they're used by the modal header and by Projects.tsx for icons/taskbar.
const PROJECT_TITLES: Record<string, string> = {
    project1: "Master Thesis",
    project2: "Website",
    project3: "Arduino tracker",
    project4: "Dotfiles",
    project5: "School Projects",
};

const ProjectModal = ({ projectId, onClose }: ProjectModalProps) => {
    const title = PROJECT_TITLES[projectId];
    const { raw, status } = useMarkdown(`/content/projects/${projectId}.md`);

    if (!title) return null;

    return (
        <div className="project-modal">
            <div className="project-modal-titlebar">
                <p>{title}</p>
                <button onClick={onClose}>X</button>
            </div>
            <div className="project-modal-header">
                <h2>{title}</h2>
            </div>
            <div className="project-modal-body">
                {status === "loading" && <p>Loading...</p>}
                {status === "error" && <p>Failed to load project content.</p>}
                {status === "success" && raw && (
                    <div className="project-modal-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{raw}</ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
