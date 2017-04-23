import React from 'react';
import {bindStyles} from '../services/vegworldStyleService';
import styles from '../less/testBox.less';

export default function TestBox ({backgrounds, fonts, borders}) {
  return (
    <div className={styles.testtext} {...bindStyles(backgrounds, fonts, borders)} >
      Here's some text
    </div>
  )
}
