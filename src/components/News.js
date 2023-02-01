import { async } from "q";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }
  handelNext = async() => {
    this.setState({loading: true})
      let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=2bd06350f77f4a82819e4679aeadb1a5&page=${this.state.page + 1}&pageSize=${this.props.pageSize} `;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      articles: parseData.articles , 
      page:this.state.page + 1 ,
      loading:false
    });
    

  }
  handelPrev = async () => {
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=2bd06350f77f4a82819e4679aeadb1a5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
  let parseData = await data.json();
  this.setState({ 
    articles: parseData.articles , 
    page:this.state.page - 1 ,
    loading: false
  });


  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=2bd06350f77f4a82819e4679aeadb1a5&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading: true})
      let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      articles: parseData.articles,
      totalResults : parseData.totalResults,
      loading: false
    });

  }
  render() {
    return (
      <div className="container my-3">
        <h2>DND - Today Top Heding</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type = "button" onClick={this.handelPrev} className="btn btn-dark">Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handelNext} className="btn btn-outline-success">Next</button>
        </div>
      </div>
    );
  }
}

export default News;
