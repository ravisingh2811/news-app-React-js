import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bd06350f77f4a82819e4679aeadb1a5"
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles});
  }
  render() {
   
    return (
      
   <div className="container my-3">
       <h2>DND - Today Top Heding</h2>
         <div className="row" >
          {this.state.articles?.map((element) =>{
             return <div className="col-md-4" key={element.url}>
             <NewsItem title ={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} />
           </div>

          })}
           
         </div>
   </div>
      
    )
  }
}

export default News