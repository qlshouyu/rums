import React from 'react';
// import { Button } from 'antd';
// import logo from './logo.svg';
import { Router, Route,Switch } from 'react-router'
import { createBrowserHistory } from "history";
import Login from './pages/login';
import Home from './components/home';


import './App.css';
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
