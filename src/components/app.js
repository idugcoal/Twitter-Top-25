import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <span>
        <Header />
        {this.props.children}
      </span>
    );
  }
}