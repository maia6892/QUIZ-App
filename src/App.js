import React from "react";
import Questions from "./components/Questions";
import "./App.css";

class App extends React.Component {
    questions = [
        {
            id: 1,
            question: "1 + 3",
            answers: [3, 4, 5],
            rightAnswer: 4,
        },
        {
            id: 2,
            question: "2 + 4",
            answers: [5, 6, 7],
            rightAnswer: 6,
        },
        {
            id: 3,
            question: "3 + 7",
            answers: [9, 10, 11],
            correctAnswer: 10,
        },
    ];
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            setCurrentQuestion: 0,
        };

    }
    render() {
        return (
            <div>
                <Questions questions = {this.state.questions} />
            </div>
        );
    }
}

export default App;
