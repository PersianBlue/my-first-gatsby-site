import React from 'react'
import {useState} from 'react';
const App = (props) => {
    const [counter, setCounter] = useState(0);
    const [stateVariable, stateSetter] = useState(0)
    setTimeout(
        ()=> stateSetter(stateVariable +1), 1000
    )
    //setTimeout( () => setCounter(counter -1), 2000)
    /*const handleClick = () =>{
        console.log('clicked');
    }*/
    return (
        <div>
            <p>We're live inside App.js</p>
            The count is: {counter}
            <p></p>
            <button onClick = {()=> setCounter(counter -1)}>Decrease </button>
            <button onClick ={() => setCounter(0)}>Reset </button>
            <button onClick = {() => setCounter(counter+1)}> Increase </button>
            <h2>This number will keep growing because I am mastering state</h2>
            <p style ={{color: 'red'}}>The number is: {stateVariable}</p>
        </div>
    )
}

export default App