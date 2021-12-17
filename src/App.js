
import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainTemp from './components/MainTemp';
import SideList from './SideList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <MainTemp />
        <SideList />
      </div>
    );
  }
}

export default App;



