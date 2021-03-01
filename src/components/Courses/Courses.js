import React from 'react';

import Card from '../Card/Card';

import { courses } from '../../db/course.json';

import './Courses.css';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Courses = () => {
  let i = 0;
  return (
    <div id="courses">
      <div className="row">
        <p className="menu-title">
          <FontAwesomeIcon icon={faGraduationCap} /> Courses
        </p>
      </div>
      <div className="courses">
        {courses &&
          courses.map(course => (
            <Card
              key={i++}
              color="red-gradient"
              title={course.name}
              description={course.description}
              link={course.website}
            >
              <React.Fragment>
                <span>Taught by: {course.taughtBy}</span>
                <span>Language: {course.language}</span>
                <span>Hours: {course.hours}</span>
              </React.Fragment>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Courses;
