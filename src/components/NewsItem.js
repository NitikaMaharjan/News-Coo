import React from 'react'

const NewsItem = (props) => {
  let {imageUrl, name, type, imageStyle} = props; // destructuring
  return (
    <div className='my-3'>
      <div className="card" style={{width: '18rem'}}>
        <div className="d-flex justify-content-center">
          <img src={imageUrl} className="card-img" style={imageStyle}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{type}</p>
          <button className="btn btn-sm btn-dark">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default NewsItem