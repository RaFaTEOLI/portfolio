import React from 'react';

import Project from './Project';

import './Projects.css';

const API = 'https://api.github.com/users/RaFaTEOLI/repos';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProjects: [],
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ myProjects: data }));
  }
  render() {
    return (
      <div id="projects">
        <div className="row">
          <p className="menu-title">My Projects</p>
        </div>
        <div className="projects">
          {this.state.myProjects &&
            this.state.myProjects.map(project => (
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
  }
}

export default Projects;
