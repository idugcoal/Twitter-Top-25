import React, { Component } from 'react';
import Header from './header';
import Tweets from './tweets';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const axios = require('axios');


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {showTweets: false, username: '', tweetList: []}

    console.log('in app constructor', props, this.state)
  }

  getUsername(username) {
    console.log('in app', username, this.state, this.props);
    var reqConfig = {
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
        'Content-Type': 'text/html'
      }
    }

    this.serverRequest = 
      axios.post('http://localhost:8080/getTweets', {username: username}, reqConfig)
        .then((result) => {
          this.setState({tweetList: result.data})
          console.log('in tweets, result.data', result.data)
          console.log('in tweets,this.state', this.state)

         });  
  }
  

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <span className="container">
          <Header onSearch={this.getUsername.bind(this)} />
          <Tweets tweetList={this.state.tweetList} />
        </span>
      </MuiThemeProvider>
    );
  }
}