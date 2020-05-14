import React from 'react';

import './Experience.css';

class Experience extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          <h4>
            <b>{this.props.title}</b>
          </h4>
          <div className="info">
            <p>Company: {this.props.company}</p>
            <p>Start Date: {this.props.startDate}</p>
          </div>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Experience;
