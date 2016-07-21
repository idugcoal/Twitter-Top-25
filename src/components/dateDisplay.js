import React, { Component } from 'react';

export default class DateDisplay extends Component {

  constructor(props) {
    super(props);
  }

  parseTwitterDate(text) {
    var newtext = text.replace(/(\+\S+) (.*)/, '$2 $1') 
    var date = new Date(Date.parse(text)).toLocaleDateString();
    var time = new Date(Date.parse(text)).toLocaleTimeString();
    return date +' • ' + time;
  }

  render() {
    return (
      <span style={{
        color: 'green',
        float: 'right',
        padding: '16px'}}
      >
        {this.parseTwitterDate(this.props.date)}
      </span>
    )
  }

}