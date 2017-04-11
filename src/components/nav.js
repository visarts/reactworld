import React from 'react';
import GatewayService from '../services/gatewayService';
//import '../less/nav.less';

export default class Nav extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div id="reactworld_nav">
        <div id="navbar">
          <a href="#">Home</a>
          <a href="#">Fruits</a>
          <a href="#">Vegetables</a>
          <a href="#">Legumes</a>
          <a href="#">Meats</a>
          { this.props.values && this.props.values.apples === 22 ? null : <a href="#">Grains</a> }
        </div>
      </div>
    );
  }
}
