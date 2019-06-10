import React from 'react';
import './Answer.css';

const Answer = ({text, onAnswerClick}) => {
    return (
        <div className="answer" onClick={() => onAnswerClick(text)}>
            {text}
        </div>
    )
}

export default Answer;