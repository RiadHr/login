import React,{Component} from 'react';
import './App.css';
import Login from './Component/Login';
import Signin from "./Component/Signin";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App(){
    return (
      <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/Signin' component={Signin} />
          </Switch>
      </Router>
    );
}

export default App;
