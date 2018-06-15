import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var Base = require('./Statics.Common');


class Attendant extends Component {
    static get PropTypes() {
        return {
            attendants: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            attendants: []
        };
    }

    addAttendant(event) {
        event.preventDefault();

        axios.post(Base.API + '/Attendant', { att_id: this.refs.att_id.value, att_name: this.refs.att_name.value, att_nic: this.refs.att_nic.value, att_age: this.refs.att_age.value, att_address: this.refs.att_address.value, att_ward: this.refs.att_ward.value }).then(function (result) {
            if (result.status == 200) {
                console.log('successfully added');
                alert("successfully added");

            }

            /*this.refs.mat_id.value ='';
            this.refs.mat_name.value ='';
            this.refs.mat_quantity.value ='';
            this.refs.mat_price.value ='';*/


        }).catch(function (reason) {
            alert(reason);
            alert('could not add attendant');
        })
    }

    updateAttendant(event) {
        event.preventDefault();

        axios.put(Base.API + '/Attendant/' + this.refs.att_id.value, { att_id: this.refs.att_id.value, att_name: this.refs.att_name.value, att_nic: this.refs.att_nic.value, att_age: this.refs.att_age.value, att_address: this.refs.att_address.value, att_ward: this.refs.att_ward.value }).then(function (result) {
            if (result.status == 200) {
                console.log('successfully updated');
                alert("successfully updated");
            }
        }).catch(function (reason) {
            alert(reason);
            alert('update failed')
        })
    }

    deleteAttendant(event) {
        event.preventDefault();
        axios.delete(Base.API + '/Attendant/' + this.refs.att_id.value).then(function (result) {
            if (result == 200) {
                console.log('successfully removed');
                alert('successfully removed')
            }
        })

    }
    getAttendant(event) {

        event.preventDefault();

        axios.get(Base.API + '/Attendant').then(result => {
            if (result.status == 200) {
                debugger
                this.setState({

                    nurses: result.data.data

                })
                console.log("successful")
                console.log(this.state.attendants)
                debugger
            }
        }).catch(function (reason) {
            alert('could not get the attendants list')
            console.log(reason);
        })

    }

    clearForm = () => {

    }

    render() {
        var attendant = this.state.attendants

        const style = {
            marginTop: "20px"
        };

        return (
            <div class='attendants'>
                <div className="container">
                    <form>
                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Attendant id</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input id="att_id" className="form-conotrol" type='text' ref='att_id'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Attendant Name</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-conotrol" type='text' ref='att_name'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>NIC</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-conotrol" type='text' ref='att_nic'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Age</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input type='text' className="form-conotrol" ref='att_age'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Address</label><br />
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input type='text' className="form-conotrol" ref='att_address'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-left">
                                <label>Ward</label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input type='text' className="form-conotrol" ref='att_ward'></input>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <button type='submit' onClick={this.addAttendant.bind(this)}>ADD</button>&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <button type='submit' onClick={this.updateAttendant.bind(this)}>UPDATE</button>&nbsp;
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2">
                                <button type='submit' onClick={this.deleteAttendant.bind(this)}>DELETE</button>&nbsp;
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
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.attendants.map(function (attendant) {
                                return (
                                    <tr key={attendant.nur_id}>
                                        <td>{attendant.att_id}</td>
                                        <td>{attendant.att_name}</td>
                                        <td>{attendant.att_nic}</td>
                                        <td>{attendant.att_age}</td>
                                        <td>{attendant.att_address}</td>
                                        <td>{attendant.att_ward}</td>

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

export default Attendant;