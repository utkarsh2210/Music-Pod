import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: process.env.MUSIC_POD_API_KEY,
  authDomain: process.env.MUSIC_POD_AUTH_DOMAIN,
  databaseURL: process.env.MUSIC_POD_DATABASE_URL,
  projectId: "ipod-utkarsh",
  storageBucket: "ipod-utkarsh.appspot.com",
  messagingSenderId: process.env.MUSIC_POD_SENDER_ID,
  appId: process.env.MUSIC_POD_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
