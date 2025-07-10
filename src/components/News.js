import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  crewInfo=[
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

  constructor(){
    super();
    this.state ={
      type: "fruits",
      url: "https://api.api-onepiece.com/v2/fruits/en",
      Info : []
    }
  }

  handleChange = async() =>{
    if (this.state.type=="fruits"){
      this.setState({type: "characters", url: null, Info: this.crewInfo})
    }else{
      let new_url = "https://api.api-onepiece.com/v2/fruits/en";
      let data = await fetch(new_url);
      let parsedData = await data.json();
      let filteredData = parsedData.filter(item =>
        item.filename && item.filename.endsWith('.png')
      );
      this.setState({type: "fruits", url: new_url, Info: filteredData})
    }
  }

  async componentDidMount(){
    let data = await fetch(this.state.url);
    let parsedData = await data.json();
    let filteredData = parsedData.filter(item =>
      item.filename && item.filename.endsWith('.png')
    );
    this.setState({Info: filteredData});
  }

  render() {
    return (
      <>
        <h1 className="my-3" style={{textAlign:"center"}}>{this.state.type=="fruits"? "Devil Fruits" : "Characters"}</h1>
        <button onClick={this.handleChange}>Change</button>
        <div className='container my-3'>
          <div className="row">
            {this.state.Info.map((element)=>{
              return <div className="col-sm-4" key={element.id}>
                        <NewsItem imageUrl={this.state.type=="fruits"? element.filename: element.image} name={element.name} type={this.state.type=="fruits"? element.type: element.origin} imageStyle={this.state.type=="fruits"?{height: '160px', width: '140px', objectFit: 'fit'}:{height: '180px', objectFit: 'cover', objectPosition: 'center top'}}/>
                      </div>
            })}
          </div>
        </div>
      </>
    )
  }
}

export default News