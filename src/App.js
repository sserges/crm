import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBp6VcgU82Pg9jdctPnp5hYDd5CJxhg-W4",
      authDomain: "crm-linkedin-a8c64.firebaseapp.com",
      databaseURL: "https://crm-linkedin-a8c64.firebaseio.com",
      projectId: "crm-linkedin-a8c64",
      storageBucket: "crm-linkedin-a8c64.appspot.com",
      messagingSenderId: "909975699691"
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
