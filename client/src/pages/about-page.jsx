import React, { useEffect, useState } from 'react';
import './AboutProjectDescription.css';

const projectData = {
  title: "",
  description: 
  features: [
    "AI-driven product recommendations",
    "Real-time dynamic pricing",
    "User behavior analytics dashboard",
    "Seamless multi-platform integration"
  ],
  team: [
    { name: "Harish", role: "Team Leader", imageUrl: "/images/alice.jpg" },
    { name: "Gokulan", role: "Team Member", imageUrl: "/images/bob.jpg" },
    { name: "Anstron Graif", role: "Team Member", imageUrl: "/images/carol.jpg" }
  ]
};

const AboutProjectDescription = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    
    setProject(projectData);
  }, []);

  if (!project) return <div>Loading project details...</div>;

  return (
    <div className="project-container">
      <h1>{project.title}</h1>
      <p className="project-description">{project.description}</p>

      <section className="project-features">
        <h2>Key Features</h2>
        <ul>
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="project-team">
        <h2>Project Team</h2>
        <div className="team-members">
          {project.team.map((member, idx) => (
            <div key={idx} className="team-member">
              <img src={member.imageUrl} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutProjectDescription;
