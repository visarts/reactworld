import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="content">
        This is the home component <span>This is some colored text</span>
        <ul className="fruitsDisplay">
          {
            Object.keys(this.props.values).map(key => {
              return (
                <li>
                  <strong>The current value of <span className={'label' + ' ' + key}>{key}</span>: </strong>{this.props.values[key]}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
