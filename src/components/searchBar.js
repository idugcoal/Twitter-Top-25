import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class SearchBar extends Component {
  render() {
    return (
      <TextField defaultValue="Enter a twitter handle" />
    )
  }
  
}