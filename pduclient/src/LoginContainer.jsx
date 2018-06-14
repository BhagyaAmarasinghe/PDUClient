import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './AddUsers';

export default class LoginContainer extends Component{

    render() {
        return (
            <div className="App">
                <header className="AppContainer-header"></header>
                <p className="AppContainer-intro"></p>

                {<Router>
                    <div>

                        <h2 className={'login'}><Link to={'/'}>Login</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'login'}><Link to={'/addUser'}>Register</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Route exact path='/addUser' render={function(props){  return <Register />}}> </Route>
                        <Route exact path='/' render={function(props){  return <Login />}}> </Route>


                    </div>

                </Router>}
            </div>
        );
    }
}