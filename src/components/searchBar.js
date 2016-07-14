import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Tweets from './tweets';
import GetTweets from './getTweets'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tweetList: [{'doug': 'hello'}, {'rong': 'hi'}, {'peter': 'hola'}, {'lukas': 'sup'}],
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  };

  handleKeyDown(event) {
    if(event.keyCode === 13) {
      //search twitter with this.state.value or event.target.value
      // console.log(this.state.value)
      this.getTweets().bind(this);
    }
  }

  getTweets() {
    // get tweets from server
    tweets = GetTweets(this.state.value);
    console.log('MOTHERFUCKIN TWEETS', tweets);
    // put tweets onto state
    this.setState({'tweetList': tweets});
  }

  render() {
    return (
      <span>
        <TextField 
          hintText="Enter a twitter handle"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
        <Tweets
          username={this.state.value}
          tweetList={this.state.tweetList}
        / >
      </span>
    )
  }
  
}