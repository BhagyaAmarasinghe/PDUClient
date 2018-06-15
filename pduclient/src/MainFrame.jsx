import React, { Component } from 'react';
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PatientContainer.css';
import PatientContainer from "./PatientContainer";
import ResourseContainer from "./ResourseContainer";
import DrugContainer from './DrugContainer';
import TreatmentContainer from "./TreatmentContainer";
import EmergencyContainer from './EmergencyContainer';
<<<<<<< HEAD
import BillContainer from "./BillContainer";
=======
import LogOut from "./LogOut";
>>>>>>> 8034cd0d20331665e25dd47d0d6c564088d94c45





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
                    <div align="center">
                        <div className="row" style={style}>

                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <h2 className={'menubar btn-primary btn-block btn-dark'} ><Link to={'/PatientHandling'}>Patients</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <h2 className={'menubar btn-primary btn-block btn-dark'}><Link to={'/ResourceHandling'}>Resources</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <h2 className={'menubar btn-primary btn-block btn-dark'}><Link to={'/DrugHandling'}>Drugs</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <h2 className={'menubar btn-primary btn-block btn-dark'}><Link to={'/TreatmentHandling'}>Treatments</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <h2 className={'menubar btn-primary btn-block btn-dark'}><Link to={'/EmergencyHandling'}>Emergency List</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <h2 className={'menubar btn-primary btn-block btn-dark'}><Link to={'/Bill'}>Generate Bill</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <h2 className={'menubar btn-primary btn-block btn-dark'}><Link to={'/logout'}>LogOut</Link></h2>
                            </div>
                        </div>

                        <Route exact path='/PatientHandling' render={function(props){  return  <PatientContainer/>}}> </Route>
                        <Route exact path='/ResourceHandling' render={function(props){  return <ResourseContainer />}}> </Route>
                        <Route exact path='/DrugHandling' render={function(props){  return <DrugContainer />}}> </Route>
                        <Route exact path='/TreatmentHandling' render={function(props){  return <TreatmentContainer />}}> </Route>
                        <Route exact path='/EmergencyHandling' render={function(props){  return <EmergencyContainer />}}> </Route>
<<<<<<< HEAD
                        <Route exact path='/Bill' render={function(props){  return <BillContainer/>}}> </Route>
=======
                        <Route exact path='/logout' render={function(props){  return <LogOut/>}}> </Route>
>>>>>>> 8034cd0d20331665e25dd47d0d6c564088d94c45


                    </div>

                </Router>

            </div>

        );
    }
}

