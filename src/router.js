import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { HomePage, TreePage } from './routes'


class MyRoute extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tree">Tree</Link></li>
          </ul>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/tree" component={TreePage}/>
        </div>
      </Router>
    );
  }
}


export default MyRoute;
