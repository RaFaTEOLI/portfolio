import React from 'react';

import './Card.css';

const Card = props => (
  <div
    className={`card ${props.color}`}
    onClick={() => window.open(props.link, '_blank')}
  >
    <div className="container card-content">
      <div className="title">
        <h4>{props.title}</h4>
      </div>
      <div className="info">
        <p>{props.info}</p>
        <p>{props.additionalInfo}</p>
        <span>{props.description}</span>
      </div>
    </div>
  </div>
);

export default Card;
