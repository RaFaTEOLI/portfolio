import React from 'react';

import Experience from './Experience';

import { experiences } from '../db/experience.json';

import './Experiences.css';

class Experiences extends React.Component {
  render() {
    let i = 0;
    return (
      <div id="experiences">
        <div className="row">
          <p className="menu-title">My Experience</p>
        </div>
        <div className="experiences">
          {experiences &&
            experiences.map(experience => (
              <Experience
                key={i++}
                title={experience.jobPosition}
                company={experience.company}
                startDate={experience.startDate}
                description={experience.description}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Experiences;
