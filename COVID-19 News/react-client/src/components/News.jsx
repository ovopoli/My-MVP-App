import React from 'react';
import NewsItems from './NewsItems.jsx';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('INSERT_API_HERE');
const API_URL = 'http://newsapi.org/v2/everything';



//this is going to be the full functionality of the news app and where the all of the information loads for users
const News = (props) => (
  <div>
    <div>
    There are { props.items.length } new articles
    </div>
    <div>
      <button onClick={props.loadNew}>Get Latest News Now</button>
    </div>
    <div>
      Articles:
    </div>
    <div>
      { props.items.map(item => <NewsItems item={item}/>)}
    </div>
  </div>
)

export default News;