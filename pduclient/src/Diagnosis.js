import React, { Component } from 'react';
import axios                from 'axios';
import PropTypes            from 'prop-types';
var Base  					= require('./Statics.Common');


class Diagnostics extends Component{
    static get PropTypes(){
        return {
            patient:PropTypes.array,

        }
    }

    constructor(props){
        super(props);
        this.state={
            patient:[],
            doctor:[]
        };
    }

    addDiagnostic(event){
        event.preventDefault();
        debugger
        axios.post(Base.API+'/Diagnosis',{diag_id:this.refs.diag_id.value,p_id:this.refs.p_id.value,d_id:this.refs.d_id.value,diagnostic:this.refs.diagnosis.value,treatment:this.refs.treatment.value}).then(function (result) {
            if(result.status === 200){
                debugger
                console.log('successfully added');
                alert("successfully added");

            }
        }).catch(function (reason) {
            alert(reason);
            alert('could not add the diagnosis');
        })
    }

    updateDiagnosis(event){
        event.preventDefault();

        axios.put(Base.API+'/Diagnosis'+this.refs.diag_id.value,{diag_id:this.refs.diag_id.value,p_id:this.refs.p_id.value,d_id:this.refs.d_id.value,diagnosis:this.refs.diagnosis.value,treatment:this.refs.treatment.value}).then(function (result) {
            if(result.status==200){
                console.log('successfully updated');
                alert("successfully updated");
            }
        }).catch(function (reason) {
            alert(reason);
            alert('update failed')
        })

    }

    deleteDiagnosis(event){
        event.preventDefault();
        var di_id = prompt("please enter the diagnosis ID")
        axios.delete(Base.API+'/Diagnosis/'+di_id).then(function (result) {
            if(result==200){
                console.log('successfully removed');
                alert('successfully removed')
            }
        }).catch(function (reason) {
            alert(reason);
        })

    }

    getDiagnosis(event){

        event.preventDefault();


        axios.get(Base.API +'/PatientDetails/'+this.refs.p_id.value).then(result => {
            if(result.status == 200){
            debugger
            this.setState({

                patient:result.data.data

            })
            console.log("successful")
            console.log(this.state.patient)
            debugger
        }
    }).catch(function (reason) {
            alert('could not get the material list')
            console.log(reason);
        })

    }


    render(){
        return (
            <div>
            <form>
            <lable>Diagnosis Id :</lable><br/>
        <input type='text' ref='diag_id'></input><br/><br/>
            <lable>Patient Id :</lable><br/><br/>
        <input type='text' ref='p_id'></input><br/><br/>
            <lable>Doctor Id :</lable><br/>
        <input type='text' ref='d_id'></input><br/><br/>
            <lable>Diagnosis :</lable><br/>
        <input type='text' ref='diagnosis'></input><br/><br/>
            <lable>Treatment :</lable><br/>
        <input type='text' ref='treatment'></input><br/><br/>

            <button type='Submit' onClick={this.addDiagnostic.bind(this)} >Enter</button>&nbsp;
        <button type='Submit' onClick={this.updateDiagnosis.bind(this)}>Update</button>&nbsp;
        <button type='Submit' onClick={this.deleteDiagnosis.bind(this)}>Delete</button>&nbsp;
        <button type='Submit' onClick={this.getDiagnosis.bind(this)}>Patient</button>
        </form>

        <table>
        <thead>
        <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Condition</td>
        <td>Priority</td>
        <td>History</td>
        <td>Status</td>

        </tr>
        </thead>
        <tbody>
        {this.state.patient.map(function (pat, index) {
            return(
                <tr key={index}>
                <td>{pat.Pname}</td>
            <td>{pat.PtAge}</td>
            <td>{pat.Condition}</td>
            <td>{pat.Priority}</td>
            <td>{pat.MedicalHistory}</td>
            <td>{pat.PatientStatus}</td>
            </tr>
        )
        })}
    </tbody>
        </table>

        </div>



    )
    }

}

export default Diagnostics;