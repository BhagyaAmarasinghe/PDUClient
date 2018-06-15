import React,{Component} from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import Doctor from "./Doctor";
require('react-datepicker/dist/react-datepicker.css');
var Base=require ('./Statics.Common');

export default class AddPatients extends Component{

    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(date) {
        const valuedate=date.format();
        this.setState({
            startDate: valuedate
        });
    }

    addPatients(event){
        event.preventDefault();

        axios.post(Base.API+ '/PatientDetails/',{PID:this.refs.PID.value,
            Pname:this.refs.Pname.value,
            PtAge:this.refs.PtAge.value,
            Condition:this.refs.Condition.value,
            Address:this.refs.Address.value,
            Guardian:this.refs.Guardian.value,
            NIC:this.refs.NIC.value,
            Priority:this.refs.Priority.value,
            MedicalHistory:this.refs.MedicalHistory.value,
            PatientStatus:this.refs.PatientStatus.value,
            Treatments:this.refs.Treatments.value,
            Tests:this.refs.Tests.value,
            Drugs:this.refs.Drugs.value,
            Doctor:this.refs.Doctor.value,
            Date:this.state.startDate
            }).then(function (result) {
            if(result.status===200){
                alert('Patient Registered');
            }
        }).catch(function (err) {
            alert('Registration Error '+err);
        })
    }

    render(){

        return(

            <div className={'addpatients'} align="center" >
                <header className={'addpatients-header'}>
                    <h1 className={'addpatients-title'}> Register Patients</h1>
                </header>

                <p className={'addpatients-intro'}> Fill the registration form</p>

                <form onSubmit={this.addPatients.bind(this)}>
                    <table>
                        <tr>
                            <td><label>PID: </label></td>
                            <td><input type={'text'} ref={'PID'}/></td>
                        </tr>
                        <tr>
                            <td> <label>Name: </label></td>
                            <td> <input type={'text'} ref={'Pname'}/></td>
                        </tr>
                        <tr>
                            <td> <label>Age: </label></td>
                            <td> <input type={'text'} ref={'PtAge'}/></td>
                        </tr>
                        <tr>
                            <td><label>Condition: </label></td>
                            <td><input type={'text'} ref={'Condition'}/></td>
                        </tr>
                        <tr>
                            <td><label>Address: </label></td>
                            <td><input type={'text'} ref={'Address'} value={''}/></td>
                        </tr>
                        <tr>
                            <td><label>Guardian: </label></td>
                            <td><input type={'text'} ref={'Guardian'}/></td>
                        </tr>
                        <tr>
                            <td><label>NIC: </label></td>
                            <td><input type={'text'} ref={'NIC'} value={''}/></td>
                        </tr>
                        <tr>
                            <td><label>Priority: </label></td>
                            <td><input type={'text'} ref={'Priority'}/></td>
                        </tr>
                        <tr>
                            <td><label>Medical History: </label></td>
                            <td><input type={'text'} ref={'MedicalHistory'} value={''}/></td>
                        </tr>
                        <tr>
                            <td><label>Patient Status: </label></td>
                            <td><input type={'text'} ref={'PatientStatus'}/></td>
                        </tr>
                        <tr>
                            <td><label>Treatments: </label></td>
                            <td><input type={'text'} ref={'Treatments'} value={''}/></td>
                        </tr>
                        <tr>
                            <td><label>Tests: </label></td>
                            <td><input type={'text'} ref={'Tests'} value={''}/></td>
                        </tr>
                        <tr>
                            <td><label>Drugs: </label></td>
                            <td><input type={'text'} ref={'Drugs'} value={''}/></td>
                        </tr>
                        <tr>
                            <td><label>Doctor: </label></td>
                            <td><input type={'text'} ref={'Doctor'} /></td>
                        </tr>
                        <tr>
                            <td><label>Date: </label></td>
                            <td>
                                <DatePicker id={'Data'}
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            minDate={moment()}
                                            maxDate={moment().add(0, "days")}
                                            showDisabledMonthNavigation />

                            </td>
                        </tr>
                    </table>

                    <button type={'submit'}>Register</button>

                </form>
                <div >
                   <br/><br/><Doctor/>
                </div>
            </div>
        );
    }
}

