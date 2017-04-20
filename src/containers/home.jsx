import React from 'react';
import TestBox from '../components/testBox';
import WelcomeText from '../components/welcomeText'
import styles from '../less/home.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fonts = this.props.values.branding.fontStyles;
    this.borders = this.props.values.branding.borderStyles;
    this.backgrounds = this.props.values.branding.backgroundStyles;
  }
  render() {
    return (
      <div className={styles.reactworld_home}>
        <WelcomeText {...this.props} />
        <ul className={styles.fruitsDisplay}>
          {
            Object.keys(this.props.values.fruits).map(key => {
              return (
                <li>
                  <strong>
                    The current value of <span className={styles[key] + ' label'}>{key}</span>:
                  </strong> {this.props.values.fruits[key]}
                </li>
              );
            })
          }
        </ul>
        <TestBox fonts={this.fonts} borders={this.borders} backgrounds={this.backgrounds} />
      </div>
    );
  }
}
