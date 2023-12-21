import React from "react";
import folder from "../../assets/windows98-icons/png/directory_closed-0.png";
import "./Icon.css";

interface IconProps {
    title: string;
    onClick: () => void;
    style: React.CSSProperties;
}

const Icon = (props: IconProps) => {
    return (
        <div className="icon" onClick={props.onClick} style={props.style}>
            <img src={folder} alt="folder" />
            <div className="icon-title">{props.title}</div>
        </div>
    )
}

export default Icon;