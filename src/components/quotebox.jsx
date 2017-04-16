import React from 'react';
import '../less/quotebox.less';

export default class Quotebox extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div styleName="reactworld_quotebox">
        <h3>"Whose woods these are, I think I know..."</h3>
      </div>
    );
  }
}
