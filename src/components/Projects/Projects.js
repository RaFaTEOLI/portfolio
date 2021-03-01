import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import Select from '../Select/Select';
import Loading from '../Loading/Loading';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Projects.css';

const API = 'https://api.github.com/users/RaFaTEOLI/repos?sort=updated';

const Projects = props => {
  const [myProjects, setMyProjects] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [languages] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSelectChange = e => {
    setLanguageFilter(e.target.value);
    console.log(languageFilter);
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
        fullTitle += word + ' ';
        return word;
      });
      return fullTitle;
    }
    //title = title.replace(/-/g, ' ');
    return title.replace(title.substr(0, 1), title.substr(0, 1).toUpperCase());
  };

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setMyProjects(data);
        setLoading(false);
      });
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        data.map(project =>
          !languages.includes(project.language)
            ? languages.push(project.language)
            : false
        );
        setLoading(false);
      });
  }, [languages]);

  // const filteredProjects = myProjects.filter(project => {
  //   return project.name.toLowerCase().includes(searchInput.toLowerCase());
  // });
  const filteredProjects = myProjects.filter(project => {
    if (languageFilter && !searchInput) {
      return project.language.toLowerCase() === languageFilter.toLowerCase();
    } else if (!languageFilter && searchInput) {
      return project.name.toLowerCase().includes(searchInput.toLowerCase());
    } else if (languageFilter && searchInput) {
      return (
        project.name.toLowerCase().includes(searchInput.toLowerCase()) &&
        project.language.toLowerCase() === languageFilter.toLowerCase()
      );
    } else {
      return true;
    }
  });

  return (
    <div id="projects">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="row">
            <p className="menu-title">
              <FontAwesomeIcon icon={faLaptopCode} /> My Projects
            </p>
          </div>
          <div className="row">
            <div className="filters">
              <Filter handleChange={handleChange} />
              <Select
                data={languages}
                handleSelectChange={handleSelectChange}
                placeholder="Language"
              />
            </div>
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
        </>
      )}
    </div>
  );
};

export default Projects;
