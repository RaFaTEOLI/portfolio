import React from 'react';

import './Experience.css';

const Experience = props => (
  <div className="experience-card">
    <div className="container card-content">
      <h4>
        <b>{props.title}</b>
      </h4>
      <div className="info">
        <p>Company: {props.company}</p>
        <p>Start Date: {props.startDate}</p>
      </div>
      <p>{props.description}</p>
    </div>
  </div>
);

export default Experience;
