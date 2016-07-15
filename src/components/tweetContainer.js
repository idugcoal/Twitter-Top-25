import React, { Component } from 'react';
import Tweets from './tweets';
import Tweet from './tweet';
const fetch = require('isomorphic-fetch');
const headers = new Headers();
const http = require('http');
require('es6-promise').polyfill();

export default class TweetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tweetList: [{'doug': 'hello'}, {'rong': 'hi'}, {'peter': 'hola'}, {'lukas': 'sup'}],
      username: this.props.username
    }
  }

  // componentWillReceiveProps(props) {
  //   this.setState({'username': props.username})
  // }

  componentWillMount() {
    var data = '';

    const options = {
      host: 'localhost',
      port: '8080',
      path: '/getTweets',
      method: "POST",
      body: {"username": this.state.username},
      mode: "cors",
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
        'Content-Type': 'text/html'
      }
    }

    const request = http.request(options, (res) => {
      var str = '';
      res.on('data', (chunk) => {
        str += chunk;
      });
      res.on('end', () => {
        console.log('heeeeere')
        this.setState({tweetList: str})
      })
    })

    request.end(this.state.username);

  }

  renderList() {
    {console.log('in renderList', this.props, this.state)}
    return (this.props.tweetList.map((tweet, index) => {
      <Tweet key={index} tweetContent={tweet} />
    }))

  }

  render() {
      {console.log('in TweetContainer', this.state.tweetList)}
    return (
      <span>
      {this.state.username}
      <Tweets tweetContent={this.state.tweetList} />
      </span>   
    )

  }
}