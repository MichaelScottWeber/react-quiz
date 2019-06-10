import React from 'react';
import './Incorrect.css';

const Incorrect = (props) => {
    return (
        <div className="incorrect">
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

export default Incorrect;