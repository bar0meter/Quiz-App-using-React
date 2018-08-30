import React, { Component } from "react";
import Question from "./Question";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      quiz: [],
      currentQues: {
        question: "",
        options: []
      },
      submittedAns: []
    };
  }

  componentWillMount() {
    fetch("https://opentdb.com/api.php?amount=2&category=31")
      .then(res => res.json())
      .then(data => {
        let quiz = this.formatQuiz(data["results"]);
        this.setState({ quiz: quiz });
        this.setState({ currentQues: quiz[this.state.index] });
        return;
      });
  }

  formatQuiz(quiz) {
    let temp_quiz = [];
    for (let ques of quiz) {
      let index = quiz.indexOf(ques);
      let correct_option = ques.correct_answer;
      let incorrect_options = ques.incorrect_answers;
      let options = [...incorrect_options, correct_option];
      this.shuffleArray(options);
      var currentQues = {
        id: index + 1,
        type: ques.type === "boolean" ? "True/False" : ques.type,
        question: this.formatText(ques.question),
        options: this.formatArray(options),
        correctAns: this.formatText(correct_option),
        difficulty: ques.difficulty
      };
      temp_quiz[index] = currentQues;
    }
    return temp_quiz;
  }

  formatText(text) {
    let element = document.createElement("textarea");
    element.innerHTML = text;
    let decode = element.value;
    return decode;
  }

  formatArray(array) {
    let temp = [];
    for (var i = 0; i < array.length; i++) {
      temp[i] = this.formatText(array[i]);
    }
    return temp;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  handleAnsSubmit = answer => {
    let index = this.state.index;
    let submittedAns = [...this.state.submittedAns];
    submittedAns.push({
      index: index,
      answer: answer,
      correctAns: this.state.quiz[index].correctAns
    });
    this.setState(
      {
        submittedAns: submittedAns
      },
      () => {
        index++;
        if (index === this.state.quiz.length) {
          alert("Quiz Ended");
          console.log(this.state.submittedAns);
          return;
        }
        this.setState({ index: index, currentQues: this.state.quiz[index] });
      }
    );
  };

  render() {
    if (this.state.index === this.state.quiz.length) return null;
    const question = this.state.currentQues;
    return (
      <div>
        <h2>Quiz</h2>
        <Question question={question} onAnsSubmit={this.handleAnsSubmit} />
      </div>
    );
  }
}

export default Quiz;
