import React, { Component } from 'react';
import './App.css';
import PageTitle from './components/headers/PageTitle'
import HousesHeaderTitle from './components/headers/HousesHeaderTitle';


class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
         <PageTitle />
       </header>
       <div>
      <HousesHeaderTitle />
       </div>
      </div>
    );
  }
}

export default App;
