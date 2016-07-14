import React, { Component } from 'react';
import SearchBar from './searchBar'

export default class Header extends Component {
  render() {
    return (
      <span id="container">
        <h1>Welcome to Twitter Top 25!</h1>
        <SearchBar />
      </span>
    )
  }
}