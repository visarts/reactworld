import React from 'react';
import { Button } from 'react-bootstrap';
//import '../less/footer.less';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="reactworld_footer">
        This is the footer component
        <ul className="fruitsInput">
          {
            Object.keys(this.props.values).map(key => {
              return (
                <li>
                  <strong>{key}: </strong>
                  <input type="text" size="4" value={this.props.values[key]} onChange={this.props.changeFruit.bind(this, key)} />
                </li>
              )
            })
          }
          <li>
            <Button bsStyle="success" onClick={this.props.resetFruit.bind(this)}>Reset</Button>
          </li>
        </ul>
      </div>

    );
  }
}
