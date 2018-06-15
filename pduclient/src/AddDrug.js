import React, {Component} from 'react';
import axios from 'axios';


var Base=require('./Statics.Common');


class AddDrug extends Component{

    constructor(props){
        super(props);
        this.state = {
            arr: [],

        };

    }

    addDrug(event) {
        event.preventDefault();

        axios.post(Base.API + '/Drugs/', {
            id: this.refs.id.value,
            name: this.refs.name.value,
            type: this.refs.type.value,
            price: this.refs.price.value,
            prescribed_for: this.refs.prescribed_for.value
        }).then(result => {
            if (result.status === 200) {
                alert('Drug added');
            }
            this.refs.id.value='';
            this.refs.name.value='';
            this.refs.type.value='';
            this.refs.price.value='';
            this.refs.prescribed_for.value='';

        }).catch(err => {
            alert(err);

        });


    }


    autoFill(event) {
        event.preventDefault();

        axios.get(Base.API + '/Drugs/'+this.refs.id.value).then(result => {
            //debugger;
            if (result.status === 200) {
                alert('Inputs filled');
                this.setState({
                    arr:result.data.data
                })
            }
            this.state.arr.map(arr=>{
                this.refs.name.value=arr.name;
                this.refs.type.value=arr.type;
                this.refs.price.value=arr.price;
                this.refs.prescribed_for.value=arr.prescribed_for;
            })


        }).catch(err => {
            alert(err);

        });


    }



    updateDrug(event){
        event.preventDefault();

        axios.put(Base.API + '/Drugs/'+this.refs.id.value, {
            id: this.refs.id.value,
            name: this.refs.name.value,
            type: this.refs.type.value,
            price: this.refs.price.value,
            prescribed_for: this.refs.prescribed_for.value
        }).then(result => {
            if (result.status === 200) {
                alert('Drug Updated');
            }
            this.refs.id.value='';
            this.refs.name.value='';
            this.refs.type.value='';
            this.refs.price.value='';
            this.refs.prescribed_for.value='';

        }).catch(err => {
            alert(err);

        });

    }


    render(){

        const style = {
            marginTop: "20px"
        };
        return <div className="page">
            <form onSubmit={this.addDrug.bind(this) }>
                <br/><br/><br/>
<div align="center">
                <div className="row" style={style}>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>ID: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'id'}/><br/><br/>
                    </div>
                </div>

                <div className="row" style={style}>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>Name: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'name'}/><br/><br/>
                    </div>
                </div>

                <div className="row" style={style}>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>Type: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'type'}/><br/><br/>
                    </div>
                </div>

                <div className="row" style={style}>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>Price: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'price'}/><br/><br/>
                    </div>
                </div>

                <div className="row" style={style}>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-center">
                        <label>Prescribed For: </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3">
                        <input className="form-control" type={'text'} ref={'prescribed_for'}/><br/><br/>
                    </div>
                </div>
</div>

                <br/><br/><br/>
    <div align="center">
                <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                    <button className="btn btn-primary btn-block btn-dark" type={'submit'}>Add</button>
                </div><br/>

                <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                    <button className="btn btn-primary btn-block btn-dark" type={'submit'} onClick={this.updateDrug.bind(this)}>Update Drug</button>
                </div><br/>

                <div className="col-xs-2 col-sm-2 col-md-2 text-center ">
                    <button className="btn btn-primary btn-block btn-dark" type={'submit'} onClick={this.autoFill.bind(this)}>Auto fill</button>
                </div>
    </div>

            </form>


        </div>
    }
}

export default AddDrug;