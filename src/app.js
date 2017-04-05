//just importing something with the file name imports everything from the file
import './less/main.less';
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
      prop1: 'prop 1',
      prop2: 'prop 2'
    };
  }

  render() {
    return (
      <div className="mainApp">
        <Header pdf={this.state} dolomite="tasdf" />
        <Home />
        <Footer />
      </div>
    );
  }


}

ReactDOM.render(<App />, document.getElementById('app'));
