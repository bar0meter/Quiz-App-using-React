import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {
    error: ""
  };

  handleCheck = () => {
    let agree = document.getElementById("agree");
    if (agree.checked) {
      this.setState({
        error: ""
      });
    } else {
      this.setState({
        error: "Accept ther terms and condition before proceding"
      });
    }
  };

  startQuiz = () => {
    let agree = document.getElementById("agree");
    if (!agree.checked) {
      this.setState({
        error: "Accept ther terms and condition before proceding"
      });
    } else {
      console.log("Quiz Started");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="nav nav-tabs bg-dark">
          <div className="nav-item">
            <a href="#" className="nav-link active">
              Home
            </a>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              About Us
            </a>
          </div>
        </div>
        <div className="card mx-auto">
          <div className="card-header text-center">
            <h3>Quiz Rules</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>Total 10 Questions</li>
              <li>All Questions are compulsory</li>
              <li>+1 for correct answer</li>
              <li>No Negative Markings</li>
            </ul>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={this.handleCheck}
                id="agree"
              />
              <label className="form-check-label">
                Accept Terms and Conditions
              </label>
            </div>
            <small className="error text-danger">{this.state.error}</small>
            <button
              className="btn btn-success mt-4"
              type="button"
              onClick={this.startQuiz}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
