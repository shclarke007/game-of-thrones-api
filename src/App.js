import React, { Component } from 'react';
import './App.css';
import PageTitle from './components/headers/PageTitle'
import HousesData from './components/HousesData'

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
        <PageTitle />
       </header>
      <div>
        <HousesData />
       </div>
      </div>
    );
  }
}

export default App;
