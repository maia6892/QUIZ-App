import React from "react";

class Question extends React.Component {
    question = this.props.question;
    render() {
        return (
            <div>
                <p>{this.question.question}</p>
                <div>
                    <p>{this.question.answers[0]}</p>
                    <p>{this.question.answers[1]}</p>
                    <p>{this.question.answers[2]}</p>
                </div>
                <button>NEXT</button>
            </div>
        );
    }
}

export default Question;