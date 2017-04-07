import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="content">
        This is the home component <span>This is some colored text</span>
        <ul>{ this.props.values.list.map(val => { return <li>{ val }</li> }) }</ul>
      </div>
    );
  }
}
