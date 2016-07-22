import React, { Component } from 'react';
import SearchBar from './searchBar'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showTweetContainer: false,      
    };
  }

  handleSearch(username) {
    this.props.onSearch(username);
  }

  render() {
    return (
      <span>
        <h1>Welcome to Twitter Top 25!</h1>
        <SearchBar onSearchEnter={this.handleSearch.bind(this)} />
      </span>
    )
  }
}