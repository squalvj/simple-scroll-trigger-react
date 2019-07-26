import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './container/Home'
import './styles/css/core.scss';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
      )
    }
}
