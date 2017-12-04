import React, { Component } from 'react';
import Header from './components/header/header'
import FootGuide from './components/footer/footGuide'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <FootGuide></FootGuide>
      </div>
    );
  }
}

export default App;
