import React, { Component } from 'react';
import Tweet from './tweet';

export default class Tweets extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span>
        {this.props.tweets.map((tweet, index) => {
          return <span key={index}> <Tweet tweet={tweet} /> <br /> </span>
        })}
      </span>
    )
  }
}