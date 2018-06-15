
import React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MainFrame from './MainFrame';

var Base =require('./Statics.Common');
var uname;
var upassword;

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            userData: []
        };


    }

    static get propTypes() {
        return {
            userData: PropTypes.array,
            getUserdata: PropTypes.func

        }
    }



    AuthenticateUser(username,password){


        if(document.getElementById("uname").value==username && document.getElementById("upassword").value==password){


           ReactDOM.render(<MainFrame/>,document.getElementById('root'));
        }
        else{
            alert('Login Credential error' );
        }

    }

    getUserdata(event){


        event.preventDefault();
        axios.get(Base.API + '/UserDetails/'+document.getElementById("uname").value).then( (res)=>{
            if(res.status===200){
                this.setState({

                    userData: res.data.data || res.data
                });
                this.state.userData.map(function(userData){
                    uname=userData.UserName;
                    upassword=userData.password;
                });

                this.AuthenticateUser(uname,upassword);
            }

        }).catch(function (err) {
            console.log(err);
        })
    }

    render() {
        const style = {
            marginTop: "20px"
        };

        return (

            <div className={'loginusers'}>
                <header className={'loginusers-header'}>

                </header>

                <p className={'loginusers-intro'}> </p>

                <div className="container">
                    <form onSubmit={this.getUserdata.bind(this)}>
                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                                <label>Username: </label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-control" type={'text'} ref={'UserName'} id={'uname'}/><br/><br/>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                                <label>Password: </label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-control" type={'password'} ref={'password'} id={'upassword'}/><br/><br/>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                                <button className="btn btn-primary btn-block btn-dark" type={'submit'}>Login</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}
