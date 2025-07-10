import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      selectedType: "characters"
    };
  }

  handleTypeChange = (new_type) => {
    this.setState({selectedType: new_type});
  }

  render() {
    return (
      <div>
        <Navbar toHandleTypeChange={this.handleTypeChange}/>
        <News selectedType={this.state.selectedType}/>
      </div>
    )
  }
}
