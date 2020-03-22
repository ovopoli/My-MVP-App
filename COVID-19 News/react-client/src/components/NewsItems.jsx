import React from 'react';


//this is going to be a single news article that users see, pick between this and Article comp.
const NewsItems = (props) => (

  <div>
    <div>
    { props.item.title }
    </div>
    <img src={ props.item.urlToImage }></img>
    <div>
    { props.item.author }
    </div>
    { props.item.description }
    <div>
    { props.item.publishedAt }
    </div>
    <div>
    <a href={ props.item.url }>Click here to read full Article </a>
    </div>
  </div>
)

export default NewsItems;