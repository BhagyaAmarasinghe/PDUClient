import React, {Component} from 'react';
import axios from 'axios';


var Base=require('./Statics.Common');



class CalculateBill extends Component{

    constructor(props){
        super(props);
        this.state = {
            arr: [],
            tests:[],
            drugs:[],
            treat:[],
            testTot:[],
             dtotal:0


        };

    }


    autoFill(event) {
        event.preventDefault();

        axios.get(Base.API + '/PatientDetails/'+this.refs.id.value).then(result => {
            //debugger;
            if (result.status === 200) {

                this.setState({
                    arr:result.data.data
                })

            }
            this.state.arr.map(arr=>{
                this.refs.Pname.value=arr.Pname;
                this.refs.Date.value=arr.Date;
                this.refs.Drugs.value=arr.Drugs;
                this.refs.Tests.value=arr.Tests;
                this.refs.Treatments.value=arr.Treatments;
            });



        }).catch(err => {
            alert(err);

        });

    }

    getDrugsTotal(event) {
        event.preventDefault();
        var drugs = this.refs.Drugs.value;
        var splitDrugs = drugs.split(',');
        var total=0;
        var x =0;
        //debugger;
        for (var i = 0; i < splitDrugs.length; i++) {

            axios.get(Base.API + '/Drugs/' + splitDrugs[i]).then(result => {

                if (result.status === 200) {
                    this.setState({
                                drugs:result.data.data
                            });
                    this.state.drugs.map(function (drug) {
                        total = total+ parseFloat(drug.price)
                    });
                x++;
                    if(x===splitDrugs.length){
                        this.subDrug(total)
                    }
                }
            }).catch(err => {
                alert(err);
            });
        }
    }

    subDrug(total){
        document.getElementById("DrugTot").value=total;
    }
    getTestsTotal(event) {
        event.preventDefault();
        var tests = this.refs.Tests.value;
        var splitTests = tests.split(',');
        var total=0;
        var x =0;



        console.log(splitTests);
        for (var i = 0; i < splitTests.length; i++) {

            axios.get(Base.API + '/Tests/' + splitTests[i]).then(result => {
                //debugger;
                if (result.status === 200) {
                    this.setState({
                        tests:result.data.data
                    });
                    this.state.tests.map(function (test) {
                        //console.log(test.t_price);
                        total = total+ test.t_price;
                    });


                    x++;
                    if(x===splitTests.length){
                        this.subTest(total)
                    }
                }
            }).catch(err => {
                alert(err);

            });
        }
    }

    subTest(total){
        document.getElementById("TestTot").value=total;
    }

    getTreatTotal(event) {
        event.preventDefault();
        var treats = this.refs.Treatments.value;
        var splitTreats = treats.split(',');
        var total=0;
        var x =0;
        //debugger;
        //console.log(splitTreats);
        for (var i = 0; i < splitTreats.length; i++) {

            axios.get(Base.API + '/Treatments/' + splitTreats[i]).then(result => {
                //debugger;
                if (result.status === 200) {
                    //debugger;
                    this.setState({
                        treat:result.data.data
                    });
                    this.state.treat.map(function (treat) {
                        total = total+ parseFloat(treat.price);
                        console.log(treat.price);
                    });

                    x++;
                    if(x===splitTreats.length){
                        this.subTreat(total)
                    }
                }
            }).catch(err => {
                alert(err);

            });
        }
    }

    subTreat(total){
        document.getElementById("TreatTot").value=total;
    }

    subTotal(event){
        event.preventDefault();
        var treatTotal=parseFloat(document.getElementById("TreatTot").value);
        var drugTotal=parseFloat(document.getElementById("DrugTot").value);
        var testTotal=parseFloat(document.getElementById("TestTot").value);

        //debugger;
        var SubTot=treatTotal+drugTotal+testTotal;
        console.log(SubTot);
        document.getElementById("SubTotal").value=SubTot;
    }




    render(){
        return <div className="page">
            <form >
                <br/><br/><br/>
                <label>ID</label>&nbsp;
                <input type="text" ref='id'/><br/><br/>
                <label>Name</label>&nbsp;
                <input type="text" ref='Pname'/><br/><br/>
                <label>Registered Date</label>&nbsp;
                <input type="text" ref='Date'/><br/><br/>
                <label>Drugs</label>&nbsp;
                <input type="text" ref='Drugs'/>&nbsp;
                <button type="submit" className="button" onClick={this.getDrugsTotal.bind(this)}>Drugs Total</button>&nbsp;
                <input type="text" id="DrugTot" /><br/><br/>
                <label>Tests</label>&nbsp;
                <input type="text" ref='Tests'/>&nbsp;
                <button type="submit" className="button" onClick={this.getTestsTotal.bind(this)}>Tests Total</button>&nbsp;
                <input type="text" id="TestTot" /><br/><br/>
                <label>Treatments</label>&nbsp;
                <input type="text" ref='Treatments'/>&nbsp;
                <button type="submit" className="button" onClick={this.getTreatTotal.bind(this)}>Treatments Total</button>&nbsp;
                <input type="text" id="TreatTot" /><br/><br/>
                <br/><br/><br/>
                <label>Sub Total: </label>&nbsp;
                <input type="text" id="SubTotal" /><br/><br/>
                <br/><br/><br/>


                <button type="submit" className="button" onClick={this.autoFill.bind(this)}>AutoFill</button>



                <button type="submit" className="button" onClick={this.subTotal.bind(this)}>Calculate Total</button>

            </form>

        </div>
    }
}

export default CalculateBill;