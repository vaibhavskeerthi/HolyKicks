import React, { useState, useEffect } from "react";
import '../../src/App.css'


const ViewportZoom = () => {
  const [activeDiv, setActiveDiv] = useState(null); // Initially no zoom

  useEffect(() => {
    let zoomingIn = true; // Track zoom-in or zoom-out state
    let currentDiv = 0;   // Track the current div

    const zoomSequence = setInterval(() => {
      if (zoomingIn) {
        setActiveDiv(currentDiv); // Zoom into current div
        zoomingIn = false;        // After zooming in, prepare to zoom out
      } else {
        setActiveDiv(null);       // Zoom out (null means no div is zoomed in)
        zoomingIn = true;         // Prepare to zoom into next div
        currentDiv = (currentDiv + 1) % 4; // Move to the next div (cycle back after 4)
      }
    }, 3000); // 3 seconds for each zoom in/out cycle

    return () => clearInterval(zoomSequence); // Cleanup on component unmount
  }, []);

  return (
    <div className="viewport-container">
      <div className={`viewport ${activeDiv === null ? "zoom-out" : `zoom-in-${activeDiv}`}`}>
        <div className="zoomable">Div 1</div>
        <div className="zoomable">Div 2</div>
        <div className="zoomable">Div 3</div>
        <div className="zoomable">Div 4</div>
      </div>
    </div>
  );
};

export default ViewportZoom;
