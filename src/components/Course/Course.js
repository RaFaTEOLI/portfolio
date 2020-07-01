import React from 'react';

import './Course.css';

const Course = ({ data }) => (
  <div className="course-card">
    <div className="container card-content">
      <h4>
        <b>{data.name}</b>
      </h4>
      <div className="info">
        <span>Taught by: {data.taughtBy}</span>
        <span>Language: {data.language}</span>
        <span>Hours: {data.hours}</span>
      </div>
      <p>{data.description}</p>
    </div>
  </div>
);

export default Course;
