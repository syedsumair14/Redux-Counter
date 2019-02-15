import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {finalReducer} from './components/reducers'

const store = createStore(finalReducer);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.querySelector('#root'));