import React, { Component } from 'react';
import axios                from 'axios';
import PropTypes            from 'prop-types';

var Base  					= require('./Statics.Common');


class Attendant extends Component{
    static get PropTypes(){
        return {
            attendants:PropTypes.array

        }
    }

    constructor(props){
        super(props);
        this.state={
            attendants:[]

        };
    }

    addAttendant(event){
        event.preventDefault();

        axios.post(Base.API+'/Attendant',{att_id:this.refs.att_id.value,att_name:this.refs.att_name.value,att_nic:this.refs.att_nic.value,att_age:this.refs.att_age.value,att_address:this.refs.att_address.value,att_ward:this.refs.att_ward.value}).then(function (result) {
            if(result.status == 200){
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

    updateNurse(event){
        event.preventDefault();

        axios.put(Base.API+'/Attendant/'+this.refs.att_id.value,{att_id:this.refs.att_id.value,att_name:this.refs.att_name.value,att_nic:this.refs.att_nic.value,att_age:this.refs.att_age.value,att_address:this.refs.att_address.value,att_ward:this.refs.att_ward.value}).then(function (result) {
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
        axios.delete(Base.API+'/Attendant/'+this.refs.att_id.value).then(function (result) {
            if(result==200){
                console.log('successfully removed');
                alert('successfully removed')
            }
        })

    }
    getNurse(event){

        event.preventDefault();


        axios.get(Base.API +'/Attendant').then(result => {
            if(result.status == 200){
            debugger
            this.setState({

                nurses:result.data.data

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
    render(){

        var attendant = this.state.attendants
        return(
            <div class = 'attendants'>
            <form>
            <lable>Attendant id :</lable><br/>
        <input type='text' ref='att_id'></input><br/><br/>
            <lable>Attendant Name :</lable><br/>
        <input type='text' ref='att_name'></input><br/><br/>
            <lable>NIC :</lable><br/>
        <input type='text' ref='att_nic'></input><br/><br/>
            <lable>Age :</lable><br/>
        <input type='text' ref='att_age'></input><br/><br/><br/>
            <lable>Address :</lable><br/>
        <input type='text' ref='att_address'></input><br/><br/><br/>
            <lable>Ward :</lable><br/>
        <input type='text' ref='att_ward'></input><br/><br/><br/>


            <button type='submit' onClick={this.addAttendant.bind(this)}>ADD</button>&nbsp;
        <button type='submit' onClick={this.updateAttendant.bind(this)}>UPDATE</button>&nbsp;
        <button type='submit' onClick={this.deleteAttendant.bind(this)}>DELETE</button>&nbsp;

        </form><br/><br/>

        <button type='submit' onClick={(event)=>this.getAttendant(event)}>VIEW ATTENDANTS</button>&nbsp;

        <div>
        <table className="Attendants">
            <thead>
            <tr>
            <td>Attendant ID</td>
        <td> Name</td>
        <td> NIC</td>
        <td> Age</td>
        <td> Address</td>
        <td> Ward</td>
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
    );
    }




}

export default Attendant;