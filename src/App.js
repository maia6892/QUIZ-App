import React from "react";
import "./App.css";

class App extends React.Component {
    questions = [
        {
            id: 1,
            questionText: "1 + 3 = ???",
            answerOptions: [
                { answerText: "4", isCorrect: true },
                { answerText: "5", isCorrect: false },
                { answerText: "7", isCorrect: false },
                { answerText: "2", isCorrect: false },
            ],
        },
        {
            id: 2,
            questionText: "5 + 3 = ???",
            answerOptions: [
                { answerText: "9", isCorrect: false },
                { answerText: "8", isCorrect: true },
                { answerText: "10", isCorrect: false },
                { answerText: "7", isCorrect: false },
            ],
        },
        {
            id: 3,
            questionText: "4 + 2 = ???",
            answerOptions: [
                { answerText: "4", isCorrect: false },
                { answerText: "5", isCorrect: false },
                { answerText: "6", isCorrect: true },
                { answerText: "7", isCorrect: false },
            ],
        },
        {
            id: 4,
            questionText: "8 + 2 = ???",
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
            showStartButton: true,
        };
    }

    handleAnswerButtonClick = (isCorrect) => {
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
        if (isCorrect === true) {
            this.setState({
                score: this.state.score + 1,
            });
        }
    };

    render() {
        const { currentQuestion, showScore, score, showStartButton } =
            this.state;
        return (
            <div className="app">
                {showScore ? (
                    <div>
                        <div className="score-section">
                            You scored {score} out of {this.questions.length}
                        </div>
                        <button
                            onClick={() =>
                                this.setState({
                                    showScore: false,
                                    score: 0,
                                    currentQuestion: 0,
                                })
                            }
                        >
                            RESET
                        </button>
                    </div>
                ) : showStartButton ? (
                    <div className="start-section">
                        <p>Click to Start</p>
                        <button
                            onClick={() =>
                                this.setState({
                                    showStartButton: false,
                                })
                            }
                        >
                            START
                        </button>
                    </div>
                ) : (
                    <div className="question-section">
                        <div className="questions-count">
                            <span>Question {currentQuestion + 1}</span>/{" "}
                            {this.questions.length}
                        </div>
                        <div className="question-text">
                            {this.questions[currentQuestion].questionText}
                        </div>
                        <div className="answer-section">
                            {this.questions[currentQuestion].answerOptions.map(
                                (answerOption) => (
                                    <button
                                        onClick={() => {
                                            this.handleAnswerButtonClick(
                                                answerOption.isCorrect
                                            );
                                        }}
                                    >
                                        {answerOption.answerText}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
