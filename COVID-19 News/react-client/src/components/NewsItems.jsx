import React from 'react';


//this is going to be a single news article that users see, pick between this and Article comp.
const NewsItems = (props) => (

  <div>
    <div>
    { props.item.title }
    </div>
    <img src={ props.item.urlToImage } width='193' height='130'></img>
    <div>
    { props.item.author }
    </div>
    { props.item.description }
    <div>
    Publish date: { props.item.publishedAt.split('', 10) }
    <div>
      {/* this will be updated every day-change, it cuts out the date and leaves time showing */}
    Publish time: { props.item.publishedAt.slice(11, 21) }
    </div>
    </div>
    <div>
    <a href={ props.item.url }>Click here to read full Article </a>
    </div>
  </div>
)

export default NewsItems;