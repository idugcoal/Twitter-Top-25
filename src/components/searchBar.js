import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import TweetContainer from './tweetContainer';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showTweetContainer: false,      
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  };

  handleKeyDown(event) {
    if(event.keyCode === 13) {
      if(event.target.value.length > 1) this.setState({showTweetContainer: true});
      else this.setState({showTweetContainer: false});
      this.setState({value: event.target.value})
    }
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
        { this.state.showTweetContainer ? <TweetContainer username={this.state.value} /> : null }
      </span>
    )
  }
  
}