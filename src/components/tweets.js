import React, { Component } from 'react';
import Tweet from './tweet';

export default class Tweets extends Component {
  constructor(props) {
    super(props)
    console.log('props.tweetList in Tweets', props.tweetList)
    this.state = {
      'tweetList': this.props.tweetList
    }
  }

  render() {
    return (
      <span>
        {this.state.tweetList.map((tweet, index) => {
          return <span> <Tweet key={index} tweetInfo={tweet} /> <br /> </span>
        })}
      </span>
    )
  }
}