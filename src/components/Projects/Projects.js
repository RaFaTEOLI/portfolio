import React, { useState, useEffect } from 'react';

import Project from '../Project/Project';
import Filter from '../Filter/Filter';

import './Projects.css';

const API = 'https://api.github.com/users/RaFaTEOLI/repos';

const Projects = props => {
  const [myProjects, setMyProjects] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMyProjects(data));
  });

  const filteredProjects = myProjects.filter(project => {
    return project.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div id="projects">
      <div className="row">
        <p className="menu-title">My Projects</p>
      </div>
      <div className="row">
        <Filter handleChange={handleChange} />
      </div>
      <div className="projects">
        {filteredProjects &&
          filteredProjects.map(project => (
            <Project
              key={project.id}
              title={project.name}
              url={project.html_url}
              language={project.language}
              description={project.description}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
