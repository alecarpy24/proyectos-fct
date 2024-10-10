import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';
import './app.css';
import { render } from '@testing-library/react';

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grados: 0,
            farenheits: 0,
        };
    }

    convertir(temperatura, valor){
        if (temperatura === "grado") {
            this.setState({ grados: valor });
            this.setState({ farenheits: valor * 33.8 });
        }
        if (temperatura==="farenheit"){
            this.setState({grados:valor/33.8});
            this.setState({farenheits:valor});
        }
    }
    
    render(){
        return(
    
            <div className='App'>
                <table>
                    <thead>
                        <tr><td>Grados</td> <td>Farenheits</td></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Temperatura temperatura="grado" value={this.state.grados} convertir={(temperatura, valor) => this.convertir(temperatura,valor)}/> </td>
                            <td><Temperatura temperatura="farenheit" value={this.state.farenheits} convertir={(temperatura,valor)=> this.convertir(temperatura,valor)}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Temperatura extends Component{
    handleChange(evt){
        this.props.convertir(this.props.temperatura, evt.target.value);
    }
    render(){
        return(
            <input type="number" value={this.props.value} onChange={this.handleChange.bind(this)}/>
        );
    }
}

export default App1;