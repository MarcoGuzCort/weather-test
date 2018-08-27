import React, { Component } from 'react';
import CajaVacia from './components/CajaVacia';
import './App.css';

class App extends Component {
    render() {

        return ( 
        <div className = "App" >
            REACT APP DEL CLIMA!
            <CajaVacia></CajaVacia>
        </div>

        );
    }
}

export default App;