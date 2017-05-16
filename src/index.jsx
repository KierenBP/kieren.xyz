import React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
 render() {
   return(
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    </Router>
   )
 } 
}



class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
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