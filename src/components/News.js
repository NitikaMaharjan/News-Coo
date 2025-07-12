import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Throbber from './Throbber';

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

  constructor(props){
    super(props);
    this.state ={
      Info : [],
      loading: true
    }
  }

  wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  fetchCharacters = async() => {
    await this.wait(300);
    this.props.setProgress(50);
    await this.wait(300);
    this.setState({Info: this.crewInfo, loading: false});
    this.props.setProgress(100);
  }

  fetchDevilFruits = async() => {
    this.props.setProgress(30);
    let url = "https://api.api-onepiece.com/v2/fruits/en";
    this.props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json();
    let filteredData = parsedData.filter(item =>
      item.filename && item.filename.endsWith('.png')
    );
    this.props.setProgress(70);
    this.setState({Info: filteredData, loading: false});
    this.props.setProgress(100);
  }

  componentDidMount(){
    document.title= this.props.selectedType;
    this.props.setProgress(10);
    if (this.props.selectedType==="Characters"){
      this.fetchCharacters();
    }else{
      this.fetchDevilFruits();
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.selectedType!==this.props.selectedType){
      document.title= this.props.selectedType;
      this.props.setProgress(10); 
      this.setState({Info: [], loading: true})     
      if (this.props.selectedType==="Characters"){
        this.fetchCharacters();
      }else{
        this.fetchDevilFruits();
      }
    }
  }

  render() {
    return (
      <>
        <h1 className="my-3" style={{textAlign:"center"}}>{this.props.selectedType==="Characters"? "Characters" : "Devil Fruits"}</h1>
        
        {this.state.loading? 
          <div className='text-center' style={{marginTop: "132px"}}>
            <Throbber/>
          </div>
        :
          <div className='container my-3'>
            <div className="row">
              {this.state.Info.map((element)=>{
                return  <div className="col-sm-4 d-flex justify-content-center" key={element.id}>
                          <NewsItem imageUrl={this.props.selectedType==="Characters"? element.image : element.filename} name={element.name} type={this.props.selectedType==="Characters"? element.origin : element.type} imageStyle={this.props.selectedType==="Characters"?{height: '180px', objectFit: 'cover', objectPosition: 'center top'} : {height: '160px', width: '140px', objectFit: 'fit'}}/>
                        </div>
              })}
            </div>
          </div>
        }
      </>
    )
  }
}

export default News