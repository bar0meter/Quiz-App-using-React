import React, { Component } from "react";

class Quiz extends Component {
  state = {
    quiz: []
  };

  componentWillMount() {
    fetch("https://opentdb.com/api.php?amount=10&category=31")
      .then(res => res.json())
      .then(data => {
        let quiz = this.formatQuiz(data["results"]);
        this.setState({ quiz: quiz });
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

  render() {
    return (
      <div>
        <p>Quiz</p>
        {console.log(this.state.quiz)}
      </div>
    );
  }
}

export default Quiz;
