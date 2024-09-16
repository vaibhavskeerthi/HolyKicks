import React, { useEffect, useState } from 'react';
import './HolyKicks.css'; // Import the CSS file

const HolyKicks = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // Trigger the curtain opening animation
    const timer = setTimeout(() => setIsOpened(true), 100); // Add a slight delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container ${isOpened ? 'curtain-open' : ''}`}>
      <div className="curtain">
        <div className="curtain-left"></div>
        <div className="curtain-right"></div>
      </div>
      <div className="content">
        <div className="headerText">
          <h1 className="mainTitle">
            <span className="word">HOLY KICKS</span>
          </h1>
          <p className="subTitle">
            <span className="word">Entity+ Creative</span>
          </p>
          <p className="subTitle">BRANDING</p>
        </div>
        <div className="yearSection">
          <h1 className="year">2019</h1>
          <p className="backText">BACK</p>
        </div>
      </div>
    </div>
  );
};

export default HolyKicks;
