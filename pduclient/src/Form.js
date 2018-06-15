import React, { Component } from 'react';
import axios                from 'axios';

var Base  					= require('./Statics.Common');

class Form extends Component {

addMachine(event){
    event.preventDefault();


    axios.post(Base.API + '/Machines', {m_id:this.refs.m_id.value,m_name:this.refs.m_name.value,m_price:this.refs.m_price.value}).then(result => {
        if(result.status == 200) {
        console.log('successfully added');
    }
}).catch(err => {
        alert(err);
    alert("the error is here")
})

}



    render() {
        return (
            <div className="Form">
            <header className="Form-header">

            <h1 className="Form-title">Add a Machine</h1>
        </header>
        <p className="Form-intro">

        </p>
            <form onSubmit={this.addMachine.bind(this)}>
                    <lable>Machine id :</lable><br/>
                    <input type='text' ref='m_id'></input><br/><br/>
                    <lable>Machine Name :</lable><br/>
                    <input type='text'  ref='m_name'></input><br/><br/>
                    <lable>Price :</lable><br/>
                    <input type='text' ref='m_price'></input><br/><br/>
                    <button type='submit'>ADD</button>

            </form>


        </div>
    );
    }
}

export default Form;
