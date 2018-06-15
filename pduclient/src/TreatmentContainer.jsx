import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddTreat from './AddTreat';
import ViewTreat from './ViewTreat';

import './PatientContainer.css';



export default class TreatmentContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>
                    <div align="center">
                        <div className="submenu">
                            <div className="col">
                                <Link className="link" to="/treat">View Treatments</Link>
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="col">
                                <Link className="link" to="/addTreat">Manage Treatments</Link>
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;



                            <Route exact path="/treat" render={props =>{
                                return<ViewTreat/>
                            }}/>
                            <Route path="/addTreat" render={props =>{
                                return<AddTreat/>
                            }}/>
                        </div>




                    </div>

                </Router>

            </div>

        );
    }
}

