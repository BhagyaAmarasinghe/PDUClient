import React,{Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
var Base=require ('./Static.common');


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
        axios.put(Base.API+ '/PatientDetails/'+this.refs.PID.value,
            { PID:this.refs.PID.value,Pname:this.refs.Pname.value,
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

    change(event){
      event.preventDefault();
      document.getElementById("Drugs").value=this.refs.newDrugs.value;
      document.getElementById("Test").value=this.refs.newTests.value;
      document.getElementById("Treatments").value=this.refs.newTreatments.value;
    }

    render(){

        return <div align="center">
            <br/><br/>
            <form onSubmit={this.fillfields.bind(this)}>
                <input  type={'text'} ref={'PID'}/>
                <button type={'submit'}>Get All Patients</button>
            </form>

            <br/><br/>
        <form onSubmit={this.upPatients.bind(this)}>
            <table className="patientTable">
                <tbody>
                {
                    this.state.PatientLists.map(function(PatientLists) {
                        return(<tr key={PatientLists.PID} align="center">
                            <table>

                            <tr>
                               <td> <label>PID</label></td>
                                <td><input type={'text'} value={PatientLists.PID} ref={'PID'} /></td>
                            </tr>
                            <tr>
                                <td><label>Name</label></td>
                                <td> <input type={'text'} value={PatientLists.Pname} ref={'Pname'}/></td>
                            </tr>
                                <tr>
                                    <td><label>Age</label></td>
                                    <td><input type={'text'} value={PatientLists.PtAge} ref={'PtAge'}/></td>
                                </tr>

                           <tr>
                               <td><label>NIC</label></td>
                              <td> <input type={'text'} value={PatientLists.NIC} ref={'NIC'}/></td>
                           </tr>
                            <tr>
                                <td><label>Guardian</label></td>
                                <td><input type={'text'} value={PatientLists.Guardian} ref={'Guardian'}/></td>
                            </tr>
                            <tr>
                               <td> <label>Address</label></td>
                               <td> <input type={'text'} value={PatientLists.Address} ref={'Address'}/></td>
                            </tr>
                           <tr>
                               <td><label>Condition</label></td>
                              <td> <input type={'text'} value={PatientLists.Condition} ref={'Condition'}/></td>
                           </tr>
                            <tr>
                               <td> <label>Priority</label></td>
                               <td> <input type={'text'} value={PatientLists.Priority} ref={'Priority'}/></td>
                            </tr>
                            <tr>
                              <td>  <label>Medical History</label></td>
                                <td><input type={'text'} value={PatientLists.MedicalHistory} ref={'MedicalHistory'}/></td>
                            </tr>
                            <tr>
                               <td> <label>Patient Status</label></td>
                              <td>  <input type={'text'} value={PatientLists.PatientStatus} ref={'PatientStatus'}/></td>
                            </tr>
                           <tr>
                              <td> <label>Treatments</label></td>
                              <td> <input type={'text'} value={PatientLists.Treatments} id={'Treatments'} ref={'Treatments'}/></td>
                           </tr>
                            <tr>
                               <td> <label>Tests</label></td>
                               <td> <input type={'text'} value={PatientLists.Tests} id={'Test'} ref={'Tests'}/></td>
                            </tr>
                            <tr>
                                <td><label>Drugs</label></td>
                                <td><input type={'text'} value={PatientLists.Drugs}id={'Drugs'} ref={'Drugs'}/></td>
                            </tr>

                            </table>

                        </tr>)
                    })
                }

                </tbody>
            </table>
            <button type={'submit'}>Submit</button>
        </form>

            <form onSubmit={this.change.bind(this)}>
            <table>
                <tr>
                    <td><label>New Drugs</label></td>
                    <td><input type={'text'} ref={'newDrugs'}/></td>
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
            </form>
        </div>

    }
}

