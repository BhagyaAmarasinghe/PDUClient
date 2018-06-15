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
                        <div>
                            <div>
                                <Link to='/addMachine'>Add Machine</Link>&nbsp;&nbsp;
                            </div>
                            <div>
                                <Link to='/assignDoctor'>Assign Doctor</Link>&nbsp;&nbsp;
                            </div>
                            <div>
                                <Link to='/Materials'>Materials</Link>&nbsp;&nbsp;
                            </div>
                            <div>
                                <Link to='/Nurse'>Nurses</Link>&nbsp;&nbsp;
                            </div>
                            <div>
                                <Link to='/Attendant'>Attendants</Link>&nbsp;&nbsp;
                            </div>
                            <div>
                                <Link to='/Diagnosis'>Diagnosis</Link>&nbsp;&nbsp;
                            </div>

                        </div>


                        <Route exact path='/addMachine' render={function(props){  return <Form />}}></Route>


                        <Route exact path='/assignDoctor' render={function(props){  return <Doctor />}}></Route>


                        <Route exact path='/Materials' render={function(props){  return <Material />}}></Route>


                        <Route exact path='/Nurse' render={function(props){  return <Nurse />}}></Route>


                        <Route exact path='/Attendant' render={function(props){  return <Attendant />}}></Route>


                        <Route exact path='/Diagnosis' render={function(props){  return <Diagnosis />}}></Route>



                    </div>

                </Router>}
            </div>
        );
    }
}