
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and what drives me as a developer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a passionate full-stack developer with 3+ years of experience building 
                web applications. I love solving complex problems and creating intuitive 
                user experiences that make a difference.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>What I Do</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I specialize in React, Node.js, and JavaScript. From concept to deployment, 
                I handle the full development lifecycle, ensuring scalable and maintainable solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>My Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I believe in writing clean, well-documented code and following best practices. 
                I'm always learning new technologies and staying up-to-date with industry trends.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Beyond Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                When I'm not coding, I enjoy contributing to open source projects, 
                writing technical articles, and mentoring aspiring developers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
