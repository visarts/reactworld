//just importing something with the file name imports everything from the file
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/header';
import Home from './containers/home';
import Footer from './containers/footer';
import Quotebox from './components/quotebox';
import ConfigService from './services/configService';

//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
//use 'import * as varName from ...' if the exporting file has multiple export statements
//then you'd access each exported object by referencing varName.objectName

export default class App extends React.Component {
  constructor() {
    super();

    // we'll have to make a copy of the object to retain for the reset function
    this.state = this.getState();
    // by binding the parent function in the constructor,
    //   the child components can call it when passed by props
    this.changeFruit = this.changeFruit.bind(this);
    this.resetFruit = this.resetFruit.bind(this);
    this.configService = new ConfigService;
  }

  renderApp () {
    ReactDOM.render(<Header values={this.state} resetFruit={this.resetFruit} />, document.getElementById('header'));
    ReactDOM.render(<Quotebox />, document.getElementById('quotebox'));
    ReactDOM.render(<Home values={this.state} />, document.getElementById('home'));
    ReactDOM.render(<Footer values={this.state} changeFruit={this.changeFruit} resetFruit={this.resetFruit} />, document.getElementById('footer'));
  }
  // 'componentDidUpdate' doesn't work here
  // render the initial load
  componentDidMount () {
    this.configService.get().then((results) => {
      const branding = {
        fontStyles: {
          fontFamily: results.branding.fontstyle,
          fontSize: results.branding.fontsize,
          color: results.branding.fontcol,
          textShadow: results.branding.textsh
        },
        backgroundStyles: {
          background: results.branding.backgroundcol
        },
        borderStyles: {
          borderColor: results.branding.bcolor,
          borderWidth: results.branding.bwidth,
          borderStyle: results.branding.bstyle
        }
      }
      this.setState({ branding });
    });
  }

  // render when the state changes
  componentDidUpdate () {
    this.renderApp();
  }

  getState () {
    return {
      fruits: {
        bananas: 10,
        oranges: 5,
        grapes: 11,
        apples: 8
      }
    };
  }
  // will change a specific fruits object key by the value of the provided event
  changeFruit (key, e) {
    let fruitValue = parseInt(e.target.value);
    if (Number.isInteger(fruitValue)) {
      this.setState({ fruits: Object.assign(this.state.fruits, { [key]: fruitValue })});
    }
  }

  resetFruit () {
    this.setState(this.getState());
  }

  render() {
    return false;
  }
}
