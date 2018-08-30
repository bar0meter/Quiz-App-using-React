import React, { Component } from "react";

class Question extends Component {
  state = {
    answer: ""
  };

  handleAnswer = e => {
    this.setState({ answer: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.answer === "") {
      alert("Select an option before proceding");
      return;
    }
    this.props.onAnsSubmit(this.state.answer);
    this.setState({ answer: "" });
  };

  render() {
    const question = this.props.question.question;
    const options = this.props.question.options.map(option => {
      return (
        <div key={option} className="form-check-group">
          <input
            type="radio"
            className="mr-2"
            name={question}
            value={option}
            onChange={this.handleAnswer}
          />
          {option}
        </div>
      );
    });
    const button = this.props.question.options.length ? (
      <div className="btn btn-primary mt-2" onClick={this.handleSubmit}>
        Submit Answer
      </div>
    ) : (
      <div />
    );
    return (
      <div>
        <p>{question}</p>
        {options}
        {button}
      </div>
    );
  }
}

export default Question;
