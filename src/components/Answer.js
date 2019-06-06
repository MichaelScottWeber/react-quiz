import React from 'react';

const Answer = ({text, onAnswerClick}) => {
    return (
        <div onClick={() => onAnswerClick(text)}>
            {text}
        </div>
    )
}

export default Answer;