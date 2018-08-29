import React, { Component } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Quiz from "./components/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login /> */}
        <Quiz />
      </div>
    );
  }
}

export default App;
