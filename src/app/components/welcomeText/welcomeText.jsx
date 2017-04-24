import React from 'react';
import Button from 'GlobalComponents/button/button';
import Modal from 'app/shared/components/modal/modal';
import styles from './welcomeText.less';

export default function WelcomeText ({values}) {
  return (
    <div className={styles.welcomeText}>
      This is the home component
      <Button classes={styles.prime} styles={values.branding.fontStyles} isModal={true}>This is a Button</Button>
      <Modal>
      </Modal>
    </div>
  );
}
