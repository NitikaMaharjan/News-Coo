import React, { Component } from 'react'

export class HomeFeed extends Component {

  wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async componentDidMount(){
    this.props.setProgress(10);
    await this.wait(300);
    this.props.setProgress(50);
    await this.wait(300);
    this.props.setProgress(100);
  }

  render() {
    return (
      <div className="text-center">
        <img src="/images/img1.png" style={{height: "400px"}}/>
        <h5 className="m-0 p-0">News Coo delivers news related to one piece characters and devil fruits.</h5>
      </div>
    )
  }
}

export default HomeFeed