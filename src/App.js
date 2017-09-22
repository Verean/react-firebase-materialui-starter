import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login/login';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route render={() => <h3>No Match</h3>} />
          </Switch>
      </BrowserRouter>
    )}
}

export default App;
