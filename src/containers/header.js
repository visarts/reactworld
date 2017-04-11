import React from 'react';
import GatewayService from '../services/gatewayService';
import Nav from '../components/nav';
//import '../less/header.less';

export default class Header extends React.Component {
  constructor (props, gatewayService) {
    super (props);
    this.state = {
      stuff: ''
    }
    this.gatewayService = new GatewayService;
  }

  // or use componentWillMount to make the async call beforehand
  componentDidMount () {
    this.getData({ ID: 493489, portal: 'asdfkdj' });
  }

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
  render () {
    return (
      <div id="reactworld_header">
        <h1>This is the header component and here is the data:</h1>
        <p><span>{ this.state.newStuff }</span></p>
        <Nav values={this.props.values} />
      </div>
    );
  }
}
