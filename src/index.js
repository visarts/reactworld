//just importing something with the file name imports everything from the file
import './less/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));