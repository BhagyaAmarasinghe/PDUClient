import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Form from './Form.js';
import Doctor from './Doctor.js';
import Material from './Material.js';
import Nurse from './Nurse.js';
import Attendant from './Attendant.js';



export default class ResourseContainer extends Component{

    render() {
        return (
            <div className="App">


                {<Router>
                    <div>

                        <button> <Link to='/addMachine'>Add Machine</Link></button>&nbsp;&nbsp;
                        <Route exact path='/addMachine' render={function(props){  return <Form />}}></Route>

                        <button> <Link to='/assignDoctor'>Assign Doctor</Link></button>&nbsp;&nbsp;
                        <Route exact path='/assignDoctor' render={function(props){  return <Doctor />}}></Route>

                        <button> <Link to='/Materials'>Materials</Link></button>&nbsp;&nbsp;
                        <Route exact path='/Materials' render={function(props){  return <Material />}}></Route>

                        <button> <Link to='/Nurse'>Nurses</Link></button>&nbsp;&nbsp;
                        <Route exact path='/Nurse' render={function(props){  return <Nurse />}}></Route>

                        <button> <Link to='/Attendant'>Attendants</Link></button>&nbsp;&nbsp;
                        <Route exact path='/Attendant' render={function(props){  return <Attendant />}}></Route>



                    </div>

                </Router>}
            </div>
        );
    }
}