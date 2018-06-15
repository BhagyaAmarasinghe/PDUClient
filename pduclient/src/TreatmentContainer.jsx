import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './PatientContainer.css';



export default class TreatmentContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>
                    <div align="center">

                        <h2>Treatments HERE</h2>


                    </div>

                </Router>

            </div>

        );
    }
}

