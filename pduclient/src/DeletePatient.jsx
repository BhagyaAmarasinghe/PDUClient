import React,{Component} from 'react';
import axios from 'axios';
var Base=require ('./Statics.Common');

export default class DeletePatient extends Component{

    deletePatient(event){


        event.preventDefault();
        axios.delete(Base.API+ '/PatientDetails/'+this.refs.PID.value).then(function (result) {

            if(result.status===200){
                alert('Patient Deleted');
            }
        }).catch(function (err) {
            alert('Error in deleting '+err);
        })
    }

    render(){

        return(

            <div className={'deletepatients'} align="center">
                <header className={'deletepatients-header'}>
                    <h1 className={'deletepatients-title'}> Delete Patient Details</h1>
                </header>

                <p className={'deletepatients-intro'}> Enter Patient ID</p>

                <form onSubmit={this.deletePatient.bind(this)}>



                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>PID: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'PID'} /><br/><br/>
                    </div>


                    <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                        <button className="btn btn-primary btn-block btn-dark" type={'submit'} >Delete</button>
                    </div>


                </form>
            </div>
        );
    }
}

