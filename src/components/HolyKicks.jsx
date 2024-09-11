import React from 'react';
import './HolyKicks.css'; // Import the CSS file

const HolyKicks = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerText}>
        <h1 style={styles.mainTitle}>
          <span className="word slide-up">HOLY KICKS</span>
        </h1>
        <p style={styles.subTitle}>
          <span className="word slide-up">Entity+ Creative</span>
        </p>
        <p className="slide-up" style={styles.subTitle}>BRANDING</p>
      </div>
      <div style={styles.yearSection}>
        <h1 className="slide-up late-animation" style={styles.year}>2019</h1>
        <p className="slide-up late-animation" style={styles.backText}>BACK</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '600px',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
  },
  headerText: {
    textAlign: 'left',
  },
  mainTitle: {
    fontSize: '4rem',
    margin: '0',
    fontWeight: 'bold',
    letterSpacing: '0.2rem',
  },
  subTitle: {
    fontSize: '1rem',
    margin: '0.2rem 0',
  },
  yearSection: {
    textAlign: 'left',
  },
  year: {
    fontSize: '10rem',
    margin: '0',
    fontWeight: 'bold',
  },
  backText: {
    fontSize: '2rem',
    margin: '0',
  },
};

export default HolyKicks;
