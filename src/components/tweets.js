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
    {console.log('in Tweets:', this.state.tweetList)}

    return (
      <span>
        {this.props.tweetContent.map((tweet, index) => {
          return <span> <Tweet key={index} tweetInfo={tweet} /> <br /> </span>
        })}
      </span>
    )
  }
}