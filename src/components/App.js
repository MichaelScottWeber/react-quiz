import React from 'react';
import quizInfo from '../quizInfo';
import Intro from './Intro';
import Question from './Question';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Final from './Final';
import './App.css';

class App extends React.Component {
    state = {
        currentQuestion: 0,
        totalCorrect: 0,
        display: 0,
    }

    nextQuestion = () => {
        if (this.state.currentQuestion < quizInfo.questions.length) {
            let counter = this.state.currentQuestion;
            this.setState({
                display: 1,
                currentQuestion: counter + 1
            })
        } else {
            this.setState({ display: 4 })
        }
    }

    onAnswerClick = (answer) => {
        if (answer === quizInfo.questions[this.state.currentQuestion - 1].correctAnswer) {
            this.setState({ 
                display: 2,
                totalCorrect: this.state.totalCorrect + 1, 
            })
        } else {
            this.setState({ display: 3 })
        }
    }

    takeQuizAgain = () => {
        this.setState({
            currentQuestion: 0,
            totalCorrect: 0,
            display: 0,
        })
    }

    percent = (correct, total) => {
        return (
            Math.round((correct / total) * 100)
        );
    }
    
    render() {
        if (this.state.display === 0) {
            return (
                <div className="app">
                    <div>
                        <Intro 
                            totalQuestions={quizInfo.questions.length}
                            title={quizInfo.title}
                            message={quizInfo.intro.message}
                            nextQuestion={this.nextQuestion}
                        />
                    </div>
                </div>
            )
        } else if (this.state.display === 1) {
            return (
                <div className="app">
                    <div>
                        <Question 
                            currentQuestion={this.state.currentQuestion}
                            totalQuestions={quizInfo.questions.length}
                            image={quizInfo.questions[this.state.currentQuestion - 1].image}
                            question={quizInfo.questions[this.state.currentQuestion - 1].question}
                            answer1={quizInfo.questions[this.state.currentQuestion - 1].answer1}
                            answer2={quizInfo.questions[this.state.currentQuestion - 1].answer2}
                            answer3={quizInfo.questions[this.state.currentQuestion - 1].answer3}
                            answer4={quizInfo.questions[this.state.currentQuestion - 1].answer4}
                            onAnswerClick = {this.onAnswerClick}
                            nextQuestion={this.nextQuestion}
                        />
                    </div>
                </div>
            )
        } else if (this.state.display === 2) {
            return (
                <div className="app">
                    <div>
                        <Correct
                            currentQuestion={this.state.currentQuestion}
                            totalQuestions={quizInfo.questions.length}
                            image={quizInfo.correct.image}
                            message={quizInfo.correct.message}
                            nextQuestion={this.nextQuestion}
                        />
                    </div>
                </div>
            )
        } else if (this.state.display === 3) {
            return (
                <div className="app">
                    <div>
                        <Incorrect
                            currentQuestion={this.state.currentQuestion}
                            totalQuestions={quizInfo.questions.length}
                            image={quizInfo.incorrect.image}
                            message={quizInfo.incorrect.message}
                            nextQuestion={this.nextQuestion}
                        />
                    </div>
                </div>
            )
        } else if (this.state.display === 4) {
            return (
                <div className="app">
                    <div>
                        <Final 
                            image={quizInfo.final.image}
                            message={quizInfo.final.message}
                            totalCorrect={this.state.totalCorrect}
                            totalQuestions={quizInfo.questions.length}
                            percentCorrect={this.percent(this.state.totalCorrect, quizInfo.questions.length)}
                            takeQuizAgain={this.takeQuizAgain}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default App;