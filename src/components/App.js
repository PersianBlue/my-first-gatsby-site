import React from 'react'
import {useState} from 'react';

const Button = ({onClick, text}) =>(
    <button onClick = {onClick}> {text} </button>
)

const App = (props) => {
    const [paraColor, changeColor] = useState("black")
    //console.log(paraColor.color)
    const [counter, setCounter] = useState(0);
    const increaseByOne = ()=> setCounter(counter +1);
    const decreaseByOne = ()=> setCounter(counter -1);
    const setToZero = () => setCounter(0);
    //Automatic counter
    const [stateVariable, stateSetter] = useState(0)
    setTimeout( ()=> {
        switch(true){
            case(stateVariable%5===0): changeColor("blue"); break;

            case(stateVariable%3===0): changeColor("red"); break;

            case(stateVariable%4===0): changeColor("green"); break;

            default: break;
        }
        
        return (stateSetter(stateVariable +1))}
    
    
    ,1000)
    //Components to display button and counter
    /*const colorChanger = () =>{
        if(stateVariable%5===0){
            setTimeout( ()=>changeColor({...paraColor, color: "blue"}),1000)
    
        }
        else if(stateVariable%3===0){
            setTimeout( ()=>changeColor({...paraColor, color: "green"}),1000)
    
        } else{
            setTimeout( ()=>changeColor({...paraColor, color: "red"}),1000)
        }
    }*/
    //colorChanger();
    
    const Display = ({counter}) => <div> The count is: {counter}</div>
    return (
        <div>
            <p>We're live inside App.js where some button components are controlling a counter </p>
            <Display counter = {counter}/>
            <p>Try clicking the buttons!</p>
            <p></p>
            <Button onClick = {increaseByOne} text ="increase" />
            <Button onClick ={setToZero} text = "reset"/>
            <Button onClick = {decreaseByOne} text = "decrease"/>
            <p>This next number below will keep growing because I am mastering state</p>
            <p style ={{color: paraColor}}>The number is: {stateVariable}</p>
        </div>
    )
}

export default App