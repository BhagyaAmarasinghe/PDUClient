import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import Doctor from './Doctor.js'
import Material from './Material.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Resource Management</h1>
        </header>
        <p className="App-intro"></p>
         <Router>
           <div>

             <button> <Link to='/addMachine'>Add Machine</Link></button>&nbsp;&nbsp;
             <Route exact path='/addMachine' render={function(props){  return <Form />}}></Route>

          <button> <Link to='/assignDoctor'>Assign Doctor</Link></button>&nbsp;&nbsp;
          <Route exact path='/assignDoctor' render={function(props){  return <Doctor />}}></Route>

          <button> <Link to='/Materials'>Materials</Link></button>&nbsp;&nbsp;
      <Route exact path='/Materials' render={function(props){  return <Material />}}></Route>




          </div>
          </Router>

      </div>
    );
  }
}

export default App;
