import React, { Component } from 'react';
import Tweets from './tweets';
const axios = require('axios');

export default class TweetContainer extends Component {
  constructor(props) {
    super(props);
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
      axios.post('http://localhost:8080/getTweets', {username: this.props.username}, reqConfig)
        .then((result) => {
          this.setState({tweetList: result.data})
         });  
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }


  render() {
    return (
      <span>
        <Tweets tweets={this.state.tweetList} />
      </span>   
    )

  }
}