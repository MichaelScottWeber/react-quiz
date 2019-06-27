import React from 'react';
import {Spring} from 'react-spring/renderprops';
import Answer from './Answer';
import './Question.css';

const Question = ({ currentQuestion, totalQuestions, image, question, answer1, answer2, answer3, answer4, onAnswerClick }) => {
    return (
        <div className="question">
            <div className="top-info">
                <div className="line"></div>
                <p>{currentQuestion} of {totalQuestions} </p>
                <div className="line"></div>
            </div>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >
                {props => (
                    <div 
                        style={props}
                        className="img-container"
                    >
                        <img className="img" src={image} /> 
                    </div>
                )}
            </Spring>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >
                {props => (
                    <div 
                        style={props}
                        className="question-group"
                    >
                        <h2 className="question-text">{question}</h2>
                        <div className="answer-group">
                            <Answer 
                                text={answer1} 
                                onAnswerClick={onAnswerClick}
                            />
                            <Answer 
                                text={answer2} 
                                onAnswerClick={onAnswerClick}
                            />
                            <Answer 
                                text={answer3} 
                                onAnswerClick={onAnswerClick}
                            />
                            <Answer 
                                text={answer4} 
                                onAnswerClick={onAnswerClick}
                            />
                        </div>
                    </div>
                )}
            </Spring>
        </div>
    )
}

export default Question;