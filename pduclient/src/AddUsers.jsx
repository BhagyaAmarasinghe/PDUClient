import React,{Component} from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
var Base=require ('./Statics.Common');

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
        const style = {
            marginTop: "20px"
        };

        return(

        <div className={'addusers'}>
            <header className={'adduser-header'}>
                <h1 className={'adduser-title'}> Register as a New User</h1>
            </header>

            <p className={'adduser-intro'}> Fill the registration form</p>

            <form onSubmit={this.addUser.bind(this)}>
                <div align="center">
                    <div align="center">
                <div className="row" style={style}>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>Username: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'UserName'} id={'uname'}/><br/><br/>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>Password: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'password'} ref={'password'} id={'upassword'}/><br/><br/>
                    </div>
                </div>

                    </div>


                <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                    <button className="btn btn-primary btn-block btn-dark" type={'submit'}>Register</button>
                </div>
                </div>
            </form>
        </div>
        );
    }
}

