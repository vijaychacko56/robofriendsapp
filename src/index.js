import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import {searchFieldReducer, getRobotsReducer} from './reducers';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({searchFieldReducer,getRobotsReducer})

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider> , document.getElementById('root'));
	registerServiceWorker();
