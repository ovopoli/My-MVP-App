import React from 'react';
import NewsItems from './NewsItems.jsx';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('INSERT_API_HERE');


//this is going to be the full functionality of the news app and where the all of the information loads for users
const News = (props) => (
  <div>
    <div>
      <button onClick>Get Latest News Now</button>
    </div>
    <div>

    </div>
    <div>

    </div>
    There are { props.items.length } new articles.
    { props.items.map(item => <NewsItems item={item}/>)}
  </div>
)

export default News;