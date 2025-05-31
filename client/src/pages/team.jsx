import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Anstron Graif',
      role: 'Team Member',
      emoji: '🧑‍💼',
    },
    {
      name: 'Harish',
      role: 'Team Lead',
      emoji: '🧑‍💼',
    },
    {
      name: 'Gokulan',
      role: 'Team Member',
      emoji: '🧑‍💼', 
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meet Our Team</h1>
      <div style={styles.teamList}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.teamMember}>
            <div style={styles.profileEmoji}>{member.emoji}</div>
            <h3 style={styles.memberName}>{member.name}</h3>
            <p style={styles.memberRole}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'lightblue',
    color: 'black',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '30px',
  },
  teamList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  teamMember: {
    width: '220px',
    marginLeft: '20px',
    marginBottom: '30px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    paddingLeft:'20px',
  },
  profileEmoji: {
    fontSize: '5rem',  // Adjust the size of the emoji
    marginBottom: '15px',
  },
  memberName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  memberRole: {
    fontSize: '1rem',
    color: '#777',
  },
};

export default TeamPage;