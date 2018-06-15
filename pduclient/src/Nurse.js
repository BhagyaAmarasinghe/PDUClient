import React, { Component } from 'react';
import axios                from 'axios';
import PropTypes            from 'prop-types';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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

    clearForm = () => {

    }

    render(){
        var nurse = this.state.nurses

        const style = {
            marginTop: "20px"
        };


        return(
            <div class='nurses'>
                <div className="container">
                    <form>
                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Nurse id</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input id="att_id" className="form-conotrol" type='text' ref='nur_id'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>nurse Name</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-conotrol" type='text' ref='nur_name'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>NIC</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-conotrol" type='text' ref='nur_nic'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Age</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input type='text' className="form-conotrol" ref='nur_age'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Address</label><br />
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input type='text' className="form-conotrol" ref='nur_address'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Ward</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input type='text' className="form-conotrol" ref='nur_ward'></input>
                            </div>
                        </div>
                        <div className="row" style={style}>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <button className="btn btn-primary btn-block btn-dark"  type='submit' onClick={this.addNurse.bind(this)}>ADD</button>&nbsp;
                            </div>

                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <button className="btn btn-primary btn-block btn-dark"  type='submit' onClick={this.updateNurse.bind(this)}>UPDATE</button>&nbsp;
                            </div>

                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <button className="btn btn-primary btn-block btn-dark"  type='submit' onClick={this.deleteNurse.bind(this)}>DELETE</button>&nbsp;
                            </div>
                        </div>

                    </form>

                    <div className="row" style={style}>
                        <div className="col-xs-2 col-sm-2 col-md-2">
                            <button className="btn btn-primary btn-block btn-dark" type='submit' onClick={(event) => this.getAttendant(event)}>VIEW ATTENDANTS</button>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2">
                            <button className="btn btn-primary btn-block btn-danger" onClick={this.clearForm} type='button'>Clear</button>
                        </div>
                    </div>


                    <div className="row table-responsive" style={style}>
                        <table className="Attendants table table-bordered">
                            <thead>
                            <tr>
                                <td><b>Attendant ID</b></td>
                                <td><b>Name</b></td>
                                <td><b>NIC</b></td>
                                <td><b>Age</b></td>
                                <td><b>Address</b></td>
                                <td><b>Ward</b></td>
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

                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }




}

export default Nurse;