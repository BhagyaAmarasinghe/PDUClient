import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PatientContainer.css';
import PatientContainer from "./PatientContainer";
import ResourseContainer from "./ResourseContainer";
import DrugContainer from './DrugContainer';
import TreatmentContainer from "./TreatmentContainer";
import EmergencyContainer from './EmergencyContainer';




export default class mainFrame extends Component {


    render() {
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
                        <h2 className={'menubar'}><Link to={'/DrugHandling'}>Drugs</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/TreatmentHandling'}>Treatments</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/EmergencyHandling'}>Emergency List</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/logout'}>LogOut</Link></h2>

                        <Route exact path='/PatientHandling' render={function(props){  return  <PatientContainer/>}}> </Route>
                        <Route exact path='/ResourceHandling' render={function(props){  return <ResourseContainer />}}> </Route>
                        <Route exact path='/DrugHandling' render={function(props){  return <DrugContainer />}}> </Route>
                        <Route exact path='/TreatmentHandling' render={function(props){  return <TreatmentContainer />}}> </Route>
                        <Route exact path='/EmergencyHandling' render={function(props){  return <EmergencyContainer />}}> </Route>


                    </div>

                </Router>

            </div>

        );
    }
}

