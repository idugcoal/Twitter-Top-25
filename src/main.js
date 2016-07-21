import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Tweet from './components/tweet';
import Tweets from './components/tweets';
import Header from './components/header'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Header} />
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
	router, 
  document.querySelector('.mount')
);
