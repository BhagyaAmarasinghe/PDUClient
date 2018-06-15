import React,{Component} from 'react';
import './App.css'
import PropTypes from 'prop-types';
import axios from 'axios';
var Base=require ('./Statics.Common');



export default class AddPatients extends Component{

  constructor(props){
      super(props);

      this.state = {
          PatientLists: []
      };


  }

static get propTypes() {
    return {
        PatientLists: PropTypes.array,
        fillfields: PropTypes.func
    }
}

   upPatients(event){
        event.preventDefault();

       axios.put(Base.API+ '/PatientDetails/'+document.getElementById("PID").value,
           { PID:document.getElementById("PID").value,Pname:document.getElementById("Pname").value,
               PtAge:document.getElementById("PtAge").value,
               Condition:document.getElementById("Condition").value,
               Address:document.getElementById("Address").value,
               Guardian:document.getElementById("Pname").value,
               NIC:document.getElementById("NIC").value,
               Priority:document.getElementById("Priority").value,
               MedicalHistory:document.getElementById("MedicalHistory").value,
               PatientStatus:document.getElementById("PatientStatus").value,
               Treatments:document.getElementById("Treatments").value,
               Tests:document.getElementById("Test").value,
               Drugs:document.getElementById("Drugs").value,
               Doctor:document.getElementById("Doctor").value,
               Date:document.getElementById("Date").value}).then(function (result) {
           if(result.status===200){

           }
        }).catch(function (err) {
            alert('Update Error '+err);
        })
    }

    fillfields(event){
    event.preventDefault();
    axios.get(Base.API + '/PatientDetails/'+this.refs.PID.value).then( (res)=>{
        if(res.status===200){

            this.setState({

                PatientLists: res.data.data || res.data
            });


        }

    }).catch(function (err) {
        console.log(err);
    })
    }


