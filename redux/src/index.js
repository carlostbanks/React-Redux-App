import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { dogImageReducer } from './reducers/dogImageReducer';
import './index.css';

const logger = ({ getState }) => next => action => {
    console.log("Dispatching this type of action:", action);
    next(action);
  };

let store = createStore(dogImageReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
