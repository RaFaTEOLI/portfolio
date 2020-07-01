import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import './Navbar.css';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API = 'https://api.github.com/users/RaFaTEOLI/repos';

const Navbar = props => {
  const [profilePhoto, setProfilePhoto] = useState('');
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const responsiveIt = () => {
    const x = document.getElementById('mainNav');

    if (x.className === 'navbar') {
      x.className = 'navbar responsive';
    } else {
      x.className = 'navbar';
    }
  };

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setProfilePhoto(data[0].owner.avatar_url));
  });
  return (
    <header className="header">
      <Modal show={show} title="About Me" handleClose={hideModal}></Modal>
      <nav className="navbar" id="mainNav">
        <div className="navbar-title" onClick={showModal}>
          <img
            href="/"
            className="profile"
            src={profilePhoto}
            alt="Profile"
          ></img>
          Rafael Tessarolo
        </div>
        <div className="navbar-menu" id="navbar-menu">
          <ul>
            <li>
              <a href="#app" onClick={showModal}>
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
              <a href="#app" className="icon" onClick={responsiveIt}>
                <FontAwesomeIcon className="bars-icon" icon={faBars} />
                <FontAwesomeIcon className="close-icon" icon={faTimes} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
