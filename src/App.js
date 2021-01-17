import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// CSS - controlled by /scss
import './css/main.css';

// Layout
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './pages/Landing';

const App = () => {

  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
