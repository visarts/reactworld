import React from 'react';
import ReactDOM from 'react-dom';

export default function init() {
  var header = <h1>This is the real <span>headline</span></h1>;
  var htmlHeader = document.getElementById('header');
  ReactDOM.render(header, htmlHeader);
}


//use the 'default' keyword when you want the importer to have a
//default object/function to use if they don't choose something specific
