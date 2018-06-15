import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddDrug from './AddDrug';
import DrugView from './DrugView';

import './PatientContainer.css';



export default class DrugContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>
                    <div className='submenu'>
                        <div className="col">
                            <Link className="link" to="/">View Drugs</Link>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col">
                            <Link className="link" to="/addDrugs">Add Drugs</Link>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;



                        <Route exact path="/" render={props =>{
                            return<DrugView/>
                        }}/>
                        <Route path="/addDrugs" render={props =>{
                            return<AddDrug/>
                        }}/>
                    </div>

                </Router>
                <br/><br/>

            </div>

        );
    }
}

