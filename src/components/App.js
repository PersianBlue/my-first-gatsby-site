import React from 'react'
import {useState} from 'react';
import Button from "./Button"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMhwGOTDfqI-LkN7Hhc5OMxEKW6hMj--I",
  authDomain: "my-first-project-d6b7a.firebaseapp.com",
  projectId: "my-first-project-d6b7a",
  storageBucket: "my-first-project-d6b7a.appspot.com",
  messagingSenderId: "73927423632",
  appId: "1:73927423632:web:00ea0176b0aa4edc834a15",
  measurementId: "G-17DGHRKEND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const App = (props) => {
    const [paraColor, changeColor] = useState("black")
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
    
    
    const Display = ({counter}) => <div> The count is: {counter}</div>
    return (
        <div>
            <p>We're live inside App.js where some button components are controlling a counter </p>
            <Display counter = {counter}/>
            <p>Try clicking the buttons!</p>
            <p></p>
            <Button color = "green" onClick = {increaseByOne} text ="increase" />
            <Button color = "blue" onClick ={setToZero} text = "reset"/>
            <Button color = "red" onClick = {decreaseByOne} text = "decrease"/>
            <p>This next number below will keep growing because I am mastering state</p>
            <p style ={{color: paraColor}}>The number is: {stateVariable}</p>
        </div>
    )
}

export default App