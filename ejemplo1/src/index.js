import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }
  render() {
    return (
      <div>
        <Contador contador={this.state.contador} />
        <BotonIncrementar contador={this.state.contador} incrementar={(contador) => this.setState({contador})}/>
          <BotonDecrementar contador={this.state.contador} decrementar={(contador) => this.setState({contador})}/>
      </div>
    );
  }
}

const Contador = ({ contador }) => {
  return (
    <div className='contador'>Contador actual: {contador}</div>
  )
}
const BotonIncrementar =({contador, incrementar}) =>{
  return(
    <button onClick={() =>incrementar(contador+1)}>+</button>
  )
}

const BotonDecrementar =({contador, decrementar}) =>{
  return(
    <button onClick={() => decrementar(contador - 1)}>-</button>
  )
}
//------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
