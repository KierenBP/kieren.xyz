import React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }
    componentWillMount() {
        // Fetch Projects from API and update projects state
    }
    render() {
      return (
           <div>Placeholder</div>
      )
    }
}

export default class View extends React.Component {
    render() {
      return ( 
        <div>
            <h1>Projects</h1>
            <Projects />
        </div>
        )
    }
}

