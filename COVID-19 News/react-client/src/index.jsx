import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import News from './components/News.jsx';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

//this is the parent component, it will tie everything together and render it to the DOM with full functionality 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Article: []
    }
  }
  getNews () {
    newsapi.v2.everything({
    q: 'corona virus',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
    }).then(response => {
    console.log(response);
    });
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>COVID-19 News Now</h1>
      <News 
      items={this.state.items}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));