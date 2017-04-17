import React from 'react';
import styles from '../less/welcomeText.less';

export default function WelcomeText (props) {

  return (
    <div className={styles.welcome_text}>
      This is the home component <span>This is some colored text</span>
    </div>
  );
}
