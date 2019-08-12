import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>Hello from React!</div>,
    document.body.appendChild(document.createElement('div'))
  )
})