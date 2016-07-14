import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <span>
        <Header />
        hi i'm in app
        <br />
        {this.props.children}
      </span>
    );
  }
}