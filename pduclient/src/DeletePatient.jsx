import React,{Component} from 'react';
import axios from 'axios';
var Base=require ('./Statics.Common');

export default class DeletePatient extends Component{

    deletePatient(event){


        event.preventDefault();
        axios.delete(Base.API+ '/PatientDetails/'+{PID:this.refs.PID.value}).then(function (result) {

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
                    <table>
                        <tr>
                            <td><label>PID: </label></td>
                            <td><input type={'text'} ref={'PID'}/></td>
                        </tr>

                    </table>

                    <button type={'submit'}>Delete</button>

                </form>
            </div>
        );
    }
}

