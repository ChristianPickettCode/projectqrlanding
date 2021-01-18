import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// CSS - controlled by /scss
import './css/main.css';

// Layout
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Auth from './pages/Auth';
import QrPage from './pages/Qr';
import Success from './pages/Success';

const App = () => {

  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        {/* Landing Pages */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/checkin" component={Auth} />
        <Route exact path="/complete" component={QrPage} />
        <Route exact path="/success" component={Success} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
