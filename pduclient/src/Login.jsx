
import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
var Base =require('./Statics.Common');


export default class Login extends Component {



    userLogin(event) {
        event.preventDefault();
        axios.get(Base.API + '/UserDetails/' + this.refs.UserName.value,{UserName:this.refs.UserName.value,password:this.refs.password.value}).then(function (result) {
            if (result.status === 200) {

                alert('Done');
                

            }
        }).catch(function (err) {
            alert('Error login ' + err);
        });
    }

    render() {

        return (

            <div className={'loginusers'}>

                <header className={'loginusers-header'}>

                </header>

                <p className={'loginusers-intro'}> </p>

                <form onSubmit={this.userLogin.bind(this)}>
                    <label>Username: </label>
                    <input type={'text'} ref={'UserName'}/><br/><br/>

                    <label>Password: </label>
                    <input type={'password'} ref={'password'}/><br/><br/>

                    <button type={'submit'}>Login</button>

                </form>
            </div>
        );
    }
}
