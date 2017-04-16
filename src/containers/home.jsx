import React from 'react';
import {fontstyle, background, borders, bindStyles} from '../services/vegworldStyleService';
import '../less/home.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName="reactworld_home">
        This is the home component <span>This is some colored text</span>
        <ul styleName="fruitsDisplay">
          {
            Object.keys(this.props.values.fruits).map(key => {
              return (
                <li>
                  <strong>The current value of <span className="label" styleName={key}>{key}</span>: </strong>{this.props.values.fruits[key]}
                </li>
              );
            })
          }
        </ul>
        {/*<div styleName="testtext" {...bindStyles(fontstyle, background, borders)}>Here's some text</div>*/}
        <div styleName="testtext" style={this.props.values.branding}>Here's some text</div>
      </div>
    );
  }
}
