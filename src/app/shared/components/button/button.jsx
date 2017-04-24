import React from 'react';
import buttonStyles from './button.less';
import {bindStyles} from 'Services/vegworldStyleService';

export default function Button (props) {

  const classes = props.classes ? props.classes : '';
  const styles = props.styles ? props.styles : '';

  if (props.isModal) {
    return (
      <button
        className={`btn btn-primary ${buttonStyles.prime} ${classes}`} {...bindStyles(styles)}
        data-toggle="modal" data-target="#rwModal" >
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        className={`btn btn-primary ${buttonStyles.prime} ${classes}`} {...bindStyles(styles)}>
        {props.children}
      </button>
    );
  }
}
