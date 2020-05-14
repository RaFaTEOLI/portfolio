import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar">
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
