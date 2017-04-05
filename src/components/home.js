import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="content">This is the home component <span>This is some colored text</span></div>
    );
  }
}
