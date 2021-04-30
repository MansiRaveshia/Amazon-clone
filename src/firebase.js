// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBwpfsSWOp49ryHv6zZyep_bcyCnPwK26Y",
    authDomain: "challenge-e5a7d.firebaseapp.com",
    projectId: "challenge-e5a7d",
    storageBucket: "challenge-e5a7d.appspot.com",
    messagingSenderId: "700195064609",
    appId: "1:700195064609:web:2a30477a2d610ca9374c60",
    measurementId: "G-EV200646F3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};