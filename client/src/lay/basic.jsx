import React from 'react';

// Inline CSS with Desktop and Mobile Responsiveness
const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '30px 50px',
    textAlign: 'left',
    position: 'relative',
  },
  logo: {
    fontSize: '2.5em',
    fontWeight: 'bold',
  },
  nav: {
    marginTop: '15px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  navItem: {
    margin: '0 30px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1em',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    textDecoration: 'underline',
    color: '#ff5c5c',  // Highlight color on hover
  },
  main: {
    flexGrow: 1,
    padding: '60px 100px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  section: {
    margin: '40px 0',
  },
  heading1: {
    fontSize: '3em',
    marginBottom: '20px',
  },
  heading2: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 50px',
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#ff5c5c',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    fontSize: '1.2em',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  getStartedButtonHover: {
    backgroundColor: '#e04f4f',
  },

  // Media Queries for Responsiveness (Mobile and Tablet)
  '@media (max-width: 1024px)': {
    header: {
      textAlign: 'center',
      padding: '20px 20px',
    },
    logo: {
      fontSize: '2em',
    },
    navList: {
      justifyContent: 'center',
    },
    navItem: {
      margin: '0 15px',
    },
    navLink: {
      fontSize: '1em',
    },
    main: {
      padding: '40px 20px',
    },
    section: {
      margin: '20px 0',
    },
    heading1: {
      fontSize: '2.5em',
    },
    heading2: {
      fontSize: '1.5em',
    },
  },
};

const BasicLayout = () => {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>E-Commerce Product Catalog Management</div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="#home" style={styles.navLink}>Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="#signin" style={styles.navLink}>Sign In</a>
            </li>
            <li style={styles.navItem}>
              <a href="#signup" style={styles.navLink}>Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>

      <main style={styles.main}>
        <section id="home" style={styles.section}>
          <h1 style={styles.heading1}>Welcome to E-Commerce Product Catalog</h1>
          <button
            style={styles.getStartedButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.getStartedButtonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.getStartedButton.backgroundColor}
          >
            Get Started
          </button>
        </section>



      
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Project Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BasicLayout;