import React, { Component } from 'react';
import Contacts from './components/Contacts';


class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render(){
    return(
      <Contacts></Contacts>
    );
    
  }
}

export default App;
