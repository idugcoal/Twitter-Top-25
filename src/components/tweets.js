import React, { Component } from 'react';
import Tweet from './tweet';

export default class Tweets extends Component {
  constructor(props) {
    super(props)
    // console.log('props in Tweets:', this.props)
    // this.state = {
    //   'tweetList': this.props.tweetList
    // }
  }

  render() {
    {console.log('in Tweets:', this.props.tweets)}

    return (
      <span>
        {this.props.tweets.map((tweet, index) => {
          return <span key={index}> <Tweet tweet={tweet} /> <br /> </span>
        })}
      </span>
    )
  }
}