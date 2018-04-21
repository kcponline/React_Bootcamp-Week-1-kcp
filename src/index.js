import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'; // add to use semantic-ui-css
// import './css/base.css'; // add accordingly but remove if using semantic
// import './css/flexbox.css'; // add accordingly but remove if using semantic
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

// with semantic-ui, styling doesn't need to be defined
// in css folder & files. it's like bootstrap.