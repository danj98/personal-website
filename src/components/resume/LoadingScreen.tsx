import React, { useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoaded }: { onLoaded: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoaded();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <div className="loading-screen">
            <div className="loading-border">
                <h2 className="loading-text">RetroOS</h2>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;