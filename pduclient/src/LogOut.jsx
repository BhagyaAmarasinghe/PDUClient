
import React, {Component} from 'react';
import  ReactDOM from 'react-dom';

import './App.css';
import App from "./App";



export default class LogOut extends Component {

    constructor(props){
        super(props);
        ReactDOM.render(<App/>,document.getElementById('root'))

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title">Progressive Care Unit</h1>
                </header>

            </div>

        );
    }

}
