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
                    <div>
                        <h2 className="login"><Link  to="/">View Drugs</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 className="login"> <Link  to="/addDrugs">Add Drugs</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



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

