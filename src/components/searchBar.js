import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class SearchBar extends Component {
  render() {
    return (
      <TextField hintText="Enter a twitter handle" />
    )
  }
  
}