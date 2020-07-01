import React from 'react';

import './Filter.css';

const Filter = props => (
  <div className="filter">
    <input
      type="text"
      onChange={props.handleChange}
      className="filter-input"
      placeholder="Search..."
    />
  </div>
);

export default Filter;
