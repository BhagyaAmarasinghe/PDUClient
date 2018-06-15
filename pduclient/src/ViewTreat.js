import React, {Component} from 'react';
import axios from 'axios';


import PropTypes from 'prop-types';

var Base=require('./Statics.Common');

export default class ViewTreat extends Component{
    constructor(props){
        super(props);
        this.state = {
            treats: [],
            one:[]
        };
        this.getAllTreats();
    }

    static get propTypes() {
        return {
            treat: PropTypes.object,
            getAllTreats: PropTypes.func
        }
    }

    getAllTreats() {
        axios.get(Base.API + '/Treatments/').then(res => {
            this.setState({
                treats: res.data.data
            });
        }).catch(err=>{
            this.getAllTreats(err);
        })
    }

    deleteTreat(e){
        e.preventDefault();
        var ID=prompt("Enter Treatment ID");
        axios.delete(Base.API+'/Treatments/'+ID).then(result=>{
            if(result == 200){

                alert("The treatment " +ID+" is deleted");

            }
            alert("The treatment " +ID+" is deleted");
            this.getAllTreats();
        }).catch(err=>{
            alert(err);
        })

    }


    /*deleteDrug(){
        var ID=;
        axios.delete(Base.API+'/Drugs/'+ID).then(res=>{
            if(res.status===200) {
                this.getAllDrugs();
            }
        }).catch(err=>{
            alert(err);
        })

    }*/



    render(){
        return <div className="page">
            <br/><br/>

            <br/><br/>
            <table className="table">
                <thead>
                <tr>
                    <th>Treatment ID</th>
                    <th>Condition Name</th>
                    <th>Treatment</th>
                    <th>Price</th>

                </tr>

                </thead>
                <tbody>

                {
                    this.state.treats.map(treat=> {
                        return(<tr key={treat.id}>
                            <td>{treat.id}</td>
                            <td>{treat.condition_name}</td>
                            <td>{treat.treatment}</td>
                            <td>{treat.price}</td>
                        </tr>)
                    })
                }


                </tbody>.
            </table>
            <br/><br/>

            <button className="button" onClick={(e)=>this.deleteTreat(e)}>Delete a Treatment</button><br/><br/>


        </div>
    }
}