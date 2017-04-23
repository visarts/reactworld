import React from 'react';
import Button from 'GlobalComponents/button/button';
import styles from './welcomeText.less';

export default function WelcomeText ({values}) {
  return (
    <div className={styles.welcomeText}>
      This is the home component
      <Button classes={styles.prime} styles={values.branding.fontStyles}>This is a Button</Button>
    </div>
  );
}
