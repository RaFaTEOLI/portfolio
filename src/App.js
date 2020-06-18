import React from 'react';
import './App.css';
import './normalize.css';
import Navbar from './components/Navbar';
import LanguagesBar from './components/LanguagesBar';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Courses from './components/Courses';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <LanguagesBar />
          <hr />
          <Projects />
          <hr />
          <Experiences />
          <hr />
          <Courses />
        </div>
      </div>
    );
  }
}

export default App;