import React from 'react';
import './Correct.css';

const Correct = (props) => {
    return (
        <div className="correct">
            <div className="top-info">
                <div className="line"></div>
                <p>{props.currentQuestion} of {props.totalQuestions} </p>
                <div className="line"></div>
            </div>
            <div className="img-container">
                <img className="img" src={props.image} />
            </div>
            <p>{props.message}</p>
            <div className="button" onClick={props.nextQuestion}>NEXT</div>
        </div>
    )
}

export default Correct;