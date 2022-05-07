import React from 'react';
import Layout from "../components/layout"
import Form from "../components/Form"

/*
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
*/
const loginPage = ()=>{
    return(
        <>
        <Layout>
        <h1> This is me login page </h1>
        <Form/> 
        </Layout>
        </>
    )
}

export default loginPage