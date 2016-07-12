import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';
import Tweet from './components/tweet';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<Hello />, 
    document.getElementById('mount')
  );
});
