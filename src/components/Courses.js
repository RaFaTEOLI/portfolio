import React from 'react';

import Course from './Course';

import { courses } from '../db/course.json';

import './Courses.css';

class Courses extends React.Component {
  render() {
    let i = 0;
    return (
      <div id="courses">
        <div className="row">
          <p className="menu-title">Courses</p>
        </div>
        <div className="courses">
          {courses && courses.map(course => <Course key={i++} data={course} />)}
        </div>
      </div>
    );
  }
}

export default Courses;
