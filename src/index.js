import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'
import CounterContainer from './containers/Counter'
import { counterApp } from './reducers/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css';

// Store
const store = createStore(counterApp);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
