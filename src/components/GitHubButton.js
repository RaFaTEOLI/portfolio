import React from 'react';

import githubLogo from '../github.png';

import './GitHubButton.css';

class GitHubButton extends React.Component {
  render() {
    return (
      <a
        href={this.props.url}
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon" alt="GitHub" src={githubLogo}></img>
        {this.props.text}
      </a>
    );
  }
}

export default GitHubButton;
