import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/layout";

const Anecdotes = () => {
  const anecdotes = [
    "Intelligence is the ability to avoid doing work, yet getting the work done",
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program",
    "The most damaging phrase in the programming language is.. it’s always been done this way",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
    "Before software can be reusable it first has to be usable",
    "In order to be irreplaceable, one must always be different",
    "Experience is the name everyone gives to their mistakes.",
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const selectQuote = () => {
    var num = Math.random();
    var len = anecdotes.length;
    num = Math.round((len - 1) * num);
    if (num === selected) {
      num = Math.round((len - 1) * Math.random());
    }
    setSelected(num);
    console.log(selected);
  };

  const pressButton = (event) => {
    if (!event.repeat) {
      var button = document.getElementById("quoteButton");
      if (event.code === "Space") {
        button.click();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", pressButton);

    return () => {
      document.removeEventListener("keydown", pressButton);
    };
  });
  return (
    <Layout pageTitle="Anecdotes">
      <p style={{ fontFamily: "Verdana", fontStyle: "italic" }}>
        Click the button or press the spacebar key to view a different quote
      </p>
      <div style={{ height: 100 }}>
        <div style={{ width: "auto", height: "100%" }}>
          {anecdotes[selected]}
        </div>

        <Button
          id="quoteButton"
          onClick={() => selectQuote()}
          text="Change quote"
          color="red"
        />
      </div>
    </Layout>
  );
};

export default Anecdotes;
