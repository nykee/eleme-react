import React, { Component } from 'react';
import Header from './components/header/Header'
import FootGuide from './components/footer/FootGuide'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          {this.props.children}
          <FootGuide></FootGuide>
      </div>
    );
  }
}

export default App;
