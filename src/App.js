import React, { useState, useEffect } from 'react';
import './App.css';
import './normalize.css';
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';
import LanguagesBar from './components/LanguagesBar/LanguagesBar';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Courses from './components/Courses/Courses';

import ReactGA from 'react-ga';
const trackingId = "G-9HTSJYY6CT";
ReactGA.initialize(trackingId);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
      <div className="App">
        {loading ? <Loading /> : (
        <>
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
        </>
        ) }
      </div>
  );
}

export default App;
