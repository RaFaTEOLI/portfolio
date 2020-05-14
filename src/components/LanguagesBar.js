import React from 'react';

import Language from './Language';
import ReactTooltip from 'react-tooltip';

import phpLogo from '../php.png';
import javaLogo from '../java.png';
import jsLogo from '../javascript.png';
import reactLogo from '../react.png';
import vueLogo from '../vue.png';
import springLogo from '../spring.png';
import laravelLogo from '../laravel.png';
import bashLogo from '../bash.png';
import cLogo from '../c.png';

import './LanguagesBar.css';

class LanguagesBar extends React.Component {
  render() {
    return (
      <div className="container" id="aboutme">
        <div className="row">
          <p className="menu-title">
            Languages, Frameworks and Libraries I can work with
          </p>
        </div>
        <div className="languages-menu">
          <ul>
            <Language name="PHP" image={phpLogo} />
            <ReactTooltip id="PHP">
              <span>PHP</span>
            </ReactTooltip>

            <Language name="JavaScript" image={jsLogo} />
            <ReactTooltip id="JavaScript">
              <span>JavaScript</span>
            </ReactTooltip>

            <Language name="React" image={reactLogo} />
            <ReactTooltip id="React">
              <span>React, React Native</span>
            </ReactTooltip>

            <Language name="Java" image={javaLogo} />
            <ReactTooltip id="Java">
              <span>Java</span>
            </ReactTooltip>

            <Language name="Spring" image={springLogo} />
            <ReactTooltip id="Spring">
              <span>Spring</span>
            </ReactTooltip>

            <Language name="Laravel" image={laravelLogo} />
            <ReactTooltip id="Laravel">
              <span>Laravel</span>
            </ReactTooltip>

            <Language name="Vue" image={vueLogo} />
            <ReactTooltip id="Vue">
              <span>Vue</span>
            </ReactTooltip>

            <Language name="Bash" image={bashLogo} />
            <ReactTooltip id="Bash">
              <span>Bash Script</span>
            </ReactTooltip>

            <Language name="C" image={cLogo} />
            <ReactTooltip id="C">
              <span>C</span>
            </ReactTooltip>
          </ul>
        </div>
      </div>
    );
  }
}

export default LanguagesBar;
