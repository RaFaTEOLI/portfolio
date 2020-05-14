import React from 'react';

import GitHubButton from './GitHubButton';

import './Project.css';

class Project extends React.Component {
  formatDescription(description) {
    return description.substr(0, 148) + '...';
  }
  render() {
    return (
      <div className="project-card">
        <div className="container card-content">
          <h4>
            <b>{this.props.title}</b>
          </h4>
          <p className="info">Language: {this.props.language}</p>
          <p>{this.formatDescription(this.props.description)}</p>
        </div>
        <div className="project-card-footer">
          <GitHubButton url={this.props.url} />
        </div>
      </div>
    );
  }
}

export default Project;
