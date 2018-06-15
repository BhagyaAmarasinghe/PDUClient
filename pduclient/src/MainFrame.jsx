import React, { Component } from 'react';
import  ReactDOM from 'react-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PatientContainer.css';
import PatientContainer from "./PatientContainer";
import ResourseContainer from "./ResourseContainer";





export default class mainFrame extends Component {


    render() {
        const style = {
            marginTop: "20px"
        };
        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title" align="center">Welcome To HIS</h1>
                </header>
                <p className="App-intro"></p>

                <Router>
                    <div align="center">

                        <h2 className={'menubar'}><Link to={'/PatientHandling'}>Patients</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/ResourceHandling'}>Resources</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/logout'}>LogOut</Link></h2>

                        <Route exact path='/PatientHandling' render={function(props){  return  <PatientContainer/>}}> </Route>
                        <Route exact path='/ResourceHandling' render={function(props){  return <ResourseContainer />}}> </Route>


                    </div>

                </Router>

            </div>

        );
    }
}

