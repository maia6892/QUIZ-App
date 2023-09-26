import React from "react";
import Question from "./Question";

class Questions extends React.Component {
    render() {
        return (
            <div>
                {this.props.questions.map((el) => (
                    <Question 
                        key = {el.id}
                        question = {el}
                    />
                    
                ))
                
                
                
                }
            </div>
        );
    }
}

export default Questions;
