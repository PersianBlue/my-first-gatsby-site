import React from 'react'
import Layout from "../components/layout"
import {useState} from 'react'


const Feedback= () =>{
    const[good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const[count, setCounter] = useState(0);
    const [avg, setAverage] = useState(0);
    const [positivity, setPos] = useState(0);

    const calcPos = () =>{
        const pos_rate = (good/count)*100
        let result = Math.trunc(pos_rate);
        return setPos(result);

    }
    const controller = (value)  =>{
        increment(value)
        calcPos();
        return calcAverage()
    }

    const updateCounts = ()=>{
        setCounter(count+1)
    }

    const calcAverage = () =>{
        const average = (good - bad)/count
        //onsole.log(average,good,bad,count);
        return setAverage(average);
    }
    const increment = (value) =>{
        //console.log("Inside increment")
        updateCounts();
        switch(value){
            case "good":
                //console.log("GOOD");
                return setGood(good +1)
                break;
            case 'neutral':
                return setNeutral(neutral +1);
                break;
            case "bad":
                return setBad(bad +1);
                break;
            default: return null;
        }
        return;

    }

    return (
        <div>
            <Layout>
            <h1> Give Feedback here:</h1>
            <button onClick = {()=> controller("good")} text = "good"> Good </button>
            <button onClick = {()=>controller("neutral")} text = "neutral">Neutral </button>
            <button onClick = {()=>controller("bad")} text = "bad">Bad </button>
            <br></br>
            <h2>Feedback statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Responses count: {count}</p>
            <p>Average: {avg}</p>
            <p>Positivity rate: {positivity}%</p>
            </Layout>
        </div>
    )

}

export default Feedback