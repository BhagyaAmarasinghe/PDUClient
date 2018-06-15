import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PatientContainer.css';
import PatientContainer from "./PatientContainer";
import ResourseContainer from "./ResourseContainer";
import DrugContainer from './DrugContainer';
import TreatmentContainer from "./TreatmentContainer";
import EmergencyContainer from './EmergencyContainer';



import BillContainer from "./BillContainer";

import LogOut from "./LogOut";

export default class mainFrame extends Component {


    render() {

        const style = {
            marginTop: "20px",
            border_radius: "4px"
        };
        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title" align="center">Welcome To HIS</h1>
                </header>
                <p className="App-intro"></p>

                <Router>
                    <div align="center" className={'menubarmain'}>



                                <h2 className={'menubar'} ><Link to={'/PatientHandling'}>Patients</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <h2 className={'menubar'}><Link to={'/ResourceHandling'}>Resources</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <h2 className={'menubar '}><Link to={'/DrugHandling'}>Drugs</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <h2 className={'menubar'}><Link to={'/TreatmentHandling'}>Treatments</Link></h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <h2 className={'menubar'}><Link to={'/EmergencyHandling'}>Emergency List</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <h2 className={'menubar '}><Link to={'/Bill'}>Generate Bill</Link></h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                <h2 className={'menubar'}><Link to={'/logout'}>LogOut</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



                        <Route exact path='/PatientHandling' render={function(props){  return  <PatientContainer/>}}> </Route>
                        <Route exact path='/ResourceHandling' render={function(props){  return <ResourseContainer />}}> </Route>
                        <Route exact path='/DrugHandling' render={function(props){  return <DrugContainer />}}> </Route>
                        <Route exact path='/TreatmentHandling' render={function(props){  return <TreatmentContainer />}}> </Route>
                        <Route exact path='/EmergencyHandling' render={function(props){  return <EmergencyContainer />}}> </Route>

                        <Route exact path='/Bill' render={function(props){  return <BillContainer/>}}> </Route>

                        <Route exact path='/logout' render={function(props){  return <LogOut/>}}> </Route>



                    </div>

                </Router>

            </div>

        );
    }
}

