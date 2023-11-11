import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const questions = [
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

    const savedUsers = localStorage.getItem("users");
    const [users, setUsers] = useState(() => {
        if (savedUsers) {
            return JSON.parse(savedUsers);
        } else {
            return [];
        }
    });
    const [user, setUser] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showStartButton, setShowStartButton] = useState(true);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    function handleFormSubmit(e) {
        e.preventDefault();
        if (user !== "") {
            setUsers([
                ...users,
                {
                    id: users.length + 1,
                    username: user.trim(),
                    score: score,
                },
            ]);
        }
        setUser("");
        setScore(0);
        // setShowStartButton(false);
        setCurrentQuestion(0);
        setShowStartButton(true);
        setShowScore(false);
    }

    const handleAnswerButtonClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
        if (isCorrect === true) {
            setScore(score + 1);
        }
    };

    function sortUsers(user) {
        return user.sort((a, b) => {
            return b.score - a.score;
        });
    }

    return (
        <div className="app">
            <h1 className="quiz-heading heading">QUIZ</h1>
            <div className="app-body">
                {showScore ? (
                    <form onSubmit={handleFormSubmit}>
                        <div className="score-section">
                            You scored {score} out of {questions.length}
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    value={user}
                                    className="form-control"
                                    id="inputEmail3"
                                    placeholder="Username"
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            /* onClick={() => {
                                setShowScore(false);
                                // setScore(0);
                                setCurrentQuestion(0);
                                setShowStartButton(true);
                                // setUser("");
                            }} */
                        >
                            SUBMIT
                        </button>
                    </form>
                ) : showStartButton ? (
                    <div className="start-section">
                        <p>Click to Start</p>

                        <button
                            type="submit"
                            onClick={() => setShowStartButton(false)}
                        >
                            START
                        </button>
                    </div>
                ) : (
                    <div className="question-section">
                        <div className="questions-count">
                            <span>Question {currentQuestion + 1}</span>/{" "}
                            {questions.length}
                        </div>
                        <div className="question-text">
                            {questions[currentQuestion].questionText}
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map(
                                (answerOption) => (
                                    <button
                                        className="answer-button"
                                        onClick={() => {
                                            handleAnswerButtonClick(
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

            <div className="leaderboard">
                <h2 className="leaderboard-heading heading">Leaderboard</h2>
                <ol className="leaderboard-list">
                    {sortUsers(users).map((user) => (
                        <li className="leaderboard-list-item" key={user.id}>
                            {user.username}: {user.score}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

/* class App extends React.Component {
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
} */

export default App;
