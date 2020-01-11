import React, { Component } from 'react';
import Universities from './components/Universities';
var Discogs = require('disconnect').Client;

var db = new Discogs().database();

db.getRelease(1540424)
  .then(function(release){
    //return db.getLabel(release.labels[0].id);
    return db.getArtist(release.artists[0].id);
  })
  .then(function(artist){
    alert(artist.name);
  });

class App extends Component {
  state = {
    universities: [],
  }

  componentDidMount(){
    fetch('http://universities.hipolabs.com/search?name=middle')
    .then(res => res.json())
    .then((data) => {
      this.setState({ universities: data })
    })
    .catch(console.log)
  }

  render(){
    return(
      <Universities universities={this.state.universities}></Universities>
    );
    
  }
}

export default App;
