import React from 'react';

const Correct = (props) => {
    return (
        <div>
            <div>{props.image}</div>
            <div>{props.message}</div>
            <div onClick={props.nextQuestion}>NEXT</div>
        </div>
    )
}

export default Correct;