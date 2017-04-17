import React from 'react';
import {bindStyles} from '../services/vegworldStyleService';
import styles from '../less/testBox.less';

export default function TestBox (props) {

  return (
    <div className={styles.testtext} {...bindStyles(styles.testtext, props.backgrounds, props.fonts, props.borders)} >
      Here's some text
    </div>
  )
}
