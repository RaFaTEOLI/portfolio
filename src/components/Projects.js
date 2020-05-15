import React from 'react';

import Project from './Project';
import Filter from './Filter';

import './Projects.css';

const API = 'https://api.github.com/users/RaFaTEOLI/repos';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProjects: [],
      searchInput: '',
    };
  }

  handleChange = e => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ myProjects: data }));
  }
  render() {
    let filteredProjects = this.state.myProjects.filter(project => {
      return project.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    return (
      <div id="projects">
        <div className="row">
          <p className="menu-title">My Projects</p>
        </div>
        <div className="row">
          <Filter handleChange={this.handleChange} />
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
  }
}

export default Projects;
