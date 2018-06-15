
import React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MainFrame from './MainFrame';

var Base =require('./Statics.Common');



export default class Login extends Component {
    userLogin(event) {
        event.preventDefault();
        axios.get(Base.API + '/UserDetails/loginuser/' + {UserName: this.refs.UserName.value}).then(function (result) {
            if (result.status === 200) {
                ReactDOM.render(<MainFrame/>,document.getElementById('root'));
            }
        }).catch(function (err) {
            alert('Error login ' + err);
        });
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
                    <form onSubmit={this.userLogin.bind(this)}>
                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                                <label>Username: </label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-control" type={'text'} ref={'UserName'}/><br/><br/>
                            </div>
                        </div>

                        <div className="row" style={style}>
                            <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                                <label>Password: </label>
                            </div>
                            <div className="col-xs-1 col-sm-1">:</div>
                            <div className="col-xs-4 col-sm-4 col-md-3">
                                <input className="form-control" type={'password'} ref={'password'}/><br/><br/>
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
