import React, { Component } from 'react';
import Header from './header';
import Tweets from './tweets';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  // getInitialState() {
  //   return {
  //     username: '',
  //     showTweets: false
  //   }
  // }

  constructor(props) {
    super(props);
    console.log('in app constructor', props, this.state)
  }

  getUsername(username) {
    console.log('in app', username);
    this.setState({username: username})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <span>
          <Header id="container" onSearch={this.getUsername} />
          <Tweets id="container" username={this.props.username} />
        </span>
      </MuiThemeProvider>
    );
  }
}