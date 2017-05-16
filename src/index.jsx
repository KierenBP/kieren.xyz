import React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Projects from './projects/view.jsx';
import Gallery from './gallery/view.jsx';

export default class App extends React.Component {
 render() {
   return(
    <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    </Router>
   )
 } 
}


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <h1>Kieren BP</h1>
        <nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
          </ul>
        </nav>
      </div>
    )
  }
}


class Homepage extends React.Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

const NotFound = () => (
    <div>
      <h1>404 .:. This page is not found!</h1>
      <Link to="/">Go Home!</Link>
    </div>
)
ReactDOM.render(<App />, document.getElementById('app'));