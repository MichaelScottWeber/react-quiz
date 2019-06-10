import React from 'react';
import Answer from './Answer';
import './Question.css';

const Question = (props) => {
    return (
        <div className="question">
            <div className="top-info">
                <div className="line"></div>
                <p>{props.currentQuestion} of {props.totalQuestions} </p>
                <div className="line"></div>
            </div>
            <div className="img-container">
                <img className="img" src={props.image} /> 
            </div>
            <div className="question-group">
                <h2 className="question-text">{props.question}</h2>
                <div className="answer-group">
                    <Answer 
                        text={props.answer1} 
                        onAnswerClick={props.onAnswerClick}
                    />
                    <Answer 
                        text={props.answer2} 
                        onAnswerClick={props.onAnswerClick}
                    />
                    <Answer 
                        text={props.answer3} 
                        onAnswerClick={props.onAnswerClick}
                    />
                    <Answer 
                        text={props.answer4} 
                        onAnswerClick={props.onAnswerClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Question;