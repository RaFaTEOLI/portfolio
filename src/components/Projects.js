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
          {/* <Project
            title="React Chat App"
            image={reactChatApp}
            description="React chat application using Scaledrone and emoji-mart, where you can chat with a lot of users at the same time."
          />
          <Project
            title="VueJS Knowledge Base Crud"
            image={vueJSCrud}
            description="Complete CRUD project using VueJS, with JWT authentication, mongodb and postgresql, developed in a course with Cod3r."
          />
          <Project
            title="React Native Whatsapp"
            description="React native chat app, where you can add contacts and chat with others, similar to WhatsApp and also based on WhatsApp."
          />
          <Project
            title="Remote SSH Server List"
            description="This program was developed to make server administration easier, so that you can run a single command on many servers all at once, with no trouble."
          />
          <Project
            title="React Calculator"
            description="A standard calculator developed in React."
          /> */}
          {this.state.myProjects &&
            this.state.myProjects.map(project => (
              <Project
                title={project.name}
                url={project.html_url}
                description={project.description}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Projects;
