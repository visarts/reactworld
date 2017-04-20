import React from 'react';
import styles from '../less/footer.less';
import { Button } from 'react-bootstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.reactworldFooter}>
        This is the footer component
        <ul className={styles.fruitsInput}>
          {
            Object.keys(this.props.values.fruits).map(key => {
              return (
                <li>
                  <strong>{key}: </strong>
                  <input type="text" size="4"
                    value={this.props.values.fruits[key]}
                    onChange={this.props.changeFruit.bind(this, key)} />
                </li>
              );
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
