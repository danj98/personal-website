import React from "react";
import "./Persona.css";
import profile from "../../assets/profile.png";
import wallace from "../../assets/wallace.png";
import eagle from "../../assets/eagle.png";

const Persona = () => {
    return (
        <div className="persona">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div className="title-bar">
                <span>警察LAPD</span>
                <div className="signal">
                    <span style={{marginRight: '40px', fontWeight: 'lighter'}}>SIGNAL LOW</span>
                    <span className="battery-icon"><i className="fas fa-battery-full"></i></span>
                </div>
            </div>

            <div className="profile-info">
                <div className="profile-info-left">
                    <span id="title">Developer</span>
                    <span id="myname">DAN JOAR HEIMVIK</span>
                </div>
                <div className="profile-info-right">
                    <span id="access">ACCESS</span>
                    <span id="asterisk">********</span>
                </div>
            </div>

            <div className="profile-section">
                <div className="profile-pic">
                    <img src={profile} alt="profile" />
                </div>
                <div className="facts-stats">
                    <div className="facts">
                        <span style={{marginBottom: '10px'}}>NEXUS 9 SRS</span>
                        <span className="fact">SEC CODE</span>
                        <span className="fact">25798-K-2974</span>
                    </div>
                    <div className="facts2">
                        <span style={{fontSize: '20px'}}>ブレードランナー</span>
                        <span >BLADE RUNNER</span>
                        <img src={wallace} alt="wallace" style={{marginTop: '20px'}} />
                    </div>
                </div>
            </div>
            <div className="bio-section">
                <span className="bio">
                    AUTHORIZATION GRANTED TO THE ABOVE USER TO DEBUG, REFACTOR, AND/OR DECOMPILE ANY
                    CODEBASE OR ENTITY SUSPECTED OF VIOLATING THE SACRED PRINCIPLES OF CLEAN CODE OR
                    OTHERWISE EXCEEDING THE THRESHOLD OF ACCEPTABLE FOR-LOOPS THIS PERMISSION INCLUDES 
                    THE USE OF RUTHLESS CODE REVIEWS, THE EMPLOYMENT OF EXTREME PROGRAMMING TECHNIQUES,
                    AND THE UNLIMITED CONSUMPTION OF CAFFEINATED BEVERAGES IN THE PURSUIT OF MAINTAINING
                    SOFTWARE SANITY.
                </span>
            </div>
            <div className="property-section">
                <img src={eagle} alt="eagle" />
                <div className="property-text">
                    <span> PROPERTY OF LOS ANGELES</span>
                    <span>POLICE DEPT/DETECTION UNIT</span>
                </div>
                <img src={eagle} alt="eagle"/>
            </div>
        </div>
    )
}

export default Persona;