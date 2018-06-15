import React, {Component} from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

var Base=require('./Statics.Common');

export default class EmergencyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: []
        };
        this.getList();
    }

    static get propTypes() {
        return {
            list: PropTypes.object,
            getList: PropTypes.func
        }
    }

    getList() {
        axios.get(Base.API + '/List/').then(res => {
            this.setState({
                lists: res.data.data
            });
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
                    <th>Doctor ID</th>
                    <th>Name</th>
                    <th>Telephone</th>
                    <th>Speciality</th>
                    <th>Priority Status</th>

                </tr>

                </thead>
                <tbody>

                {
                    this.state.lists.map(list=> {
                        return(<tr key={list.d_id}>
                            <td>{list.d_id}</td>
                            <td>{list.d_name}</td>
                            <td>{list.d_telephone}</td>
                            <td>{list.d_specialty}</td>
                            <td>{list.d_ps}</td>
                        </tr>)
                    })
                }

                </tbody>.
            </table>

        </div>
    }



}