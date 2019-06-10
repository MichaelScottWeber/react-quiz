import React from 'react';
import './Final.css';

const Final = (props) => {
    return (
        <div className="final">
            <p>{props.totalCorrect}/{props.totalQuestions}</p>
            <h3>Result: {props.percentCorrect}%</h3>
            <div className="button" onClick={props.takeQuizAgain}>
                TAKE AGAIN
            </div>
        </div>
    )
}

export default Final;