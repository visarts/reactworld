import React from 'react';
import GatewayService from 'Services/gatewayService';
import Nav from 'app/containers/nav/nav';
import styles from './header.less';

export default class Header extends React.Component {
  constructor (props, gatewayService) {
    super (props);
    this.state = {
      stuff: '',
      headline: 'This is the header component and here is the data:'
    }
    this.gatewayService = new GatewayService;
    this.changeHeadline = this.changeHeadline.bind(this);
    this.changeSpanColor = this.changeSpanColor.bind(this);
  }

  /** lifecycle methods **/
  // or use componentWillMount to make the async call beforehand
  componentDidMount () {
    this.getData({ ID: 493489, portal: 'asdfkdj' });
  }

  /** custom methods **/
  getData (params) {
    this.gatewayService.get(params).then(results => {
      let newState = this.state;
      if (results.body) {
        newState.newStuff = results.body;
      } else {
        newState.newStuff = results;
      }
      this.setState(newState);
    });
  }

  changeHeadline (txt) {
    if (txt) {
      this.setState({headline: txt})
    }
  }

  changeSpanColor (spanClass) {
    if (spanClass) {
      this.setState({spanClass});
    }
  }

  /** render method **/
  render () {
    return (
      <div className={styles.reactworldHeader}>
        <h1>{this.state.headline}</h1>
        <p><span className={ styles.greentext }>{ this.state.newStuff }</span></p>
        <Nav
          values={this.props.values.fruits}
          resetFruit={this.props.resetFruit}
          changeHeadline={this.changeHeadline}
          changeSpanColor={this.changeSpanColor}  />
      </div>
    );
  }
}
