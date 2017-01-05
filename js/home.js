import React from 'react';
import ReactDOM from 'react-dom';
//here we're taking advantage of the html-loader in webpack to import
//html as a variable -- can be named anything
//import Template from '../templates/home.html';

export default function init() {
  var contentBody = document.getElementById('content');
  var template = (
    <ul>
      <li>This is the first item</li>
      <li>This is the second item</li>
      <li><span>This is the third item</span></li>
      <li>This is the fourth item</li>
      <li>This is the fifth item</li>
    </ul>
  );
  ReactDOM.render(template, contentBody);
}
