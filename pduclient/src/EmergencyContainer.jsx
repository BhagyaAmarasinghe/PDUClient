import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './PatientContainer.css';



export default class EmergencyContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>
                    <div align="center">

                        <h2>Emergency HERE</h2>


                    </div>

                </Router>

            </div>

        );
    }
}

