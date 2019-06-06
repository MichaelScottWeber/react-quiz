import React from 'react';

const Final = (props) => {
    return (
        <div>
            <div>{props.image}</div>
            <div>{props.message}</div>
            <div>You answered {props.totalCorrect} questions correctly</div>
            <div>Out of {props.totalQuestions} total questions</div>
            <div>{props.percentCorrect} percent right</div>
            <div onClick={props.takeQuizAgain}>
                TAKE AGAIN
            </div>
        </div>
    )
}

export default Final;