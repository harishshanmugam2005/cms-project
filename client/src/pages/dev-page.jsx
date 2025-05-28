import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'Harish',
    role: 'Team Lead',
  },
  {
    name: 'Gokulan',
    role: 'Team Member',
  },
  {
    name: 'Anstron Graif',
    role: 'Team Member',
  },
];

const TeamDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Project Team</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <Card key={idx} className="text-center p-4 shadow-lg">
            <CardContent>
              <Avatar className="mx-auto mb-4 h-20 w-20">
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;