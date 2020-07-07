import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import {increment, decrement } from './Actions';
import Body from './Components/Body';

import store from './Store'


store.subscribe( () => {
  console.log(store.getState());
} );
//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

ReactDOM.render(
  <Provider store={store}>
    <App />
    
    <Body />
    </Provider>,
  document.getElementById('root')
);

