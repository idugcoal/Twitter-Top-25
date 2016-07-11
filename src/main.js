import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<Hello />,
    document.getElementById('mount')
  );
});
