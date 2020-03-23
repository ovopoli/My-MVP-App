// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import News from './components/News.jsx';
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI(process.env.NEWS_API_KEY);


import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import News from './components/News.jsx';
import axios from 'axios';
const API_URL = 'http://newsapi.org/v2/everything';


//this is the parent component, it will tie everything together and render it to the DOM with full functionality 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.loadNew = this.loadNew.bind(this);
  }

  
  componentDidMount() {
        axios.get('http://localhost:3000/home',)
        .then((response) => {         
          this.setState({ items: response.data.articles });
        })
        .catch((err) =>
        console.log(err)
        )
  }

  loadNew() {
    console.log('clicked')
  }

  render () {
    return (
    <div>
      <h1>COVID-19 News Now</h1>
      <News 
      loadNew={this.loadNew}
      items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       article: []
//     }
//   }
//   loadNew (props) {
//     console.log('clicked');
//     // fetch('http://newsapi.org/v2/everything')
//     // .then(res => res.json())
//     // .then((data) => {
//     //   this.setState({ article: data })
//     // })
//     // .catch(console.log)
//   }
//   // componentDidMount() {
//   //   fetch('http://newsapi.org/v2/everything')
//   //   .then(res => res.json())
//   //   .then((data) => {
//   //     this.setState({ article: data })
//   //   })
//   //   .catch(console.log)
//   // }
// }
//   // getNews () {
//   //   newsapi.v2.everything({
//   //   q: 'corona virus',
//   //   language: 'en',
//   //   sortBy: 'relevancy',
//   //   page: 2
//   //   }).then(response => {
//   //   console.log(response);
//   //   });
//   // }

//   // componentDidMount() {
//   //   $.ajax({
//   //     url: '/items',
//   //     success: (data) => {
//   //       this.setState({
//   //         items: data
//   //       })
//   //     },
//   //     error: (err) => {
//   //       console.log('err', err);
//   //     }
//   //   });
//   // }

//   render () {
//     return ( 
//     <div>
//       <h1>COVID-19 News Now</h1>
//       <News 
//       items={this.state.article}
//       />
//     </div>
//     )}

// ReactDOM.render(<App />, document.getElementById('app'));