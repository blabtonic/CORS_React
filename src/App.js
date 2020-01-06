import React, { Component } from 'react';
import Universities from './components/Universities';

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
