import React, { Component } from 'react';
import axios                from 'axios';
import PropTypes            from 'prop-types';

var Base  					= require('./Statics.Common');


class Nurse extends Component{
    static get PropTypes(){
        return {
            nurses:PropTypes.array

        }
    }

    constructor(props){
        super(props);
        this.state={
            nurses:[]

        };
    }

    addNurse(event){
        event.preventDefault();

        axios.post(Base.API+'/Nurse',{nur_id:this.refs.nur_id.value,nur_name:this.refs.nur_name.value,nur_nic:this.refs.nur_nic.value,nur_age:this.refs.nur_age.value,nur_address:this.refs.nur_address.value,nur_ward:this.refs.nur_ward.value,nur_priority_status:this.refs.nur_priority_status.value}).then(function (result) {
            if(result.status == 200){
                console.log('successfully added');
                alert("successfully added");

            }




        }).catch(function (reason) {
            alert(reason);
            alert('could not add nurse');
        })
    }

    updateNurse(event){
        event.preventDefault();

        axios.put(Base.API+'/Nurse/'+this.refs.nur_id.value,{nur_id:this.refs.nur_id.value,nur_name:this.refs.nur_name.value,nur_nic:this.refs.nur_nic.value,nur_age:this.refs.nur_age.value,nur_address:this.refs.nur_address.value,nur_ward:this.refs.nur_ward.value,nur_priority_status:this.refs.nur_priority_status.value}).then(function (result) {
            if(result.status==200){
                console.log('successfully updated');
                alert("successfully updated");
            }
        }).catch(function (reason) {
            alert(reason);
            alert('update failed')
        })
    }

    deleteNurse(event){
        event.preventDefault();
        axios.delete(Base.API+'/Nurse/'+this.refs.nur_id.value).then(function (result) {
            if(result==200){
                console.log('successfully removed');
                alert('successfully removed')
            }
        })

    }
    getNurse(event){

        event.preventDefault();


        axios.get(Base.API +'/Nurse').then(result => {
            if(result.status == 200){
                debugger
                this.setState({

                    nurses:result.data.data

                })
                console.log("successful")
                console.log(this.state.nurses)
                debugger
            }
        }).catch(function (reason) {
            alert('could not get the nurse list')
            console.log(reason);
        })

    }
    render(){

        var nurse = this.state.nurses
        return(
            <div class = 'nurses'>
                <h1 className="Form-title">Add Nurse</h1>
                <form>
                    <lable>Nurse id :</lable><br/>
                    <input type='text' ref='nur_id'></input><br/><br/>
                    <lable>Nurse Name :</lable><br/>
                    <input type='text' ref='nur_name'></input><br/><br/>
                    <lable>NIC :</lable><br/>
                    <input type='text' ref='nur_nic'></input><br/><br/>
                    <lable>Age :</lable><br/>
                    <input type='text' ref='nur_age'></input><br/><br/><br/>
                    <lable>Address :</lable><br/>
                    <input type='text' ref='nur_address'></input><br/><br/><br/>
                    <lable>Ward :</lable><br/>
                    <input type='text' ref='nur_ward'></input><br/><br/><br/>
                    <lable>Priority status :</lable><br/>
                    <input type='text' ref='nur_priority_status'></input><br/><br/><br/>

                    <button type='submit' onClick={this.addNurse.bind(this)}>ADD</button>&nbsp;
                    <button type='submit' onClick={this.updateNurse.bind(this)}>UPDATE</button>&nbsp;
                    <button type='submit' onClick={this.deleteNurse.bind(this)}>DELETE</button>&nbsp;

                </form><br/><br/>

                <button type='submit' onClick={(event)=>this.getNurse(event)}>VIEW NURSES</button>&nbsp;

                <div>
                    <table className="Nurses">
                        <thead>
                        <tr>
                            <td>Nurse ID</td>
                            <td> Name</td>
                            <td> NIC</td>
                            <td> Age</td>
                            <td> Address</td>
                            <td> Ward</td>
                            <td> Priority status</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.nurses.map(function (nurse) {
                            return (
                                <tr key={nurse.nur_id}>
                                    <td>{nurse.nur_id}</td>
                                    <td>{nurse.nur_name}</td>
                                    <td>{nurse.nur_nic}</td>
                                    <td>{nurse.nur_age}</td>
                                    <td>{nurse.nur_address}</td>
                                    <td>{nurse.nur_ward}</td>
                                    <td>{nurse.nur_priority_status}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }




}

export default Nurse;