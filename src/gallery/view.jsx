import React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryAlbums: []
        };
    }
    componentWillMount() {
        // Fetch gallery albums from API and update galleryAlbums state
    }
    render() {
        // Loop over array and render tumbnail images
      return (
          <div>Placeholder</div>
      )
    }
}



export default class View extends React.Component {
    render() {
      return (
        <div>
            <h1>Gallery</h1>
            <Gallery />
        </div>
        )
    }
}

