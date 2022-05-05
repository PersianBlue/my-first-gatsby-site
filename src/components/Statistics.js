import React from 'react';
import {table,td,th,tr,} from "./minimal-table.css";

const makeCell = (element) =>{
    return (
        <div>
            <td className = {td}>{element.text} </td>
            <td className = {td}>{element.value} </td>
        </div>
    )
}

const makeRows = (array)=>{
    return (array.map((element)=><tr className = {tr}> {makeCell(element)}</tr>))
}

const MinimalTable = ({good,neutral,bad,count,avg,positivity})=>{
    const arr = [
        {text: "Good:", value: good},
        {text: "Neutral:", value: neutral},
        {text: "Bad:", value: bad},
        {text: "Count:", value: count},
        {text: "Average:", value: avg},
        {text: "Positivity rate:", value: positivity}]  
    return(
        <table className = {table}>
            {makeRows(arr)}
        </table>
    )
}

export const Statistics = ({good,neutral,bad,count,avg,positivity}) => {
    console.log("We're in statistics")
    if (count) {
        return (
            <div>
                <h2>Feedback statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Responses count: {count}</p>
                <p>Average: {avg}</p>
                <p>Positivity rate: {positivity}%</p>

                <MinimalTable good = {good} bad = {bad} neutral = {neutral} avg = {avg} count = {count} positivity = {positivity} />
        
            </div>
        );
    }
    else {
        return (
            <div>
                <p>No feedback given as yet</p>
            </div>
        );
    }
};
