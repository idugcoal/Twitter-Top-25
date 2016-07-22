import React, { Component } from 'react';
import Tweet from './tweet';

export default class Tweets extends Component {
  
  constructor(props) {
    super(props)
  }

  renderList(tweets) {
    return (
      tweets.map((tweet, index) => {
        return <div key={index}> <Tweet tweet={tweet} /> </div>
      })
    )
  }
  
  render() {
    return <span> {this.renderList(this.props.tweetList)} </span>
  }
}