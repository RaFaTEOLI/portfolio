import React from 'react';

import Card from '../Card/Card';

import { experiences } from '../../db/experience.json';

import './Experiences.css';

const Experiences = () => {
  let i = 0;
  return (
    <div id="experiences">
      <div className="row">
        <p className="menu-title">My Experience</p>
      </div>
      <div className="experiences">
        {experiences &&
          experiences.map(experience => (
            <Card
              key={i++}
              color="light-blue-gradient"
              title={experience.jobPosition}
              info={`Company: ${experience.company}`}
              additionalInfo={`Start Date: ${experience.startDate}`}
              description={experience.description}
              link={experience.website}
            >
              <React.Fragment>
                <span>Technologies: {experience.technologies}</span>
              </React.Fragment>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Experiences;
