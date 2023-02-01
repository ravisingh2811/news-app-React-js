import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title , description , imageUrl , newsUrl} = this.props;
    return (
    <div className='my-3'>
        <div className="card" >
        <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/220620112651-beyonce-file-2018.jpg?c=16x9&q=w_800,c_fill" : imageUrl } className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a rel="noreferrer"  href={newsUrl} target = "_blank" className="btn btn-primary">Read Full</a>
        </div>
      </div>
    </div>
    )
  }
}

export default NewsItem