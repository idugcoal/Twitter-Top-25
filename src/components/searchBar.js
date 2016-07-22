import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

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
      if(event.target.value.length > 1) this.props.onSearchEnter(event.target.value);
      this.setState({value: event.target.value})
    }
  }

  render() {
    return (
      <span className="searchBar">
        <TextField 
          hintText={"Enter a twitter handle"}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
      </span>
    )
  }
  
}