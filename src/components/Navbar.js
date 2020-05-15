import React, { Component } from 'react';
import Modal from './Modal';
import './Navbar.css';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API = 'https://api.github.com/users/RaFaTEOLI/repos';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePhoto: '',
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  responsiveIt() {
    const x = document.getElementById('mainNav');

    if (x.className === 'navbar') {
      x.className = 'navbar responsive';
    } else {
      x.className = 'navbar';
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ profilePhoto: data[0].owner.avatar_url }));
  }
  render() {
    return (
      <header className="header">
        <Modal
          show={this.state.show}
          title="About Me"
          handleClose={this.hideModal}
        ></Modal>
        <nav className="navbar" id="mainNav">
          <div className="navbar-title" onClick={this.showModal}>
            <img
              href="/"
              className="profile"
              src={this.state.profilePhoto}
              alt="Profile"
            ></img>
            Rafael Tessarolo
          </div>
          <div className="navbar-menu" id="navbar-menu">
            <ul>
              <li>
                <a href="#app" onClick={this.showModal}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experiences">Experience</a>
              </li>
              <li>
                <a href="#app" className="icon" onClick={this.responsiveIt}>
                  <FontAwesomeIcon className="bars-icon" icon={faBars} />
                  <FontAwesomeIcon className="close-icon" icon={faTimes} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
