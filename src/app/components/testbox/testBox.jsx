import React from 'react';
import {bindStyles} from 'Services/vegworldStyleService';
import styles from './testBox.less';

export default function TestBox ({backgrounds, fonts, borders}) {
  return (
    <div className={styles.testtext} {...bindStyles(backgrounds, fonts, borders)} >
      Here's some text
    </div>
  )
}
