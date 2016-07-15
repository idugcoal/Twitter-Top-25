import React, { Component } from 'react';
import Tweets from './tweets';
import Tweet from './tweet';
const axios = require('axios');

export default class TweetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetList: [],
      username: this.props.username
    }
  }
  
  componentDidMount() {
    var that = this;
    var config = {
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
        'Content-Type': 'text/html'
      }
    }

    this.serverRequest = 
      axios.post('http://localhost:8080/getTweets', {username: this.props.username}, config)
        .then(function(result) {
          that.setState({tweetList: result.data})
         });
    
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }


  render() {
      {console.log('in TweetContainer', this.state)}
    return (
      <span>
        <Tweets tweets={this.state.tweetList} />
      </span>   
    )

  }
}