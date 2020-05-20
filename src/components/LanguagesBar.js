import React from 'react';

import Language from './Language';
import ReactTooltip from 'react-tooltip';

import { languages } from '../db/languages.json';

import './LanguagesBar.css';

class LanguagesBar extends React.Component {
  render() {
    return (
      <div className="container" id="aboutme">
        <div className="row">
          <p className="menu-title">
            Languages, Frameworks, Tools and Libraries I can work with
          </p>
        </div>
        <div className="languages-menu">
          <ul>
            {languages &&
              languages.map(language => (
                <div>
                  <Language
                    key={language.id}
                    name={language.name}
                    image={language.image}
                  />
                  <ReactTooltip id={language.name}>
                    <span>{language.name}</span>
                  </ReactTooltip>
                </div>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default LanguagesBar;
