import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Throbber from './Throbber';

const News = (props) => {
  const crewInfo=[
    { 
      "id": "1",
      "name": "Monkey D. Luffy",
      "image": "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png",
      "origin": "East Blue (Goa Kingdom)"
    },
    {
      "id": "2",
      "name": "Roronoa Zoro",
      "image": "https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png",
      "origin": "East Blue"
    },
    {
      "id": "3",
      "name": "Nami",
      "image": "https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png",
      "origin": "East Blue (Conomi Islands)"
    },
    {
      "id": "4",
      "name": "Usopp",
      "image": "https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png",
      "origin": "East Blue (Gecko Islands)"
    },
    {
      "id": "5",
      "name": "Sanji",
      "image": "https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png",
      "origin": "North Blue"
    },
    {
      "id": "6",
      "name": "Tony Tony Chopper",
      "image": "https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png",
      "origin": "Grand Line (Drum Island)"
    },
    {
      "id": "7",
      "name": "Nico Robin",
      "image": "https://static.wikia.nocookie.net/onepiece/images/b/bc/Nico_Robin_Anime_Post_Timeskip_Infobox.png",
      "origin": "West Blue"
    },
    {
      "id": "8",
      "name": "Franky",
      "image": "https://static.wikia.nocookie.net/onepiece/images/8/8c/Franky_Anime_Post_Timeskip_Infobox.png",
      "origin": "South Blue"
    },
    {
      "id": "9",
      "name": "Brook",
      "image": "https://static.wikia.nocookie.net/onepiece/images/4/41/Brook_Anime_Post_Timeskip_Infobox.png",
      "origin": "West Blue"
    },
    {
      "id": "10",
      "name": "Jinbe",
      "image": "https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png",
      "origin": "Grand Line (Fish-Man Island)"
    }
  ]

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(false);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchCharacters = async() => {
    await wait(300);
    props.updateProgress(50);
    await wait(300);
    setInfo(crewInfo);
    setLoading(false);
    props.updateProgress(100);
  }

  const fetchDevilFruits = async() => {
    props.updateProgress(30);
    let url = "https://api.api-onepiece.com/v2/fruits/en";
    props.updateProgress(70);
    let data = await fetch(url);
    let parsedData = await data.json();
    let filteredData = parsedData.filter(item =>
      item.filename && item.filename.endsWith('.png')
    );
    props.updateProgress(100);
    setInfo(filteredData);
    setLoading(false);
  }

  useEffect(() => {
    document.title= props.selectedType;
    props.updateProgress(10);
    setInfo([]);
    setLoading(true);
    if (props.selectedType==="Characters"){
      fetchCharacters();
    }else{
      fetchDevilFruits();
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY){
        setScroll(true);
      }else{
        setScroll(false);
      }
    });

    // eslint-disable-next-line
  }, [props.selectedType]); // runs everytime selectedType changes

  return (
    <>
      <h1 id="top" style={{textAlign:"center", paddingTop: "80px"}}>{props.selectedType==="Characters"? "Characters" : "Devil Fruits"}</h1>
      
      {loading? 
        <div className='text-center' style={{marginTop: "132px"}}>
          <Throbber/>
        </div>
      :
        <div className='container my-3'>
          <div className="row">
            {info.map((element)=>{
              return  <div className="col-sm-4 d-flex justify-content-center" key={element.id}>
                        <NewsItem imageUrl={props.selectedType==="Characters"? element.image : element.filename} name={element.name} type={props.selectedType==="Characters"? element.origin : element.type} imageStyle={props.selectedType==="Characters"?{height: '180px', objectFit: 'cover', objectPosition: 'center top'} : {height: '160px', width: '140px', objectFit: 'fit'}}
                        alt={props.selectedType==="Characters"?"character image":"devil fruit image"}/>
                      </div>
            })}
          </div>
        </div>
      }
      
      <a className={`up-arr ${scroll?'scroll':''}`} href="#top">&uarr;</a>
    </>
  )
}

export default News