//just importing something with the file name imports everything from the file
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer'
//use 'import * as varName from ...' if the exporting file has multiple export statements
//then you'd access each exported object by referencing varName.objectName

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruits: {
        bananas: 10,
        oranges: 5,
        grapes: 11,
        apples: 8
      }
    };
    // by binding the parent function in the constructor,
    //   the child components can call it when passed by props
    this.changeFruit = this.changeFruit.bind(this);
  }

  // will change a specific fruits object key by the value of the provided event
  changeFruit (key, e) {
    let fruitValue = parseInt(e.target.value);
    if (Number.isInteger(fruitValue)) {
      this.setState({ fruits: Object.assign(this.state.fruits, { [key]: fruitValue })});
    }
  }

  render() {
    return (
      <div className="mainApp">
        <Header />
        <Home values={this.state.fruits} />
        <Footer values={this.state.fruits} changeFruit={this.changeFruit} />
      </div>
    );
  }
}
