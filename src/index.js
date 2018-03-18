import React from 'react';
import ReactDOM from 'react-dom';
import './css/base.css'; //add accordingly
import './css/flexbox.css'; //add accordingly
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
