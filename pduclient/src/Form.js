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

    <div align="center">
                <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                    <label>Machine ID: </label>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-3">
                    <input className="form-control" type={'text'} ref={'m_id'}/><br/><br/>
                </div>

                 <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>Machine Name: </label>
                 </div>

                  <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'m_name'}/><br/><br/>
                  </div>

                 <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                       <label>Price: </label>
                 </div>

                 <div className="col-xs-4 col-sm-4 col-md-3">
                      <input className="form-control" type={'text'} ref={'m_price'}/><br/><br/>
                 </div>

                  <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                       <button className="btn btn-primary btn-block btn-dark" type={'submit'}>Login</button>
                  </div>
    </div>
            </form>


        </div>
    );
    }
}

export default Form;
