import React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Projects from './projects/view.jsx';
import Gallery from './gallery/view.jsx';
import Background from './core/background.jsx';

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
      <div className="navbar">
        <h1>Kieren BP</h1>
        {/*<nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
          </ul>
        </nav>*/}
      </div>
    )
  }
}


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: 'Hi, my name is Kieren Butcher-Penrose. I am 18 year and I was born in New Zealand. lectus in sed, maecenas erat, vehicula sit erat eu vel, in venenatis purus. Est metus porttitor nulla, dis morbi lectus lectus neque. '
        };
    }
    componentWillMount() {
        // Fetch Bio text from API and update bio state
    }
  render() {
    return (
      <div className="homepage-bio">
        <div className="me-irl">
          <div className="profile-picture">
          <img src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kierenbp/" target="_blank"><i className="fa fa-linkedin-square fa-2x" /></a>
            <a href="https://github.com/kierenbp" target="_blank"><i className="fa fa-github fa-2x" /></a>
            <a href="http://codepen.io/imkieren" target="_blank"><i className="fa fa-codepen fa-2x" /></a>
            {/*<a href="https://github.com/kierenbp" target="_blank"><i className="fa fa-medium fa-2x" /></a>*/}
            <a href="emailto:kieren@kieren.xyz" target="_blank"><i className="fa fa-envelope fa-2x" /></a>
          </div>
        </div>
        <p className="bio">
          {this.state.bio + ' ' + this.state.bio}
        </p>
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