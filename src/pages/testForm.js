import React from "react";
import Layout from "../components/Layout/layout";
import Note from "../components/TestForm/Note";
import "../components/indexBackground.css";
import { useState, useEffect } from "react";
import axios from "axios";

const defaultNotes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

const TestForm = () => {
  const [newNote, setNewNote] = useState("[]");
  const [notes, setNotes] = useState(defaultNotes);
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const createNewNote = () => {
    const newNoteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    return newNoteObject;
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    const noteObject = createNewNote();

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };
  /*const promise = axios.get("http://localhost:3001/notes");

  promise.then((response) => {
    console.log(response);
  });

  axios.get("http://localhost:3001/notes").then((response) => {
    const notes = response.data;
    console.log(notes);
  });*/
  const hook = () => {
    console.log("effect");

    const eventHandler = (response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    };

    const promise = axios.get("http://localhost:3001/notes");
    promise.then(eventHandler);
  };

  useEffect(hook, []);

  console.log("render", notes.length, "notes");

  return (
    <>
      <div
        id="Notes"
        style={{ display: "inline-block", justifyContent: "center" }}
      >
        <Layout pageTitle="TestForm"></Layout>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? "important" : "all"}
          </button>
        </div>
        <ul>
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
      <div id="phonebook"></div>
    </>
  );
};

export default TestForm;
