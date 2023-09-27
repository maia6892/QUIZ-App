// import { useState } from "react";
import React from "react";
import "./App.css";

class App extends React.Component {
    questions = [
        {
            questionText: "1 + 3 = ?",
            answerOptions: [
                { answerText: "4", isCorrect: true },
                { answerText: "5", isCorrect: false },
                { answerText: "7", isCorrect: false },
                { answerText: "2", isCorrect: false },
            ],
        },
        {
            questionText: "5 + 3 = ?",
            answerOptions: [
                { answerText: "9", isCorrect: false },
                { answerText: "8", isCorrect: true },
                { answerText: "10", isCorrect: false },
                { answerText: "7", isCorrect: false },
            ],
        },
        {
            questionText: "4 + 2 = ?",
            answerOptions: [
                { answerText: "4", isCorrect: false },
                { answerText: "5", isCorrect: false },
                { answerText: "6", isCorrect: true },
                { answerText: "7", isCorrect: false },
            ],
        },
        {
            questionText: "8 + 2 = ?",
            answerOptions: [
                { answerText: "12", isCorrect: false },
                { answerText: "11", isCorrect: false },
                { answerText: "9", isCorrect: false },
                { answerText: "10", isCorrect: true },
            ],
        },
    ];
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            showScore: false,
            score: 0,
        };
    }
    initialState = {
        setCurrentQuestion: 0,
        setShowScore: false,
        setScore: 0,
    };

    handleAnswerButtonClick = () => {
        const nextQuestion = this.state.currentQuestion + 1;
        if (nextQuestion < this.questions.length) {
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,
            });
        } else {
            this.setState({
                showScore: true,
            });
        }
    };

    checkIsCorrect = (isCorrect) => {
        if (isCorrect === true) {
            this.setState({
                score: this.state.score + 1,
            });
        }
    };

    restartQuiz = () => {
        
    };

    render() {
        return (
            <div className="app">
                {this.state.showScore ? (
                    <div>
                        <div>
                            You scored {this.state.score} out of{" "}
                            {this.questions.length}
                        </div>
                        <button onClick={() => this.restartQuiz}>RESET</button>
                    </div>
                ) : (
                    <div className="question-section">
                        <div className="qustions-count">
                            <span>
                                Question {this.state.currentQuestion + 1}
                            </span>
                            /{this.questions.length}
                        </div>
                        <div className="question-text">
                            {
                                this.questions[this.state.currentQuestion]
                                    .questionText
                            }
                        </div>
                        <div className="answer-section">
                            {this.questions[
                                this.state.currentQuestion
                            ].answerOptions.map((answerOption) => (
                                <button
                                    onClick={() =>
                                        this.checkIsCorrect(
                                            answerOption.isCorrect
                                        )
                                    }
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                        <div className="button-section">
                            <button onClick={this.handleAnswerButtonClick}>
                                {this.state.currentQuestion ===
                                this.questions.length - 1
                                    ? "FINISH"
                                    : "NEXT"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
