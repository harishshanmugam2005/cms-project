import React from 'react';

const developers = [
  {
    name: 'Harish',
    role: 'Team Lead',
  },
  {
    name: 'Anstron Graif',
    role: 'Team Member',
  },
  {
    name: 'Gokulan',
    role: 'Team Member',
  },
];

const DevPage = () => {
  return (
    <div>
      <h1>Developer Team</h1>
      <ul>
        {developers.map((dev, index) => (
          <li key={index}>
            <strong>{dev.name}</strong> - {dev.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevPage;