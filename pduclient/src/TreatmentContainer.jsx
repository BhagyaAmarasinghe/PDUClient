import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddTreat from './AddTreat';
import ViewTreat from './ViewTreat';





export default class TreatmentContainer extends Component {


    render() {
        return (
            <div className="Home">


                <Router>

                        <div >

                                <h2 className="login"><Link  to="/treat">View Treatments</Link></h2>&nbsp;&nbsp;&nbsp;&nbsp;
                                <h2  className="login"><Link to="/addTreat">Manage Treatments</Link></h2>

                                 <Route exact path="/treat" render={props =>{return<ViewTreat/>}}/>
                                 <Route path="/addTreat" render={props =>{return<AddTreat/>}}/>
                        </div>






                </Router>

            </div>

        );
    }
}

