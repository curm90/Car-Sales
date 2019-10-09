import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { shopReducer, vehicleReducer } from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(
  combineReducers({
    shop: shopReducer,
    vehicle: vehicleReducer
  })
);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
