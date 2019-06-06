import React from 'react';
import Answer from './Answer';

const Question = (props) => {
    return (
        <div>
            <div>{props.image}</div>
            <div>{props.question}</div>
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
    )
}

export default Question;