import React from 'react';

import './Language.css';

const LanguagesBar = props => {
  const handleHover = e => {
    e.preventDefault();
  };
  return (
    <li>
      <a href="#app" data-tip data-for={props.name} onMouseEnter={handleHover}>
        <img
          src={require(`../../${props.image}`)}
          alt="Language"
          height="80"
          width="80"
        ></img>
      </a>
    </li>
  );
};

export default LanguagesBar;
