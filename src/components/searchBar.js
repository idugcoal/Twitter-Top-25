import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import TweetContainer from './tweetContainer';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",      
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
     console.log('Enter key pressed');
    }
  }

  render() {
     {console.log('in searchBar render, state:', this.state.value)}
    return (

      <span>
        <TextField 
          hintText="Enter a twitter handle"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
        <TweetContainer username={this.state.value}/>
      </span>
    )
  }
  
}