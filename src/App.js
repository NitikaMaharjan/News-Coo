import './App.css';

import React, { Component } from 'react';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import HomeFeed from './components/HomeFeed';
import News from './components/News';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      progress: 0
    }
  }

  setProgress = (new_progress) => {
    this.setState({progress: new_progress});
  }

  render() {
    return (
      <BrowserRouter>
        <LoadingBar color="#245691" progress={this.state.progress}/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeFeed setProgress={this.setProgress}/>}/>
          <Route path='/characters' element={<News setProgress={this.setProgress} selectedType="Characters"/>}/>
          <Route path='/devil-fruits' element={<News setProgress={this.setProgress} selectedType="Devil Fruits"/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
