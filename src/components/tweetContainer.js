import React, { Component } from 'react';
import Tweets from './tweets';
const fetch = require('node-fetch');

export default class tweetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetList: [{'doug': 'hello'}, {'rong': 'hi'}, {'peter': 'hola'}, {'lukas': 'sup'}],
      username: this.props.username
    }
  }

  componentWillReceiveProps(props) {
    this.setState({'username': props.username})
  }

  componentWillMount() {
    console.log('in componentWillUpdate, state:', this.state)
    var data = '';

    fetch('http://localhost:8080/getTweets')
      .then((res) => {
        return res.text();
      }).then((body) => {
        console.log('body in fetch', body);
        this.setState({'tweetList': body})
      });
  }

  render() {
      {console.log('state in TweetContainer:', this.state)}
    return (
      <Tweets tweetList={this.state.tweetList} />
    )

  }
}