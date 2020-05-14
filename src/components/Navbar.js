import React, { Component } from 'react';
import './Navbar.css';

const API = 'https://api.github.com/users/RaFaTEOLI/repos';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePhoto: '',
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ profilePhoto: data[0].owner.avatar_url }));
  }
  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="navbar-title">
            <img
              href="/"
              className="profile"
              src={this.state.profilePhoto}
              alt="Profile"
            ></img>
            Rafael Tessarolo
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="#aboutme">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experiences">Experience</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
