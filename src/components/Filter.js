import React from 'react';

import './Filter.css';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <input
          type="text"
          onChange={this.props.handleChange}
          className="filter-input"
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Filter;
