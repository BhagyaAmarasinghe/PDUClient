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
        return <div className="page">
            <form onSubmit={this.addDrug.bind(this) }>
                <br/><br/><br/>
                <label>ID</label>&nbsp;
                <input type="text" ref='id'/><br/><br/>
                <label>Name</label>&nbsp;
                <input type="text" ref='name'/><br/><br/>
                <label>Type</label>&nbsp;
                <input type="text" ref='type'/><br/><br/>
                <label>Price</label>&nbsp;
                <input type="text" ref='price'/><br/><br/>
                <label>Prescribed For</label>&nbsp;
                <input type="text" ref='prescribed_for'/>
                <br/><br/><br/>

                <button type="submit" className="button" >Add</button>&nbsp;&nbsp;
                <button type="submit" className="button" onClick={this.updateDrug.bind(this)}>Update Drug</button>&nbsp;&nbsp;
                <button type="submit" className="button" onClick={this.autoFill.bind(this)}>AutoFill</button>

            </form>


        </div>
    }
}

export default AddDrug;