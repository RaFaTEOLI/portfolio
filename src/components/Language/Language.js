import React from 'react';

import './Language.css';

const LanguagesBar = props => {
  const handleHover = e => {
    e.preventDefault();
  };
  console.log(props);
  return (
    <li>
      <a href="#app" data-tip data-for={props.name} onMouseEnter={handleHover}>
        <img
          key={props.name}
          src={require(`../../${props.image}`).default}
          alt="Language"
          height="80"
          width="80"
        />
      </a>
    </li>
  );
};

export default LanguagesBar;
