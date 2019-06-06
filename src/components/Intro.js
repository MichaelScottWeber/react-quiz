import React from 'react';

const Intro = (props) => {
    return (
        <div>
            <div>{props.image}</div>
            <div>{props.message}</div>
            <div onClick={props.nextQuestion}>NEXT</div>
        </div>
    )
}

export default Intro;