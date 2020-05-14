import React from 'react';

import aboutMe from '../db/aboutme.json';

import './Modal.css';

const Modal = ({ handleClose, show, children, title }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const formatLanguages = languages => {
    let fullLanguage = '';
    languages.forEach((language, index, array) => {
      if (index === array.length - 1) {
        fullLanguage += language.level + ' ' + language.language;
      } else {
        fullLanguage += language.level + ' ' + language.language + ', ';
      }
    });
    return fullLanguage;
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-title">
          <h1>{title}</h1>
          <span
            className="close-button"
            aria-hidden="true"
            onClick={handleClose}
          >
            ×
          </span>
        </div>
        {children}
        <table className="about-me-table">
          <tbody>
            <tr>
              <th scope="row">Name:</th>
              <td>{aboutMe.name}</td>
            </tr>
            <tr>
              <th scope="row">Last Name:</th>
              <td>{aboutMe.lastname}</td>
            </tr>
            <tr>
              <th scope="row">Birth Date</th>
              <td>{aboutMe.birthdate}</td>
            </tr>
            <tr>
              <th scope="row">Nationality</th>
              <td>{aboutMe.nationality}</td>
            </tr>
            <tr>
              <th scope="row">High School Graduation</th>
              <td>{aboutMe.highSchoolGraduation}</td>
            </tr>
            <tr>
              <th scope="row">College Graduation</th>
              <td>{aboutMe.collegeGraduation}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{aboutMe.email}</td>
            </tr>
            <tr>
              <th scope="row">Languages</th>
              <td>{formatLanguages(aboutMe.languages)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Modal;
