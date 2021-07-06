import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore,applyMiddleware} from "redux";
import rootReducer from './reducer'
import thunk from 'redux-thunk'
 
const store=createStore(rootReducer,applyMiddleware(thunk));
console.log("before state="+" ",store.getState());
export const storeContext=createContext()



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
       <App/>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);


