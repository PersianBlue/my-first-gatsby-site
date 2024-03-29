import React from "react";
import Layout from "../components/Layout/layout";
import { useState } from "react";
import { Statistics } from "../components/Statistics/Statistics";
import { Button } from "../components/Button/Button";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [count, setCounter] = useState(0);
  const [avg, setAverage] = useState(0);
  const [positivity, setPos] = useState(0);

  const calcPos = () => {
    const pos_rate = (good / count) * 100;
    let result = Math.trunc(pos_rate);
    return setPos(result);
  };
  const controller = (value) => {
    increment(value);
    calcPos();
    return calcAverage();
  };

  const updateCounts = () => {
    setCounter(count + 1);
  };

  const calcAverage = () => {
    let average = (good - bad) / count;
    average = Math.round(100 * average);
    average = average / 100;
    //onsole.log(average,good,bad,count);
    return setAverage(average);
  };
  const increment = (value) => {
    //console.log("Inside increment")
    updateCounts();
    switch (value) {
      case "good":
        //console.log("GOOD");
        return setGood(good + 1);
      case "neutral":
        return setNeutral(neutral + 1);
      case "bad":
        return setBad(bad + 1);
      default:
        return null;
    }
  };

  return (
    <div>
      <Layout pageTitle="Feedback">
        <h1> Give Feedback here:</h1>
        <div style={{ display: "inline-block" }}>
          <Button
            color="green"
            onClick={() => controller("good")}
            text="good"
          />
          <Button
            color="blue"
            onClick={() => controller("neutral")}
            text="neutral"
          />
          <Button color="red" onClick={() => controller("bad")} text="bad" />
        </div>

        <br></br>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          count={count}
          avg={avg}
          positivity={positivity}
        />
      </Layout>
    </div>
  );
};

export default Feedback;
