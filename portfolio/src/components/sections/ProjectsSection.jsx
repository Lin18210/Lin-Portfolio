
import React from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';

const projects = [
  {
    title: "Travel-Agency Website",
    description: "A full-featured Travel platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/Lin18210/travel-web",
    liveUrl: "https://frontend-travel-tau.vercel.app/"
  },
  {
    title: "Cafe Menu Order App",
    description: "A collaborative order management application with real-time updates, check-out functionality, and filtering features.",
    technologies: ["React", "TailwindCss"],
    githubUrl: "https://github.com/Lin18210/My-Cafe",
    liveUrl: "https://my-cafe-zeta.vercel.app/"
  },
  {
    title: "Hotel Rservation",
    description: "A responsive hotel booking website that displays availiable rooms and places for multiple cities with beautiful interface.",
    technologies: ["React", "Node.js", "Tailwind"],
    githubUrl: "https://github.com/Lin18210/travel-web",
    liveUrl: "https://hotel-dr7s.vercel.app/"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
