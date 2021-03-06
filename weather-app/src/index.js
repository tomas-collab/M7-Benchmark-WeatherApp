import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import configureStore from './store/index.js'
ReactDOM.render(
     <Provider store={configureStore}>
       <App />
     </Provider>
  ,
  document.getElementById('root')
);

