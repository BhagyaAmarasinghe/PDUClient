import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './PatientContainer.css';
import EmergencyList from  './EmergencyList';



export default class EmergencyContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>
                    <div align="center">

                        <div className="col">
                            <Link className="link" to="/emergencyList">Emergency Call List</Link>
                        </div>

                        <Route path="/emergencyList" render={props =>{
                            return<EmergencyList/>
                        }}/>
                    </div>


                </Router>

            </div>

        );
    }
}

