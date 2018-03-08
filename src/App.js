import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';



import Home from './components/userviews/juha';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
