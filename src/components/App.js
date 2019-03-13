import React, { Component } from "react";
import "./App.css";

import firebase from "firebase";

import data from "../data.json";

import Grid from "./Grid";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

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
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">
                Contacts
              </a>
            </div>
          </nav>
        </div>
        <div>
          <Form />
          <Grid items={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
