import React, {Component} from 'react';
import axios from 'axios';

var Base=require('./Statics.Common');


export default class AddTreat extends Component{

    constructor(props){
        super(props);
        this.state = {
            arr: []

        };

    }

    addTreat(event) {
        event.preventDefault();

        axios.post(Base.API + '/Treatments/', {
            id: this.refs.id.value,
            condition_name: this.refs.condition_name.value,
            treatment: this.refs.treatment.value,
            price: this.refs.price.value,

        }).then(result => {
            if (result.status === 200) {
                alert('Treatment added');
            }
            this.refs.id.value='';
            this.refs.condition_name.value='';
            this.refs.treatment.value='';
            this.refs.price.value='';


        }).catch(err => {
            alert(err);

        });


    }


    autoFill(event) {
        event.preventDefault();

        axios.get(Base.API + '/Treatments/'+this.refs.id.value).then(result => {
            //debugger;
            if (result.status === 200) {
                alert('Inputs filled');
                this.setState({
                    arr:result.data.data
                })
            }
            this.state.arr.map(arr=>{
                this.refs.condition_name.value=arr.condition_name;
                this.refs.treatment.value=arr.treatment;
                this.refs.price.value=arr.price;

            })


        }).catch(err => {
            alert(err);

        });


    }



    updateTreat(event){
        event.preventDefault();

        axios.put(Base.API + '/Treatments/'+this.refs.id.value, {
            id: this.refs.id.value,
            condition_name: this.refs.condition_name.value,
            treatment: this.refs.treatment.value,
            price: this.refs.price.value
        }).then(result => {
            if (result.status === 200) {
                alert('Treatment Updated');
            }
            this.refs.id.value='';
            this.refs.condition_name.value='';
            this.refs.treatment.value='';
            this.refs.price.value='';

        }).catch(err => {
            alert(err);

        });

    }


    render(){
        return <div className="page">
            <form onSubmit={this.addTreat.bind(this) }>
                <br/><br/><br/>
                <label>Treatment ID</label>&nbsp;
                <input type="text" ref='id'/><br/><br/>
                <label>Condition Name</label>&nbsp;
                <input type="text" ref='condition_name'/><br/><br/>
                <label>Treatment</label>&nbsp;
                <input type="text" ref='treatment'/><br/><br/>
                <label>Price</label>&nbsp;
                <input type="text" ref='price'/><br/><br/>

                <br/><br/><br/>

                <button className='button' type="submit" >Add</button>&nbsp;&nbsp;
                <button className='button' type="submit" onClick={this.updateTreat.bind(this)}>Update Treatment</button>&nbsp;&nbsp;
                <button className='button' type="submit" onClick={this.autoFill.bind(this)}>AutoFill</button>

            </form>


        </div>
    }
}

