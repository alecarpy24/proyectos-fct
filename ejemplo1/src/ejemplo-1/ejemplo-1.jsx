import React from 'react';
import ReactDOM from 'react-dom/client';
import'./index.css';

class Ejemplo1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { contador: 0 };
    }
    render() {
      return (
        <div>
          <Contador contador={this.state.contador} />
          <BotonIncrementar contador={this.state.contador} incrementar={(contador) => this.setState({contador})} />
          <BotonDecrementar contador={this.state.contador} decrementar={(contador) => this.setState({contador})} />
        </div>
      );
    }
  }
  function log(mensaje) {
    console.log(mensaje);
  }
  
  const Contador = ({ contador }) => {
    return (
      <div className='contador'>Contador actual: {contador}</div>
    )
  }
  const BotonIncrementar = ({ contador, incrementar }) => {
    return (
      <button onClick={() => incrementar(contador + 1)}>+</button>
    )
  }
  
  const BotonDecrementar = ({ contador, decrementar }) => {
    return (
      <button onClick={() => decrementar(contador - 1)}>-</button>
    )
  }

export default Ejemplo1;