import React, {Component} from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

var Base=require('./Statics.Common');

export default class getAllPatients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PatientLists: []
        };
       // this.fetchall();
    }

    static get propTypes() {
        return {
            PatientLists: PropTypes.array,
            fetchall: PropTypes.func
        }
    }

    fetchall(event) {

            event.preventDefault();
        axios.get(Base.API + '/PatientDetails/').then( (res)=>{
            if(res.status===200){

                this.setState({

                    PatientLists: res.data.data || res.data
                });
            }

        }).catch(function (err) {
            console.log(err);
        })
    }

    render(){
        return <div align="center">
            <br/><br/>
            <button type={'submit'} onClick={this.fetchall.bind(this)}>Get All Patients</button>
            <br/><br/>
            <table className="patientTable">
                <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>NIC</th>
                    <th>Guardian</th>
                    <th>Address</th>
                    <th>Condition</th>
                    <th>Priority</th>
                    <th>Medical History</th>
                    <th>Status</th>
                    <th>Treatments</th>
                    <th>Tests</th>
                    <th>Drugs</th>
                    <th>Date</th>


                </tr>

                </thead>
                <tbody>

                {
                    this.state.PatientLists.map(function(PatientLists) {
                        return(<tr key={PatientLists.PID}>
                            <td>{PatientLists.PID}</td>
                            <td>{PatientLists.Pname}</td>
                            <td>{PatientLists.PtAge}</td>
                            <td>{PatientLists.NIC}</td>
                            <td>{PatientLists.Guardian}</td>
                            <td>{PatientLists.Address}</td>
                            <td>{PatientLists.Condition}</td>
                            <td>{PatientLists.Priority}</td>
                            <td>{PatientLists.MedicalHistory}</td>
                            <td>{PatientLists.PatientStatus}</td>
                            <td>{PatientLists.Treatments}</td>
                            <td>{PatientLists.Tests}</td>
                            <td>{PatientLists.Drugs}</td>
                            <td>{PatientLists.Date}</td>

                        </tr>)
                    })
                }

                </tbody>
            </table>

        </div>
    }



}