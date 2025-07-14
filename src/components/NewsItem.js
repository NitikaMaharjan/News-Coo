import React, {useState, useEffect} from 'react'

const NewsItem = (props) => {
  let {imageUrl, name, type, imageStyle, alt} = props; // destructuring

  const [finalName, setFinalName] = useState("");

  const checkName = () =>{
    let i;
    let initialName = finalName;
    for(i=0; i<name.length; i++){
      if(name[i]!==","){
        initialName+=name[i]
      }else{
        break;
      }
    }
    setFinalName(initialName);
  }

  useEffect(() => {
    checkName();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='my-3'>
      <div className="card" style={{width: '18rem'}}>
        <div className="d-flex justify-content-center">
          <img src={imageUrl} className="card-img" style={imageStyle} alt={alt}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{finalName}</h5>
          <p className="card-text">{type}</p>
          <button className="btn btn-sm btn-dark">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default NewsItem