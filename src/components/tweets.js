import React, { Component } from 'react';
import Tweet from './tweet';

export default class Tweets extends Component {
  constructor(props) {
    super(props)
    // console.log('props in Tweets:', this.props)
    this.state = {
      'tweetList': this.props.tweetList
    }
    console.log('state in Tweets:', this.state)

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