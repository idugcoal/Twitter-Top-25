import React, { Component } from 'react';
import Tweets from './tweets';
const fetch = require('isomorphic-fetch');
const headers = new Headers();
require('es6-promise').polyfill();
const http = require('http');

export default class TweetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tweetList: [{'doug': 'hello'}, {'rong': 'hi'}, {'peter': 'hola'}, {'lukas': 'sup'}],
      username: this.props.username
    }
  }

  componentWillReceiveProps(props) {
    this.setState({'username': props.username})
  }

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

    var request = http.request(options, (res) => {
      var str = '';
      res.on('data', (chunk) => {
        str += chunk;
      });
      res.on('end', () => {
        this.setState({tweetList: str})
      })
    })

    request.end(this.state.username);


    // fetch('http://localhost:8080/getTweets')
    //   .then((res) => {
    //     return res.text();
    //   }).then((body) => {
    //     console.log('body in fetch', body);
    //     this.setState({'tweetList': body})
    //   });
    // console.log(init);
    // fetch('http://localhost:8080/getTweets', init)
    //   .then((res) => {
    //     console.log('IN FETCH', res)
    //     return res.text();
    //   }).then((tweets) => {
    //     console.log('TWEETS', tweets.replace(/['"]+/g, ''));
    //     this.setState({tweetList: tweets.replace(/['"]+/g, '')})
    //   })
  }

  render() {
      {console.log('in TweetContainer', this.state.tweetList)}
    return (
      <Tweets tweetList={this.state.tweetList} />
    
    )

  }
}