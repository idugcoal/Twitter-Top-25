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
      //search twitter with this.state.value or event.target.value
      // console.log(this.state.value)
      if(event.target.value.length > 1) this.setState({showTweetContainer: true});
      else this.setState({showTweetContainer: false});
      console.log('Enter key pressed');
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