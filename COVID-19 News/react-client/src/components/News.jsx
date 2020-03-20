import React from 'react';
import NewsItems from './NewsItems.jsx';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('INSERT_API_HERE');

const News = (props) => (
  <div>
    <h4> Latest News </h4>
    <div>
      <button>Get Latest News Now</button>
    </div>

    There are { props.items.length } new articles.
    { props.items.map(item => <NewsItems item={item}/>)}
  </div>
)

export default News;