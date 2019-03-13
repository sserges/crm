import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBp6VcgU82Pg9jdctPnp5hYDd5CJxhg-W4",
  authDomain: "crm-linkedin-a8c64.firebaseapp.com",
  databaseURL: "https://crm-linkedin-a8c64.firebaseio.com",
  projectId: "crm-linkedin-a8c64",
  storageBucket: "crm-linkedin-a8c64.appspot.com",
  messagingSenderId: "909975699691"
};

firebase.initializeApp(config);

export default firebase;
