import React, { useState, useEffect } from "react";

function TooltipSticky({ text, isActive }) {
    // Tooltip position
    const [position, setPosition] = useState([0, 0]);

    const getMousePosition = (e) => {
        setPosition([e.clientX + 20, e.clientY + 20]);
    };

    // Get mouse position
    useEffect(() => {
        if (isActive) {
            document.addEventListener("mousemove", getMousePosition);
        }

        return () => {
            document.removeEventListener("mousemove", getMousePosition);
        };
    }, [isActive]);

    return (
        <>
            {true && (
                <div
                    className="tooltip-sticky"
                    style={{ left: position[0], top: position[1] }}
                >
                    {text}
                </div>
            )}
        </>
    );
}

export default TooltipSticky;
