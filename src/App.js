import React, { Component } from 'react';
import './App.css';
import PageTitle from './components/headers/PageTitle'

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
         <PageTitle />
       </header>
      </div>
    );
  }
}

export default App;
