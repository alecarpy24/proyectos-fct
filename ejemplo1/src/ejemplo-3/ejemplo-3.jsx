import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Componente principal del juego
class Juego extends React.Component {
    render() {
        return (
            <div className="juego">
                <div className="tablero">
                    {/* Renderiza el componente Tablero que contiene la lógica del juego */}
                    <Tablero />
                </div>
            </div>
        );
    }
}

// Componente Cuadrado: representa una casilla del tablero
function Cuadrado(props) {
    return (
        // Cada cuadrado es un botón. Muestra su valor (X, O o vacío) y llama a la función onClick cuando se hace clic
        <button className='cuadrado' onClick={props.onClick}>{props.value}</button>
    )
}

// Componente Tablero: contiene el estado del juego y gestiona la interacción
class Tablero extends React.Component {
    constructor(props) {
        super(props);
        // Estado del componente Tablero: almacena las casillas (cuadrados) y el turno del siguiente jugador
        this.state = {
            cuadrados: Array(9).fill(null),  // Inicializa un array de 9 elementos con valor null (el tablero vacío)
            siguiente: true,  // Controla de quién es el turno; true es el jugador "X" y false es "O"
        };
    }
    
    // Método que se ejecuta cuando un jugador hace clic en una casilla
    handleClick(i) {
        // Crea una copia del array de cuadrados para no modificar el estado directamente
        const cuadrados = this.state.cuadrados.slice();

        // Si ya hay un ganador o la casilla ya está ocupada, no se hace nada
        if (conocerGanador(cuadrados) || cuadrados[i]) {
            return;
        }

        // Asigna "X" o "O" a la casilla dependiendo del turno
        cuadrados[i] = this.state.siguiente ? 'X' : 'O';

        // Actualiza el estado del componente con el nuevo tablero y cambia el turno al siguiente jugador
        this.setState({
            cuadrados: cuadrados,  // Nuevo estado del tablero con la casilla actualizada
            siguiente: !this.state.siguiente,  // Alterna el turno (si era X, ahora será O, y viceversa)
        });
    }

    // Método para crear un componente Cuadrado en la posición `i` del tablero
    dibujarCuadrado(i) {
        return (
            // Renderiza el componente Cuadrado con su valor y la acción de clic correspondiente
            <Cuadrado value={this.state.cuadrados[i]} onClick={() => this.handleClick(i)} />
        )
    }

    render() {
        // Verifica si hay un ganador llamando a la función conocerGanador
        const ganador = conocerGanador(this.state.cuadrados);

        // Variable para mostrar el mensaje en pantalla: quién es el ganador o quién es el próximo jugador
        let info;
        if (ganador) {
            // Si hay un ganador, muestra quién ganó
            info = 'Ganador: ' + ganador;
        } else {
            // Si no hay ganador, muestra quién es el siguiente en jugar (X u O)
            info = 'Siguiente jugador: ' + (this.state.siguiente ? 'Jugador X' : 'Jugador O');
        }

        // Renderiza el tablero con 3 filas, cada una con 3 cuadrados
        return (
            <div>
                {/* Muestra la información de quién juega o si hay un ganador */}
                <div className="estado">{info}</div>

                {/* Primera fila del tablero */}
                <div className="tablero-fila">
                    {this.dibujarCuadrado(0)}{this.dibujarCuadrado(1)}{this.dibujarCuadrado(2)}
                </div>

                {/* Segunda fila del tablero */}
                <div className="tablero-fila">
                    {this.dibujarCuadrado(3)}{this.dibujarCuadrado(4)}{this.dibujarCuadrado(5)}
                </div>

                {/* Tercera fila del tablero */}
                <div className="tablero-fila">
                    {this.dibujarCuadrado(6)}{this.dibujarCuadrado(7)}{this.dibujarCuadrado(8)}
                </div>
            </div>
        );
    }
}

// Función que verifica si hay un ganador en el juego
function conocerGanador(cuadrados) {
    // Combinaciones ganadoras posibles (filas, columnas, diagonales)
    const lineas = [
        [0, 1, 2], // Fila superior
        [3, 4, 5], // Fila central
        [6, 7, 8], // Fila inferior
        [0, 3, 6], // Columna izquierda
        [1, 4, 7], // Columna central
        [2, 5, 8], // Columna derecha
        [0, 4, 8], // Diagonal principal
        [2, 4, 6], // Diagonal secundaria
    ];

    // Recorre todas las combinaciones posibles para ver si alguna coincide
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];  // Obtiene los tres índices de una combinación ganadora
        // Verifica si en esas posiciones hay "X" o "O" iguales (es decir, si alguien ha ganado)
        if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
            return cuadrados[a];  // Si hay un ganador, devuelve "X" o "O"
        }
    }

    // Si no hay ganador, devuelve null
    return null;
}

// Exporta el componente principal del juego para usarlo en la aplicación
export default Juego;
