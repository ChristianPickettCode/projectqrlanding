import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// CSS - controlled by /scss
import './css/main.css';

// Redux
import { Provider } from 'react-redux';

import store from './store';

import { loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import { getCurrentProfile } from './actions/profileActions';

// Layout
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Auth from './pages/Auth';
import TestQr from './pages/TestQr';
import Success from './pages/Success';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getCurrentProfile());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* Landing Pages */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/test/:id" component={TestQr} />
            <Route exact path="/details/:id" component={Detail} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/:id" component={Auth} />
          </Switch>
        </div>

        </Router>
    </Provider>
  );
}

export default App;
