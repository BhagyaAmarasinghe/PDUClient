import React,{Component} from 'react';
import axios from 'axios';
var Base=require ('./Static.common');

export default class AddUsers extends Component{



    addUser(event){

        event.preventDefault();

        axios.post(Base.API +'/UserDetails/',{UserName:this.refs.UserName.value,password:this.refs.password.value}).then(function (result) {
            if(result.status===200){
                alert('Registered');
            }
        }).catch(function (err) {
            alert('error in registration '+err);
        });
    }


    render(){

        return(

        <div className={'addusers'}>
            <header className={'adduser-header'}>
                <h1 className={'adduser-title'}> Register as a New User</h1>
            </header>

            <p className={'adduser-intro'}> Fill the registration form</p>

            <form onSubmit={this.addUser.bind(this)}>
                <label>Username: </label>
                <input type={'text'} ref={'UserName'}/><br/><br/>

                <label>Password: </label>
                <input type={'text'} ref={'password'}/><br/><br/>

                <button type={'submit'}>Register</button>

            </form>
        </div>
        );
    }
}

