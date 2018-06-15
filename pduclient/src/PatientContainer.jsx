import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AddPatients from './AddPatients';
import GetAllPatients from './getAllPatients';
import DeletePatients from './DeletePatient';
import UpdatePatients from './UpdatePatients'




export default class PatientContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>
                    <div align="center">

                        <h2 className={'menubar'}><Link to={'/addPatients'}>Add Patients</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/allPatients'}>Get All Patients</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/deletePatients'}>Delete Patients</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className={'menubar'}><Link to={'/updatePatients'}>Update Patients</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




                        <Route exact path='/addPatients' render={function(props){  return <AddPatients />}}> </Route>
                        <Route exact path='/allPatients' render={function(props){  return <GetAllPatients />}}> </Route>
                        <Route exact path='/deletePatients' render={function(props){  return <DeletePatients />}}> </Route>
                        <Route exact path='/updatePatients' render={function(props){  return <UpdatePatients />}}> </Route>


                    </div>

                </Router>

            </div>

        );
    }
}

