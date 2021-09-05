import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store';
import './index.css';

// import reducers from './reducers/index'
import reportWebVitals from './reportWebVitals';
import App from './App'


// import { Router, Route, Switch } from 'react-router'
// import { createBrowserHistory } from "history";
// import Login from './pages/login';
// import Home from './components/home';
// let store = createStore(reducers)
// const history = createBrowserHistory();
ReactDOM.render(
  // <React.StrictMode>
    
  // </React.StrictMode>,
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
