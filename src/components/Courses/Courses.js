import React from 'react';

import Course from '../Course/Course';

import { courses } from '../../db/course.json';

import './Courses.css';

const Courses = () => {
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
};

export default Courses;
