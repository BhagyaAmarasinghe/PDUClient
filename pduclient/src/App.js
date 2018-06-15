import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginContainer from './LoginContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Progressive Care Unit</h1>
        </header>
        <p className="App-intro"></p>
         <Router>
           <div>

               <LoginContainer/>

          </div>
          </Router>

      </div>
    );
  }
}

export default App;
