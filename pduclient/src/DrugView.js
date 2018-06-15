import React, {Component} from 'react';
import axios from 'axios';


import PropTypes from 'prop-types';

var Base=require('./Statics.Common');

export default class DrugView extends Component{
    constructor(props){
        super(props);
        this.state = {
            drugs: [],
            one:[]
        };
        this.getAllDrugs();
    }

    static get propTypes() {
        return {
            drug: PropTypes.object,
            getAllDrugs: PropTypes.func
        }
    }

    getAllDrugs() {
        axios.get(Base.API + '/Drugs/').then(res => {
            this.setState({
                drugs: res.data.data
            });
        }).catch(err=>{
            this.getAllDrugs(err);
        })
    }

    deleteDrug(e){
        e.preventDefault();
        var ID=prompt("Enter Drug Id");
        axios.delete(Base.API+'/Drugs/'+ID).then(result=>{
            if(result == 200){

                alert("The drug " +ID+" is deleted");

            }
            alert("The drug " +ID+" is deleted");
            this.getAllDrugs();
        }).catch(err=>{
            alert(err);
        })

    }






    render(){
        return <div className="page">
            <br/><br/>

            <br/><br/>
            <table className="table">
                <thead>
                <tr>
                    <th>Drug ID</th>
                    <th>Drug Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Prescribed For</th>

                </tr>

                </thead>
                <tbody>

                {
                    this.state.drugs.map(drug=> {
                        return(<tr key={drug.id}>
                            <td>{drug.id}</td>
                            <td>{drug.name}</td>
                            <td>{drug.type}</td>
                            <td>{drug.price}</td>
                            <td>{drug.prescribed_for}</td>
                        </tr>)
                    })
                }




                </tbody>.
            </table>
            <br/><br/>

            <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                <button className="btn btn-primary btn-block btn-danger" onClick={(e)=>this.deleteDrug(e)} >Delete a Drug</button>
            </div>



        </div>
    }
}