import React from 'react';
import Project from './Project';
import { projectList } from '../constants';

const Projects = () => {
  return (
    <section
      id='projects'
      className='max-w-screen-2xl mx-auto flex flex-col justify-center sm:px-16 px-6 md:pb-[3.5rem] md:pt-[9rem] pt-16 pb-6 overflow-hidden bg-neutral-800 sm:bg-neutral-700'
    >
      {/* Header */}
      <div data-aos='fade-up'>
        <h1 className='text-4xl sm:text-6xl font-bold mb-5'>My Work</h1>
      </div>

      {/* Projects */}
      <div className='flex flex-col lg:flex-row flex-wrap justify-between'>
        {projectList.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
