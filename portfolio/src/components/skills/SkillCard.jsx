
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const SkillCard = ({ title, skills }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
