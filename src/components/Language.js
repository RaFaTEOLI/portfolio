import React from 'react';

import './Language.css';

class LanguagesBar extends React.Component {
  handleHover(e) {
    e.preventDefault();
  }
  render() {
    return (
      <li>
        <a
          href="#app"
          data-tip
          data-for={this.props.name}
          onMouseEnter={this.handleHover}
        >
          <img
            src={this.props.image}
            alt="Language"
            height="80"
            width="80"
          ></img>
        </a>
      </li>
    );
  }
}

export default LanguagesBar;
