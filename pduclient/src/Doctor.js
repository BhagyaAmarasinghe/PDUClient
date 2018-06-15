import React, { Component } from 'react';
import axios                from 'axios';
import PropTypes            from 'prop-types';

var Base  					= require('./Statics.Common');

class Doctor extends Component {

    static get PropTypes(){
        return {
            doctors: PropTypes.array

        }
    }

    constructor(props){
        super(props);
        this.state={
            doctors:[]
        };
    }

    getDoctors(event){
        event.preventDefault();


        axios.get(Base.API + '/Patients/Doctor_ps/'+this.refs.d_ps.value).then(result => {
            if(result.status == 200) {
                this.setState({
                    doctors:result.data.data

                })
            console.log(this.state.doctors);
            console.log('successfully received');
        }
    }).catch(err => {
            alert(err);
        alert("couldn't get the list")
    })

    };



render() {

var  doctors = this.state.doctors
        return (
            <div className="Assign-Doctor">
            <header className="ADoctor-header">

            <h1 className="Form-title">Assign Doctor</h1>
        </header>
        <p className="Doctor-intro">
            Enter the priority status of the patient to get the relevent doctors
        </p>
        <form onChange={this.getDoctors.bind(this)}>
        <lable>Priority Status :</lable><br/>

            <div className="col-xs-4 col-sm-4 col-md-3">
                <input className="form-control" type={'text'} ref={'d_ps'} /><br/><br/>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                <button className="btn btn-primary btn-block btn-dark" type={'submit'}>Add</button>
            </div>
            </form>
    <table className="table">
        <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Specialty</th>
        </tr>
        </thead>

        <tbody>
        {this.state.doctors.map(function (doctor, index) {
            return (
                <tr key={index}>
                <td>{doctor.d_id}</td>
                <td>{doctor.d_name}</td>
                <td>{doctor.d_specialty}</td>
                </tr>
            )
        })}
        </tbody>
    </table>

            </div>
    );
    }
}

export default Doctor;


/*
* <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Specialty</th>
                     </tr>
                 </thead>

                 <tbody>
                         {this.renderDoctors()}
                </tbody>
                </table>*/

/*
* <ol>
                        {this.state.doctors.map(function (doctor, index) {
                            return(
                                <li key={index}>
                                        <ul>
                                            <li> There is a {doctor.d_id} whose name is {doctor.d_name} specialized in {doctor.d_specialty} </li>

                                        </ul>
                                </li>
                            )
                        })}
                </ol>
* */
