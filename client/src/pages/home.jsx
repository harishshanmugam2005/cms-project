import React from 'react';

const HomePage = () => {
  const handleGetStarted = () => {
    alert('Let\'s get started!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Website!</h1>
      <p style={styles.message}>We are excited to have you here. Click below to get started.</p>
      <button style={styles.button} onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default HomePage;