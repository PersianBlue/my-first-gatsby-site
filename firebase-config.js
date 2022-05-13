import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyAgIDnlt9l2kXZgIzLT9D4b2Z1ncpWafzc",
  authDomain: "startingover-ef47c.firebaseapp.com",
  projectId: "startingover-ef47c",
  storageBucket: "startingover-ef47c.appspot.com",
  messagingSenderId: "856377363499",
  appId: "1:856377363499:web:fb19478fbcb08270612e6e",
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
