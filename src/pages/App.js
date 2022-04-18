import React from 'react'
import {useState} from 'react';
const App = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseByOne = ()=> setCounter(counter +1);
    const decreaseByOne = ()=> setCounter(counter -1);
    const setToZero = () => setCounter(0);

    //Automatic counter
    const [stateVariable, stateSetter] = useState(0)
    setTimeout(
        ()=> stateSetter(stateVariable +1), 1000
    )
    //Components to display button and counter
    const Button = ({onClick, text}) =>(
        <button onClick = {onClick}> {text} </button>
    )
    const Display = ({counter}) => <div> The count is: {counter}</div>
    
    return (
        <div>
            <p>We're live inside App.js </p>
            <Display counter = {counter}/>
            <p></p>
            <Button onClick = {increaseByOne} text ="increase" />
            <Button onClick ={setToZero} text = "reset"/>
            <Button onClick = {decreaseByOne} text = "decrease"/>
            <h2>This number will keep growing because I am mastering state</h2>
            <p style ={{color: 'red'}}>The number is: {stateVariable}</p>
        </div>
    )
}

export default App