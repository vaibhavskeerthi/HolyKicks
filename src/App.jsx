import React, { useState } from 'react';
import HolyKicks from './components/HolyKicks';
import HolyKicksClone from './components/HolyKicksClone'; // Import the clone component
import ViewportZoom from './components/ViewportZoom';
function App() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);

  const handleClick = () => {
    setShowFirstComponent(!showFirstComponent);
  };

  return (
    <>
    <div className="App" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {showFirstComponent ? <HolyKicks /> : <HolyKicksClone />}
      </div>
     <ViewportZoom />
      </>
  );
}

export default App;