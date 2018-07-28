import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="union">hello world</div>
        <div className="union2">Hello world</div>
      </div>
    );
  }
}
/*
.welcome {
  color:red;
}
*/
export default App;
