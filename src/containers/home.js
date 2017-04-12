import React from 'react';
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
            Object.keys(this.props.values).map(key => {
              return (
                <li>
                  <strong>The current value of <span className="label" styleName={key}>{key}</span>: </strong>{this.props.values[key]}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
