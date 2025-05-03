import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {imageUrl, name, origin} = this.props; // destructuring
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
          <img src={imageUrl} class="card-img-top" style={{height: '180px', objectFit: 'cover', objectPosition: 'center top'}}/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{origin}</p>
            <a href="/" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem