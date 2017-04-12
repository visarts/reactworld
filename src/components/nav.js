import React from 'react';
import GatewayService from '../services/gatewayService';
import '../less/nav.less';

export default class Nav extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div styleName="reactworld_nav">
        <div>
          <a href="#" onClick={this.props.resetFruit}>Home</a>
          <a href="#" onClick={this.props.changeHeadline.bind(this, 'Here\'s the Fruit Headline and some Data:')}>Fruits</a>
          <a href="#" onClick={this.props.changeSpanColor.bind(this, 'bluetext')}>Vegetables</a>
          <a href="#">Legumes</a>
          <a href="#">Meats</a>
          { this.props.values && this.props.values.apples === 22 ? null : <a href="#">Grains</a> }
        </div>
      </div>
    );
  }
}
