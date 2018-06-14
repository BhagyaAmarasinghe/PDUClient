import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './Login';
import AddPatients from './AddPatients';
import GetAllPatients from './getAllPatients';
import DeletePatients from './DeletePatient';
import UpdatePatients from './UpdatePatients'
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header className="Home-header">

                    <h1 className="Home-title">Welcome To HIS</h1>
                </header>
                <p className="Home-intro"></p>

                <Router>
                    <div>

                        <h2 className={'addPatients'}><Link to={'/addPatients'}>Add Patients</Link></h2>
                        <h2 className={'getallPatients'}><Link to={'/allPatients'}>Get All Patients</Link></h2>
                        <h2 className={'deletePatients'}><Link to={'/deletePatients'}>Delete Patients</Link></h2>
                        <h2 className={'updatePatients'}><Link to={'/updatePatients'}>Update Patients</Link></h2>

                        <h2 className={'logout'}><Link to={'/'}>LogOut</Link></h2>


                        <Route exact path='/addPatients' render={function(props){  return <AddPatients />}}> </Route>
                        <Route exact path='/allPatients' render={function(props){  return <GetAllPatients />}}> </Route>
                        <Route exact path='/deletePatients' render={function(props){  return <DeletePatients />}}> </Route>
                        <Route exact path='/updatePatients' render={function(props){  return <UpdatePatients />}}> </Route>



                        <Route exact path='/' render={function(props){  return <Login />}}> </Route>


                    </div>

                </Router>
            </div>
        );
    }
}

