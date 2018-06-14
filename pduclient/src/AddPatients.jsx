import React,{Component} from 'react';
import axios from 'axios';
var Base=require ('./Static.common');

export default class AddPatients extends Component{

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
                                                Drugs:this.refs.Drugs.value}).then(function (result) {
                                                                 if(result.status===200){
                                                                           alert('Patient Registered');
                                                                 }
        }).catch(function (err) {
            alert('Registration Error '+err);
        })
    }

    render(){

        return(

            <div className={'addpatients'} align="center">
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
                            <td><input type={'text'} ref={'Address'}/></td>
                        </tr>
                        <tr>
                            <td><label>Guardian: </label></td>
                            <td><input type={'text'} ref={'Guardian'}/></td>
                        </tr>
                        <tr>
                            <td><label>NIC: </label></td>
                            <td><input type={'text'} ref={'NIC'}/></td>
                        </tr>
                        <tr>
                            <td><label>Priority: </label></td>
                            <td><input type={'text'} ref={'Priority'}/></td>
                        </tr>
                        <tr>
                            <td><label>Medical History: </label></td>
                            <td><input type={'text'} ref={'MedicalHistory'}/></td>
                        </tr>
                        <tr>
                            <td><label>Patient Status: </label></td>
                            <td><input type={'text'} ref={'PatientStatus'}/></td>
                        </tr>
                        <tr>
                            <td><label>Treatments: </label></td>
                            <td><input type={'text'} ref={'Treatments'}/></td>
                        </tr>
                        <tr>
                            <td><label>Tests: </label></td>
                            <td><input type={'text'} ref={'Tests'}/></td>
                        </tr>
                        <tr>
                            <td><label>Drugs: </label></td>
                            <td><input type={'text'} ref={'Drugs'}/></td>
                        </tr>
                    </table>

                    <button type={'submit'}>Register</button>

                </form>
            </div>
        );
    }
}