    render(){

        return <div align="center">
            <br/><br/>
            <form onSubmit={this.fillfields.bind(this)}>
                <input  type={'text'} ref={'PID'}/>
                <button type={'submit'}>Get All Patients</button>
            </form>

            <br/><br/>

            <table className="patientTable">
                <tbody>
                {
                    this.state.PatientLists.map(function(PatientLists) {
                        return(<tr key={PatientLists.PID} align="center">
                            <table>

                            <tr>
                               <td> <label>PID</label></td>
                                <td><input type={'text'} value={PatientLists.PID} id={'PID'} /></td>
                            </tr>
                            <tr>
                                <td><label>Name</label></td>
                                <td> <input type={'text'} value={PatientLists.Pname} id={'Pname'}/></td>
                            </tr>
                                <tr>
                                    <td><label>Age</label></td>
                                    <td><input type={'text'} value={PatientLists.PtAge} id={'PtAge'}/></td>
                                </tr>

                           <tr>
                               <td><label>NIC</label></td>
                              <td> <input type={'text'} value={PatientLists.NIC} id={'NIC'} ref={'NIC'}/></td>
                               <td className={'set'}><input type={'text'} id={'newNIC'} ref={'newNIC'}/></td>
                               <button onClick={function(){ if(document.getElementById("newNIC").value.length===10 && ((document.getElementById("newNIC").value.endsWith('v')) || (document.getElementById("newNIC").value.endsWith('V')) ) ){  document.getElementById("NIC").value= document.getElementById("newNIC").value}
                                                            else{ alert('Invalid NIC')}
                               }}>Add</button>
                           </tr>
                            <tr>
                                <td><label>Guardian</label></td>
                                <td><input type={'text'} value={PatientLists.Guardian} id={'Guardian'}/></td>
                            </tr>
                            <tr>
                               <td> <label>Address</label></td>
                               <td> <input type={'text'} value={PatientLists.Address} id={'Address'} ref={'Address'}/></td>
                                <td className={'set'}><input type={'text'} id={'newAddress'} ref={'newAddress'}/></td>
                                <button onClick={function(){  document.getElementById("Address").value= document.getElementById("newAddress").value}}>Add</button>
                            </tr>
                           <tr>
                               <td><label>Condition</label></td>
                              <td> <input type={'text'} value={PatientLists.Condition} id={'Condition'}/></td>
                           </tr>
                            <tr>
                               <td> <label>Priority</label></td>
                               <td> <input type={'text'} value={PatientLists.Priority} id={'Priority'}/></td>
                            </tr>
                            <tr>
                              <td>  <label>Medical History</label></td>
                                <td><input type={'text'} value={PatientLists.MedicalHistory} id={'MedicalHistory'} ref={'MedicalHistory'}/></td>
                                <td className={'set'}><input type={'text'} id={'newMedicalHistory'} ref={'newMedicalHistory'}/></td>
                                <button onClick={function(){  document.getElementById("MedicalHistory").value=  document.getElementById("MedicalHistory").value+','+document.getElementById("newMedicalHistory").value}}>Add</button>
                            </tr>
                            <tr>
                               <td> <label>Patient Status</label></td>
                                <td> <input type={'text'} id={'PatientStatus'} ref={'PatientStatus'} value={PatientLists.PatientStatus}/></td>

                               <select  id={'PatientStatusList'}>
                                  <option value="PCU">PCU</option>
                                  <option value="Admitted">Admitted</option>
                                  <option value="Discharged">Discharged</option>
                                  <option value="Transferred">Transferred</option>
                              </select>
                                <button onClick={function(){  document.getElementById("PatientStatus").value=document.getElementById("PatientStatusList").value}}>Add</button>
                            </tr>
                           <tr>
                              <td> <label>Treatments</label></td>
                              <td> <input type={'text'} value={PatientLists.Treatments} id={'Treatments'} ref={'Treatments'}/></td>
                               <td className={'set'}><input type={'text'} id={'newTreatments'} ref={'newTreatments'}/></td>
                               <button onClick={function(){  document.getElementById("Treatments").value= document.getElementById("Treatments").value+','+document.getElementById("newTreatments").value}}>Add</button>
                           </tr>
                            <tr>
                               <td> <label>Tests</label></td>
                               <td> <input type={'text'} value={PatientLists.Tests} id={'Test'} ref={'Tests'} className={'set'}/></td>
                                <td className={'set'}><input type={'text'} id={'newtests'} ref={'newTests'}/></td>
                                <button onClick={function(){  document.getElementById("Test").value=document.getElementById("Test").value+','+ document.getElementById("newtests").value}}>Add</button>
                            </tr>
                            <tr >
                                <td><label>Drugs</label></td>
                                <td><input type={'text'} value={PatientLists.Drugs}id={'Drugs'} ref={'Drugs'} className={'set'}/></td>
                                <td className={'set'}><input type={'text'} id={'newdrugs'} ref={'newDrugs'}/></td>
                                <button onClick={function(){  document.getElementById("Drugs").value=document.getElementById("Drugs").value+','+ document.getElementById("newdrugs").value}} >Add</button>
                            </tr>
                                <tr>
                                    <td> <label>Doctor</label></td>
                                    <td>  <input type={'text'} value={PatientLists.Doctor} id={'Doctor'}/></td>
                                </tr>
                                <tr>
                                    <td><label>Date</label></td>
                                    <td><input type={'text'} value={PatientLists.Date}id={'Date'} id={'Date'}/></td>
                                </tr>

                            </table>

                        </tr>)
                    })
                }

                </tbody>
            </table>
            <form onSubmit={this.upPatients.bind(this)}>
                <button type={'submit'}>Submit</button>
            </form>



            {/*<form onSubmit={this.change.bind(this)}>
            <table>
                <tr  >
                    <td className={'drugset'}><input type={'text'} ref={'newDrugs'}/></td>
                    <button>Add</button>
                </tr>

                <tr>
                    <td><label>New Treatments</label></td>
                    <td><input type={'text'} ref={'newTreatments'}/></td>
                </tr>

                <tr>
                    <td><label>New Tests</label></td>
                    <td><input type={'text'} ref={'newTests'}/></td>
                </tr>


            </table>
                <button type={'submit'}>Update fields</button>
            </form>*/}
        </div>

    }
}

