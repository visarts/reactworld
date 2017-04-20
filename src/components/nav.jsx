import React from 'react';
import styles from '../less/nav.less';

export default function Nav (props) {

  return (
    <div className={styles.reactworldNav}>
      <div>
        <a href="#" onClick={props.resetFruit}>Home</a>
        <a href="#" onClick={props.changeHeadline.bind(this, 'Here\'s the Fruit Headline and some Data:')}>Fruits</a>
        <a href="#" onClick={props.changeSpanColor.bind(this, 'bluetext')}>Vegetables</a>
        <a href="#">Legumes</a>
        <a href="#">Meats</a>
        { props.values && props.values.apples === 22 ? null : <a href="#">Grains</a> }
      </div>
    </div>
  );
}
