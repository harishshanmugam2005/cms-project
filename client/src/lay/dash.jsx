import React from 'react';

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  logo: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  link: {
    padding: '15px 20px',
    textDecoration: 'none',
    color: '#ecf0f1',
    fontSize: '1.1rem',
    transition: 'background 0.3s',
    cursor: 'pointer',
  },
  linkHover: {
    backgroundColor: '#34495e',
  }
};

const SidebarDashboard = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>Dashboard</div>
      <div style={styles.link}>Home</div>
      <div style={styles.link}>Users</div>
      <div style={styles.link}>Analytics</div>
      <div style={styles.link}>Settings</div>
      <div style={styles.link}>Logout</div>
    </div>
  );
};

export default SidebarDashboard;