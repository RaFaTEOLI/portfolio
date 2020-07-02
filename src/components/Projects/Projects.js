import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import Filter from '../Filter/Filter';

import './Projects.css';

const API = 'https://api.github.com/users/RaFaTEOLI/repos';

const Projects = props => {
  const [myProjects, setMyProjects] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const formatTitle = title => {
    let fullTitle = '';
    let titleObj = 0;

    if (title.includes('-')) {
        titleObj = title.split('-');
    } else if (title.includes('_')) {
        titleObj = title.split('_');
    }
    
    if (titleObj.length > 1) {
        titleObj.map(word => {
            word = word.replace(word.substr(0, 1), word.substr(0, 1).toUpperCase());
            fullTitle += word + " ";
            return word;
        });
        return fullTitle;
    }
    //title = title.replace(/-/g, ' ');
    return title.replace(title.substr(0, 1), title.substr(0, 1).toUpperCase());
  }

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
            <Card
              key={project.id}
              color="blue-gradient"
              title={formatTitle(project.name)}
              info={`Language: ${project.language}`}
              description={project.description}
              link={project.html_url}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
