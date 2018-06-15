import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Form from './Form.js';
import Doctor from './Doctor.js';
import Material from './Material.js';
import Nurse from './Nurse.js';
import Attendant from './Attendant.js';
import Diagnosis from './Diagnosis';



export default class ResourseContainer extends Component{

    render() {
        return (
            <div className="App">


                {<Router>
                    <div>

                         <Link to='/addMachine'>Add Machine</Link>&nbsp;&nbsp;
                        <Route exact path='/addMachine' render={function(props){  return <Form />}}></Route>

                         <Link to='/assignDoctor'>Assign Doctor</Link>&nbsp;&nbsp;
                        <Route exact path='/assignDoctor' render={function(props){  return <Doctor />}}></Route>

                         <Link to='/Materials'>Materials</Link>&nbsp;&nbsp;
                        <Route exact path='/Materials' render={function(props){  return <Material />}}></Route>

                        <Link to='/Nurse'>Nurses</Link>&nbsp;&nbsp;
                        <Route exact path='/Nurse' render={function(props){  return <Nurse />}}></Route>

                         <Link to='/Attendant'>Attendants</Link>&nbsp;&nbsp;
                        <Route exact path='/Attendant' render={function(props){  return <Attendant />}}></Route>

                         <Link to='/Diagnosis'>Diagnosis</Link>&nbsp;&nbsp;
                        <Route exact path='/Diagnosis' render={function(props){  return <Diagnosis />}}></Route>



                    </div>

                </Router>}
            </div>
        );
    }
}