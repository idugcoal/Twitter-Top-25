import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Landing from './components/landing';
import Tweet from './components/tweet';
import Test from './components/test'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Tweet} />
        <Route path="/tweet" component={Tweet} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
	router, 
  document.querySelector('.mount')
);
