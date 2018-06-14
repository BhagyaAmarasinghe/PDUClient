import React, { Component } from 'react';
import axios                from 'axios';
import PropTypes            from 'prop-types';

var Base  					= require('./Statics.Common');


class Material extends Component{
    static get PropTypes(){
            return {
                mat:PropTypes.array

            }
    }

    constructor(props){
        super(props);
        this.state={
            mat:[]

        };
    }

    addMaterial(event){
        event.preventDefault();

        axios.post(Base.API+'/Materials',{mat_id:this.refs.mat_id.value,mat_name:this.refs.mat_name.value,mat_quantity:this.refs.mat_quantity.value,mat_price:this.refs.mat_price.value}).then(function (result) {
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
            alert('could not add the materials');
        })
    }

    updateMaterial(event){
        event.preventDefault();

        axios.put(Base.API+'/Materials/'+this.refs.mat_id.value,{mat_id:this.refs.mat_id.value,mat_name:this.refs.mat_name.value,mat_quantity:this.refs.mat_quantity.value,mat_price:this.refs.mat_price.value}).then(function (result) {
            if(result.status==200){
                console.log('successfully updated');
                alert("successfully updated");
            }
        }).catch(function (reason) {
            alert(reason);
            alert('update failed')
        })
    }

    deleteMaterial(event){
        event.preventDefault();
        axios.delete(Base.API+'/Materials/'+this.refs.mat_id.value).then(function (result) {
            if(result==200){
                console.log('successfully removed');
                alert('successfully removed')
            }
        })

    }
    getMaterials(event){

        event.preventDefault();


        axios.get(Base.API +'/Materials').then(result => {
            if(result.status == 200){
            debugger
            this.setState({

                mat:result.data.data

            })
            console.log("successful")
            console.log(this.state.mat)
        debugger
        }
        }).catch(function (reason) {
            alert('could not get the material list')
            console.log(reason);
        })

    }
        render(){

        var mats = this.state.mat
        return(
            <div class = 'materials'>
                <form>
                    <lable>Material id :</lable><br/>
                    <input type='text' ref='mat_id'></input><br/><br/>
                    <lable>Material Name :</lable><br/>
                    <input type='text' ref='mat_name'></input><br/><br/>
                    <lable>Material Quantity :</lable><br/>
                    <input type='text' ref='mat_quantity'></input><br/><br/>
                    <lable>Material price :</lable><br/>
                    <input type='text' ref='mat_price'></input><br/><br/><br/>

                    <button type='submit' onClick={this.addMaterial.bind(this)}>ADD</button>&nbsp;
                    <button type='submit' onClick={this.updateMaterial.bind(this)}>UPDATE</button>&nbsp;
                    <button type='submit' onClick={this.deleteMaterial.bind(this)}>DELETE</button>&nbsp;

                </form><br/><br/>

            <button type='submit' onClick={(event)=>this.getMaterials(event)}>VIEW MATERIALS</button>&nbsp;

                <div>
                            <table className="Materials">
                                    <thead>
                                        <tr>
                                                <td>Material ID</td>
                                                <td> Name</td>
                                                <td> Quantity</td>
                                                <td> Price</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                          {this.state.mat.map(function (material) {
                                              return (
                                                  <tr key={material.mat_id}>
                                                        <td>{material.mat_id}</td>
                                                        <td>{material.mat_name}</td>
                                                        <td>{material.mat_quantity}</td>
                                                        <td>{material.mat_price}</td>
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

export default Material;