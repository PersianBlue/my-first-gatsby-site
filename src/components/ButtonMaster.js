import React from 'react'
import Button from "./Button"
import {useState} from 'react'
import "./buttonMasterCss.css"

const History = (props) =>{
    if (props.allClicks.length ===0){
        return (
            <div>
                Show the history by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            Button Press History: {props.allClicks.join(' ')}
        </div>
    )
}

const ButtonMaster = () =>{
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftClick = ()=>{
        setAll(allClicks.concat("L"));
        setLeft(left+1)
    }
    const handleRightClick =() =>{
        setAll(allClicks.concat("R"))
        setRight(right+1)
    }

    /*const [clicks, setClickCount] = useState(
        {
        left: 0,
        right: 0
    })
    const handleLeftClick = () =>{
            setClickCount({...clicks, left: clicks.left + 1 })
    }
    const handleRightClick = () =>{
        setClickCount({...clicks, right: clicks.right +1})
    }*/

   return( 
   <div>
       <p>Now we experiment with managing complex state, and keeping track of two buttons</p>
       <p>Left {left} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Right {right}</p>
        <Button id = "left" color = "orange" onClick ={handleLeftClick} text="Left"/>  
        <Button id = "right" color = "black" onClick = {handleRightClick} text="Right"/>  
        <h3>Below, we maintain the history of clicks thus far</h3>
        <History allClicks = {allClicks}/>
    </div>)
}

export default ButtonMaster