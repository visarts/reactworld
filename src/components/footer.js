import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        This is the footer component
        <ul className="fruitsInput">
          {
            Object.keys(this.props.values).map(key => {
              return (
                <li>
                  <strong>{key}: </strong>
                  <input type="text" value={this.props.values[key]} onChange={this.props.changeFruit.bind(this, key)} />
                </li>
              )
            })
          }
        </ul>
      </div>

    );
  }
}
