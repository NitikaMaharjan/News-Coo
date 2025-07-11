import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import HomeFeed from './components/HomeFeed';
import News from './components/News';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      selectedType: "homefeed"
    };
  }

  handleTypeChange = (new_type) => {
    this.setState({selectedType: new_type});
  }

  render() {
    return (
      <div>
        <Navbar toHandleTypeChange={this.handleTypeChange}/>
        {this.state.selectedType==="homefeed"?<HomeFeed/>:<News selectedType={this.state.selectedType}/>}
      </div>
    )
  }
}
