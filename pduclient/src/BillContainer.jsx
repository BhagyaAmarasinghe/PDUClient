import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CalculateBill from './CalculateBill';


import './PatientContainer.css';

export default class BillContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>
                    <div className='submenu'>
                        <div className="col">
                            <h2><Link className="link" to="/">Calculate Discharge Bill</Link></h2>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Route exact path="/" render={props =>{
                            return<CalculateBill/>
                        }}/>

                    </div>

                </Router>
                <br/><br/>

            </div>

        );
    }
}
