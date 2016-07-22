import React, { Component } from 'react';
import Tweet from './tweet';
const axios = require('axios');


export default class Tweets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetList: [],
    }
  }

  componentDidMount() {
    var reqConfig = {
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
        'Content-Type': 'text/html'
      }
    }

    this.serverRequest = 
      console.log('in CDM', this.props.username)
      axios.post('http://localhost:8080/getTweets', {username: this.props.username}, reqConfig)
        .then((result) => {
          this.setState({tweetList: result.data})
          console.log('in tweets, result.data', result.data)
         });  
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  renderList(tweets) {
    return (
      tweets.map((tweet, index) => {
        return <div key={index}> <Tweet tweet={tweet} /> </div>
      })
    )
  }
  
  render() {
    return <span> {this.renderList(this.state.tweetList)} </span>
  }
}