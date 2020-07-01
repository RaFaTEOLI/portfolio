import React from 'react';
import './App.css';
import './normalize.css';
import Navbar from './components/Navbar/Navbar';
import LanguagesBar from './components/LanguagesBar/LanguagesBar';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Courses from './components/Courses/Courses';

const App = () => (
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

export default App;
