import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Login from './Pages/Login';
import User from './Pages/User';
import Admin from './Pages/Admin';
import Manager from './Pages/Manager';


function App() {
  return (
    <div className="App">
      <Router >
      {localStorage.getItem("hrviteToken") !== null?
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/user" component={User} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/manager" component={Manager} />

        </Switch>:
        <Switch>
           <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>}

      </Router>
    </div>
  );
}

export default App;
