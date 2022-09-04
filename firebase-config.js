import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyAMhwGOTDfqI-LkN7Hhc5OMxEKW6hMj--I",
  authDomain: "my-first-project-d6b7a.firebaseapp.com",
  projectId: "my-first-project-d6b7a",
  storageBucket: "my-first-project-d6b7a.appspot.com",
  messagingSenderId: "73927423632",
  appId: "1:73927423632:web:00ea0176b0aa4edc834a15",
  measurementId: "G-17DGHRKEND",
};
// Initial

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new firebase.auth.GoogleAuthProvider();

// signInWithPopup(authentication, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//     console.log(user.displayName);
//     console.log(user.email);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
