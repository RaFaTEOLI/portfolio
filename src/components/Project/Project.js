import React from 'react';

import Card from '../Card/Card';

import './Project.css';

const Project = props => {
  const formatDescription = description => {
    return description.substr(0, 148) + '...';
  };
  return (
    <Card
      color="blue-gradient"
      title={props.title}
      info={`Language: ${props.language}`}
      description={formatDescription(props.description)}
      link={props.url}
    />
  );
};

export default Project;
