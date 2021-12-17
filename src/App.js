
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
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainTemp />} />
            <Route path='/SideList' element={<SideList />} />
            {/*   <Route path='/SideList/:id' element={<DetailTemp />} /> */}
          </Routes>

        </BrowserRouter>

      </div>
    );
  }
}

export default App;



{/*  <MainTemp />
        <SideList />
        <DetailList /> */}