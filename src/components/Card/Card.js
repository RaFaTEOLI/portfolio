import React from 'react';

import './Card.css';

const Card = props => {
  const formatDescription = description => {
    if (description) {
      return description.substr(0, 148) + '...';
    }
    return description;
  };
  const Info = ({ info }) => {
    return info ? <p>{info}</p> : false;
  };
  const AdditionalInfo = ({ info }) => {
    return info ? <p>{info}</p> : false;
  };
  const SubInfo = ({ info }) => {
    return info ? <p>{info}</p> : false;
  };
  return (
    <div
      className={`card ${props.color}`}
      onClick={() => window.open(props.link, '_blank')}
    >
      <div className="container card-content">
        <div className="title">
          <h4>{props.title}</h4>
        </div>
        <div className="info">
          {props.children}
          <Info info={props.info} />
          <AdditionalInfo info={props.additionalInfo} />
          <SubInfo info={props.subInfo} />
          <div className="description">
            <span>{formatDescription(props.description)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
